#!/usr/bin/env python3
"""產生 data/roadmap-data.js（roadmap.html 讀它來畫地圖）。

範圍：checklist.md（代碼隨想錄 12 章 + 補充）。
狀態：LeetCode 帳號提交紀錄（用 leetcode.nvim 的 cookie 抓）＋ data/records.json（練習紀錄）。

用法：
    python3 scripts/gen_roadmap.py           # 只更新最近 AC 的題，快
    python3 scripts/gen_roadmap.py --full    # 全部重抓（約 1 分鐘）
    python3 scripts/gen_roadmap.py --offline # 不連網，只用快取
"""
import datetime
import json
import os
import re
import subprocess
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.expanduser('~/.cache/leetcode-study')
COOKIE = os.path.expanduser('~/.cache/nvim/leetcode/cookie')
PROBLEMLIST = os.path.expanduser('~/.cache/nvim/leetcode/problemlist')
LM_README = 'https://raw.githubusercontent.com/youngyangyang04/leetcode-master/master/README.md'
CUT_2026 = datetime.datetime(2026, 1, 1).timestamp()
# 2026 一刷 06-11～09-07，空檔 47 天，二刷 10-24 起
CUT_R2 = datetime.datetime(2026, 10, 1).timestamp()

# 面試高頻（notes/機制地圖.md 的主線範圍）
HIGH = set('206 19 203 24 142 92 21 144 94 145 102 104 110 543 106 236 98 235 450 108 '
           '20 1047 150 232 225 49 242 128 1 454 146 912'.split())
CH_ZH = {1: '陣列', 2: '鏈結串列', 3: '雜湊表', 4: '字串', 5: '雙指針', 6: '堆疊與佇列', 7: '二元樹',
         8: '回溯', 9: '貪心', 10: '動態規劃', 11: '單調堆疊', 12: '圖論', 13: '排序'}


def cache_path(name):
    return os.path.join(CACHE, name)


def load_json(name, default):
    try:
        with open(cache_path(name), encoding='utf-8') as f:
            return json.load(f)
    except (OSError, ValueError):
        return default


def save_json(name, obj):
    os.makedirs(CACHE, exist_ok=True)
    with open(cache_path(name), 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False)


def gql(query, variables):
    cookie = open(COOKIE).read().strip()
    csrf = re.search(r'csrftoken=([^;]+)', cookie).group(1)
    body = json.dumps({'query': query, 'variables': variables})
    for _ in range(4):
        r = subprocess.run(['curl', '-s', 'https://leetcode.com/graphql/',
                            '-H', 'content-type: application/json', '-H', 'cookie: ' + cookie,
                            '-H', 'x-csrftoken: ' + csrf, '-H', 'referer: https://leetcode.com/',
                            '-H', 'user-agent: Mozilla/5.0', '--data', body],
                           capture_output=True, text=True)
        try:
            return json.loads(r.stdout)['data']
        except (ValueError, KeyError, TypeError):
            time.sleep(2)
    raise RuntimeError('LeetCode API 沒回應，可用 --offline 先產生')


Q_AC = ('query q($skip:Int,$limit:Int,$filters:QuestionListFilterInput){ questionList(categorySlug:"",'
        'limit:$limit,skip:$skip,filters:$filters){ totalNum data { questionFrontendId title titleSlug '
        'difficulty topicTags { slug } } } }')
Q_SUBS = ('query s($q:String!,$o:Int!,$l:Int!){ questionSubmissionList(offset:$o,limit:$l,questionSlug:$q)'
          '{ hasNext submissions { statusDisplay timestamp } } }')
Q_RECENT = ('query r($u:String!,$l:Int!){ recentAcSubmissionList(username:$u,limit:$l){ titleSlug } }')


def fetch_subs(slug):
    ts, off = [], 0
    while True:
        d = gql(Q_SUBS, {'q': slug, 'o': off, 'l': 40})['questionSubmissionList']
        ts += [(int(s['timestamp']), s['statusDisplay']) for s in d['submissions']]
        if not d['hasNext']:
            return ts
        off += 40


def refresh_account(full):
    ac = []
    skip = 0
    while True:
        d = gql(Q_AC, {'skip': skip, 'limit': 100, 'filters': {'status': 'AC'}})['questionList']
        ac += d['data']
        skip += 100
        if skip >= d['totalNum']:
            break
    save_json('ac_all.json', [{'frontendQuestionId': q['questionFrontendId'], 'title': q['title'],
                               'titleSlug': q['titleSlug'], 'difficulty': q['difficulty'],
                               'topicTags': q['topicTags']} for q in ac])
    subs = {} if full else load_json('subs.json', {})
    user = json.load(open(PROBLEMLIST)).get('username', '')
    recent = {r['titleSlug'] for r in gql(Q_RECENT, {'u': user, 'l': 20})['recentAcSubmissionList']}
    todo = [q for q in ac if full or q['questionFrontendId'] not in subs or q['titleSlug'] in recent]
    for i, q in enumerate(todo, 1):
        print(f'\r  抓提交紀錄 {i}/{len(todo)}', end='', flush=True)
        subs[q['questionFrontendId']] = fetch_subs(q['titleSlug'])
        time.sleep(0.15)
    if todo:
        print()
    save_json('subs.json', subs)


def lm_chinese_names():
    path = cache_path('lm_readme.md')
    if not os.path.exists(path):
        r = subprocess.run(['curl', '-sL', LM_README], capture_output=True, text=True)
        if r.returncode == 0 and r.stdout:
            os.makedirs(CACHE, exist_ok=True)
            open(path, 'w', encoding='utf-8').write(r.stdout)
    try:
        text = open(path, encoding='utf-8').read()
    except OSError:
        return {}
    return {str(int(n)): zh for n, zh in re.findall(r'\./problems/(\d{4})\.(.+?)\.md', text)}


def load_records():
    with open(os.path.join(ROOT, 'data', 'records.json'), encoding='utf-8') as f:
        recs = json.load(f)
    return {k: sorted(v, key=lambda e: e['date']) for k, v in recs.items() if not k.startswith('_')}


def build_data():
    subs = load_json('subs.json', {})
    acq = {q['frontendQuestionId']: q for q in load_json('ac_all.json', [])}
    plist = {str(p['frontend_id']): p for p in json.load(open(PROBLEMLIST))['data']}
    zh = lm_chinese_names()
    recs = load_records()
    grad = {n for n, evs in recs.items() if any(e['kind'] in ('閉卷', '冷測') for e in evs)}

    def rec_ts(n):
        return [datetime.datetime.fromisoformat(e['date']).timestamp() for e in recs.get(n, [])]

    def status(n):
        if n in grad:
            return 'grad'
        ts = subs.get(n)
        if not ts:
            return 'none'
        return 'y26' if any(t >= CUT_2026 for t, _ in ts) else 'y19'

    def passes(n):
        # (2019 舊刷, 2026 一刷, 2026 二刷)：各時段有沒有 AC
        ac = [t for t, s in subs.get(n, []) if s == 'Accepted'] + rec_ts(n)
        return (any(t < CUT_2026 for t in ac), any(CUT_2026 <= t < CUT_R2 for t in ac),
                any(t >= CUT_R2 for t in ac))

    text = open(os.path.join(ROOT, 'checklist.md'), encoding='utf-8').read()
    base_of = {n: c for n, c in re.findall(r'^- \[[ x]\] .*?(\d+) .*?〔🧱基石：(.+?)〕', text, re.M)}
    chapters, cur = [], None
    for line in text.splitlines():
        m = re.match(r'^## (\d+)\. (.+)$', line)
        if m:
            no = int(m.group(1))
            cur = {'no': no, 'zh': CH_ZH.get(no, m.group(2)), 'groups': []}
            chapters.append(cur)
            continue
        if cur is None:
            continue
        m = re.match(r'^### (.+)$', line) or re.match(r'^\*\*(.+?)\*\*', line)
        if m:
            g = re.split(r'[（(—]', re.sub(r'[🔁🔥]', '', m.group(1)))[0].strip()
            cur['groups'].append({'g': g, 'items': []})
            continue
        m = re.match(r'^- \[[ x]\] (.*)$', line)
        if not m:
            continue
        rest = m.group(1)
        star = '⭐' if '⭐' in rest else ('☆' if '☆' in rest else '')
        rest = re.sub(r'[⭐☆🅢]', '', rest).strip()
        if rest.startswith('面試題'):
            n, key, num = '160', '160', '02.07'
        else:
            mm = re.match(r'(\d+)\s', rest)
            if not mm:
                continue
            n = key = num = mm.group(1)
        p = plist.get(key, {})
        if not cur['groups']:
            cur['groups'].append({'g': '', 'items': []})
        cur['groups'][-1]['items'].append({
            'n': num, 't': p.get('title', rest), 'zh': zh.get(key, ''), 'slug': p.get('title_slug', ''),
            'star': star, 'st': status(key), 'd': (p.get('difficulty') or 'Easy')[0],
            'hi': key in HIGH, 'base': base_of.get(key, ''), 'r': passes(key),
        })

    inlist = {i['n'] for c in chapters for g in c['groups'] for i in g['items']} | {'160'}
    sql, other = [], []
    for n, q in sorted(acq.items(), key=lambda kv: int(kv[0])):
        if n in inlist:
            continue
        it = {'n': n, 't': q['title'], 'slug': q['titleSlug'], 'st': status(n), 'r': passes(n)}
        (sql if any(t['slug'] == 'database' for t in q['topicTags']) else other).append(it)

    # 紀錄裡的題目資訊（含清單外的冷測題）
    rec_items = {}
    for n in recs:
        p = plist.get(n, {})
        rec_items[n] = {'n': n, 't': p.get('title', n), 'zh': zh.get(n, ''), 'slug': p.get('title_slug', ''),
                        'd': (p.get('difficulty') or 'Easy')[0], 'st': status(n), 'r': passes(n),
                        'ev': recs[n]}
    for c in chapters:
        for g in c['groups']:
            for it in g['items']:
                it['ev'] = recs.get(it['n'], [])
    for it in sql + other:
        it['ev'] = recs.get(it['n'], [])

    stamp = datetime.date.today().isoformat()
    return {'chapters': chapters, 'sql': sql, 'other': other, 'records': rec_items, 'stamp': stamp}


def main():
    args = set(sys.argv[1:])
    if '--offline' not in args:
        print('更新帳號資料…')
        refresh_account('--full' in args)
    data = build_data()
    # 本地 HTML 不能 fetch 旁邊的 .json，所以包成一行 JS 讓 <script src> 載入
    out = 'window.ROADMAP = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n'
    open(os.path.join(ROOT, 'data', 'roadmap-data.js'), 'w', encoding='utf-8').write(out)
    items = [i for c in data['chapters'] for g in c['groups'] for i in g['items']]
    print(f'data/roadmap-data.js 已更新：{len(items)} 題，基石 {sum(1 for i in items if i["base"])} 題，'
          f'有紀錄 {len(data["records"])} 題')


if __name__ == '__main__':
    main()
