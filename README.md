# LeetCode Study

準備台灣後端面試的白板題。

**目標不是刷題數，是「沒看過的 Medium，現場寫得出來」。**

單位是**機制**不是題目——高頻機制共 23 個，缺口 11 個，約 20 題。不是幾百題。

---

## 檔案

| 檔案 | 放什麼 |
|---|---|
| [CLAUDE.md](CLAUDE.md) | **硬規則**。AI 不給 code 片段、不產線上 HTML、回話要短 |
| [STUDY_PLAN.md](STUDY_PLAN.md) | 當前計畫。**第零節是最新規則，優先於其餘內容** |
| [notes/機制地圖.md](notes/機制地圖.md) | **分母**。23 個高頻機制、缺口、計分板 |
| [roadmap.html](roadmap.html) | **刷題地圖**：代碼隨想錄完整範圍、每題狀態、基石題。由 `scripts/gen_roadmap.py` 產生，不要手改 |
| [scripts/](scripts/) | `gen_roadmap.py` 與模板。練完題執行 `python3 scripts/gen_roadmap.py` 更新地圖 |
| [progress.md](progress.md) | 每題狀態、輔助等級、存量審計 |
| [log.md](log.md) | 每次 session 一則，誠實版不美化。新的在最上面 |
| [checklist.md](checklist.md) | **範圍**：代碼隨想錄 12 章＋補充，含 ⭐☆ 與 🧱 基石標記（`:LeetNext` 也讀這個） |
| [notes/insight-日誌.md](notes/insight-日誌.md) | 機制心得，複習前先讀 |
| [archive-舊計畫.md](archive-舊計畫.md) | 已被取代的舊流程 |

`roadmap.html` 是產生出來的：範圍改 `checklist.md`，狀態來自 LeetCode 帳號與 `progress.md`。

---

## 怎麼練

解題在 Neovim（[leetcode.nvim](https://github.com/kawre/leetcode.nvim)），語言 C#。
檔案在 `~/.local/share/nvim/leetcode/`，**不收進這個 repo**——這裡只放紀錄與計畫。

### 每題流程（不准跳）

```
① 先講想法（文字，不寫 code）
② 先講時間／空間複雜度
③ 才動手寫
④ AI 跑 fuzz，只給最小反例
```

②在寫 code 之前，不是寫完才補。

### 三關驗收

| 關 | 條件 |
|---|---|
| 關 1 | 閉卷重解代表題，fuzz 0 mismatch |
| 關 2 | 同一個機制換另一題 |
| 關 3 | **隔 ≥2 天，AI 丟沒看過的變形，不預告** |

### 輔助等級

`獨立` ｜ `有小提示` ｜ `靠引導` ｜ `看答案`
**只有前兩者算進存量。** 絕不把被引導的成果寫成獨立完成。

---

## 計分板

| | 量什麼 |
|---|---|
| **關 3 通過數** | **目標**（陌生題現場寫出來） |
| 每週冷測結果 | 唯一誠實的刻度，照實記，交白卷就記交白卷 |
| 存量（關 1 過的題數） | 量的是**記憶**，不是目標 |

目前數字在 [notes/機制地圖.md](notes/機制地圖.md)。

---

## 已知的事（實證，不是推測）

- **瓶頸是連續性，不是能力。** 三次中斷：6 週、5 週、13 天。不中斷時五週做了 57 題。
  → 每天 20 分鐘是底線，單次 60~90 分鐘就停。
- **失誤是粗心型不是觀念型。** 變數寫錯、漏符號；觀念關幾乎都過。
  → 靠 [STUDY_PLAN 第六節](STUDY_PLAN.md) 的送出前自查清單擋，不靠記性。
- **AI 用文字講新的抽象概念 → 失敗。** 拿具體案例問具體一點 → 有效。
- **寫過 ≠ 會。** 6/12–7/18 做了 57 題，存量只有 7。差的是驗證。
