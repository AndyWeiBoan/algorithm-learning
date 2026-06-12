# LeetCode Study

按演算法主題分類的刷題知識庫。每題記錄**多種解法 + 取捨比較 + 複雜度**，搭配進度追蹤與間隔複習。

語言：C# / Python / C。

## 怎麼用

1. 在 Neovim 用 [leetcode.nvim](https://github.com/kawre/leetcode.nvim) 抓題、寫、`:Leet run` / `:Leet submit`。
2. 解完後，把定稿解法整理進對應主題資料夾：
   ```
   topics/<主題>/<題號>-<題名>/
   ├── NOTES.md      # 思路 + 解法取捨表 + 複雜度（複製 templates/problem.md）
   ├── solution.cs
   ├── solution.py
   └── solution.c
   ```
3. 更新 [progress.md](progress.md) 的狀態與下次複習日。

## 導覽

- **[ROADMAP.md](ROADMAP.md)** — 學習路線，按主題順序排（參考代码随想录）。
- **[progress.md](progress.md)** — 進度追蹤：做過哪些、難度、待複習清單。
- **[templates/problem.md](templates/problem.md)** — 單題筆記模板。
- **topics/** — 各主題資料夾，每個有自己的 README（模式總結 + 題目清單）。

## 分工

| 工具 | 角色 |
|------|------|
| leetcode.nvim | 練習場：抓題、寫、測、提交（暫存在 `~/.local/share/nvim/leetcode`） |
| 本 repo | 知識庫：定稿解法 + 取捨筆記，git 版控、可回顧複習 |

## 核心原則

> 每題不只求 AC，而是問：**有哪幾種解法？各自的時間/空間？什麼情境該用哪個？取捨是什麼？**
