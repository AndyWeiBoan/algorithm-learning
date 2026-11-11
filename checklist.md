# 題目清單（代碼隨想錄 12 章骨架）

> 2026-09-01 從 STUDY_PLAN.md 搬出來獨立成檔。當「不漏掉 pattern」的 checklist 用；實際做題先後順序見 STUDY_PLAN.md 的執行路線。

## 怎麼用

- **由上往下刷。下一題 = 第一個還沒打勾 `[ ]` 的題目。**
- ⭐ = **必刷核心**（先把每個主題的 ⭐ 都刷完，建立 pattern 直覺）
- ☆ = **進階加強**（核心熟了再回頭補）
- 〔🧱基石：概念〕＝**基石題**：某個演算法概念的「第一題」，學那個概念從它開始，不見得簡單、也不見得是面試題。沒標的＝延伸題（同概念的變形、考試型）。
- 建議路線：**第一輪只刷 ⭐**，跑完一遍 12 主題後，第二輪再補 ☆。
- 解完：把 `[ ]` 改成 `[x]`，並到 [progress.md](progress.md) 補上難度與下次複習日。
- 開題：nvim 裡 `:Leet list`，輸入題號或題名即可。

> 圖論章節原版是卡碼網（kamacoder.com）題目，leetcode.nvim 開不了，已替換為 LeetCode 對應經典題。


## 1. 陣列 Array
- [x] ⭐ 704 Binary Search — ✅ 純模板一次過(另 34 找左右邊界 / 35 插入點 也 fuzz 過,見 progress.md) 〔🧱基石：二分搜尋：區間不變量〕
- [x] ⭐ 27 Remove Element 〔🧱基石：快慢指針：原地覆寫〕
- [x] ⭐ 977 Squares of a Sorted Array
- [x] ⭐ 209 Minimum Size Subarray Sum 〔🧱基石：可變滑動窗口〕

### 🔁 滑動視窗鞏固（加練，非原 roadmap；把 pattern 練熟再回 59）
- [x] 209 Minimum Size Subarray Sum（重做暖身：可變視窗、縮到最短）
- [x] 3 Longest Substring Without Repeating Characters（可變視窗 + 去重）
- [x] 1004 Max Consecutive Ones III（視窗內最多 K 個 0）
- [x] 904 Fruit Into Baskets（視窗內最多 2 種）
- [x] 438 Find All Anagrams in a String（固定視窗 + 計數） 〔🧱基石：固定滑動窗口＋計數〕
- [x] 567 Permutation in String（固定視窗 + 計數）
- [x] 424 Longest Repeating Character Replacement（視窗 - 最多頻次 ≤ K）
- [ ] 🅢 76 Minimum Window Substring（封頂 Hard：縮放求最短覆蓋）— **選做**，Medium 穩過不需要，有餘力再回

- [ ] ☆ 59 Spiral Matrix II 〔🧱基石：模擬：邊界不變量〕

### 🔥 前綴和 Prefix Sum（2026-07-18 校準新增，高頻缺口，優先）
- [ ] ⭐ 238 Product of Array Except Self（除自己外全部乘積，不准用除法：左前綴×右後綴）
- [x] ⭐ 560 Subarray Sum Equals K（前綴和 + 雜湊：套路題，先暴力 O(n²) 再用「presum 差」壓到 O(n)） 〔🧱基石：前綴和＋雜湊〕

## 2. 鏈結串列 Linked List
- [x] ⭐ 203 Remove Linked List Elements 〔🧱基石：dummy head 虛擬頭節點〕
- [ ] ☆ 707 Design Linked List 〔🧱基石：鏈結串列基本操作〕
- [x] ⭐ 206 Reverse Linked List 〔🧱基石：鏈結串列反轉（三指針）〕
- [x] ⭐ 24 Swap Nodes in Pairs（閉卷重解，跨對接線 tmp.next + res 接對，O(1) 最佳解）
- [x] ⭐ 19 Remove Nth Node From End of List（一趟雙指針間距 + dummy，O(n) 單掃；理解 dummy 原理） 〔🧱基石：快慢指針：固定間距〕
- [ ] ☆ 面試題 02.07 Intersection of Two Linked Lists
- [x] ⭐ 142 Linked List Cycle II（Floyd O(1)：偵測「先動再比較」、找入口「回 head 同速走」，自證 a=kc−b） 〔🧱基石：Floyd 判環找入口〕
- [ ] ⭐ 146 LRU Cache（設計題，2026-07-18 校準新增：中國前三高頻、台灣也常出。HashMap + 雙向鏈表，get/put 都要 O(1)。幾乎必背）

## 3. 雜湊表 Hash Table
- [x] ⭐ 242 Valid Anagram 〔🧱基石：計數陣列〕
- [x] ☆ 1002 Find Common Characters
- [ ] ⭐ 349 Intersection of Two Arrays 〔🧱基石：HashSet 去重〕
- [ ] ⭐ 202 Happy Number
- [x] ⭐ 1 Two Sum 〔🧱基石：HashMap 補數查表〕
- [ ] ⭐ 454 4Sum II
- [x] ☆ 383 Ransom Note
- [x] ⭐ 15 3Sum 〔🧱基石：排序＋雙指針（N-Sum 骨架）〕
- [ ] ⭐ 18 4Sum

## 4. 字串 String
- [x] ⭐ 344 Reverse String 〔🧱基石：雙指針反轉〕
- [ ] ☆ 541 Reverse String II
- [ ] ⭐ 151 Reverse Words in a String
- [x] ⭐ 28 Find the Index of the First Occurrence (strStr / KMP) 〔🧱基石：KMP 字串匹配〕
- [ ] ☆ 459 Repeated Substring Pattern

## 5. 雙指針 Two Pointers
> 多與陣列/字串/鏈結串列交叉，這裡補幾題經典。
- [x] ⭐ 11 Container With Most Water 〔🧱基石：對撞指針〕
- [x] ⭐ 283 Move Zeroes
- [ ] ☆ 26 Remove Duplicates from Sorted Array

**N-Sum 家族 — 必學，排最後（經典、面試偶爾追問，難在去重邊界）**
- [ ] ⭐ 15 3Sum（排序 + 固定 a + 左右雙指針找 -a；三處去重：固定值跳、找到解後左右跳）
- [ ] ☆ 18 4Sum（3Sum 外再包一層迴圈）
- 註：2Sum(1) 用雜湊已是另一路；N-Sum 這串正好練你最弱的「邊界去重」。

## 6. 堆疊與佇列 Stack & Queue
- [x] ⭐ 232 Implement Queue using Stacks（兩 stack：push 進 input；pop/peek 時 output 空了才整批倒過來，攤還 O(1)） 〔🧱基石：棧⇄佇列互換〕
- [x] ⭐ 225 Implement Stack using Queues（兩 queue 輪流當 active：pop 倒到另一條剩最後一個取出、翻 flag；top 再塞回去）
- [x] ⭐ 20 Valid Parentheses（stack：開括號 push、閉括號 pop 比對；空棧即 false，收尾檢查 stack 必須空） 〔🧱基石：棧：括號配對〕
- [x] ⭐ 1047 Remove All Adjacent Duplicates In String（stack：頂==當前就消一對，否則推回；輸出反轉。坑：char[] 的 .Reverse() 是 LINQ 不就地改，用 Array.Reverse 或倒進另一個 stack）
- [x] ⭐ 150 Evaluate Reverse Polish Notation（stack：數字 push、運算子 pop 兩個 right 先 left 後算完推回。標準解，面試官要的就是這個）
- [x] ⭐ 215 Kth Largest Element in an Array — ✅ 2026-07-18 heap 封頂 k O(n log k)(策略自己從 347 遷移)+ sort 版 + 深理解上浮傳遞性,fuzz 50萬過。Heap/Top-K 第二題 〔🧱基石：Heap／Top-K〕
- [ ] ☆ 239 Sliding Window Maximum 〔🧱基石：單調佇列〕
- [x] ⭐ 347 Top K Frequent Elements — ✅ 2026-07-18 桶排序 O(n) + 自己手刻 min-heap(全程沒看答案、bug 自修),fuzz 對照 .NET PriorityQueue 50萬過。開了 Heap/Top-K 這張卡

## 7. 二元樹 Binary Tree
- [x] ⭐ 144 Binary Tree Preorder Traversal（地基：遞迴 + 迭代用 Stack；走左到底沿路存右孩子） 〔🧱基石：DFS 遞迴遍歷〕
- [x] ⭐ 94 Binary Tree Inorder Traversal（地基：遞迴挪 Add 到中間；迭代單層迴圈「左沉 push、左盡 pop 處理轉右」）
- [x] ⭐ 145 Binary Tree Postorder Traversal（地基：遞迴挪 Add 到最後；迭代「根右左 + 反轉」trick）
- [x] ⭐ 102 Binary Tree Level Order Traversal 〔🧱基石：BFS 層序遍歷〕
- [x] ⭐ 226 Invert Binary Tree
- [x] ⭐ 101 Symmetric Tree
- [x] ⭐ 104 Maximum Depth of Binary Tree 〔🧱基石：遞迴回傳值（後序聚合）〕
- [ ] ☆ 111 Minimum Depth of Binary Tree
- [x] ☆ 222 Count Complete Tree Nodes
- [x] ⭐ 110 Balanced Binary Tree（後序自底向上算高度，-1 哨兵兼判斷，O(n) 單趟）
- [x] ⭐ 543 Diameter of Binary Tree（自底向上聚合：遞迴回傳高度、外部變數追蹤 max(左高+右高)）
- [ ] ☆ 257 Binary Tree Paths 〔🧱基石：樹上回溯（路徑）〕
- [x] ☆ 404 Sum of Left Leaves
- [x] ☆ 513 Find Bottom Left Tree Value
- [x] ⭐ 112 Path Sum
- [x] ⭐ 106 Construct Binary Tree from Inorder and Postorder（後序尾=根、中序切左右、用左數換算 postorder 區間遞迴；索引邊界自己刻出來） 〔🧱基石：構造二元樹〕
- [x] ☆ 654 Maximum Binary Tree
- [x] ☆ 617 Merge Two Binary Trees
- [x] ⭐ 700 Search in a Binary Search Tree 〔🧱基石：BST 性質〕
- [x] ⭐ 98 Validate Binary Search Tree（迭代中序 + last 嚴格遞增驗證；⏳ 回頭補 min/max 範圍法練「約束往下傳」）
- [ ] ☆ 530 Minimum Absolute Difference in BST
- [ ] ☆ 501 Find Mode in Binary Search Tree
- [x] ⭐ 236 Lowest Common Ancestor of a Binary Tree（後序遞迴：node 是 p/q 回自己、左右都非 null 回 root、單邊往上傳） 〔🧱基石：LCA：後序合併〕
- [x] ⭐ 235 Lowest Common Ancestor of a BST — ✅ 2026-07-15 fuzz 50萬過(BST 大小性質、一個 while 往下走不用遞迴;坑:root.val 該用 node.val 死迴圈)
- [x] ⭐ 701 Insert into a Binary Search Tree
- [x] ⭐ 450 Delete Node in a BST — ✅ 2026-07-18 fuzz 50萬過(三情況;兩小孩用 FindMin 找後繼抄值+DeleteNode 丟回遞迴刪原節點)
- [ ] ☆ 669 Trim a Binary Search Tree
- [x] ⭐ 108 Convert Sorted Array to Binary Search Tree — ✅ 2026-07-16 fuzz 30萬過(遞迴每段取中間當 root,傳 lo/hi index;悟:取中間要遞迴對每段做非只做一次)
- [x] ☆ 538 Convert BST to Greater Tree

## 8. 回溯 Backtracking
- [x] ⭐ 77 Combinations — ✅ 2026-07-05 fuzz 91 種窮舉過 〔🧱基石：回溯模板：組合〕
- [ ] ☆ 216 Combination Sum III
- [ ] ⭐ 17 Letter Combinations of a Phone Number
- [x] ⭐ 39 Combination Sum — ✅ 2026-07-05 fuzz 10萬過(卡在狀態還原,磨出傳值/傳參考原理)
- [x] ⭐ 40 Combination Sum II — ✅ 2026-07-05 fuzz 10萬過0重複(同層去重 i>idx && cand[i-1]==cand[i]) 〔🧱基石：回溯：同層去重〕
- [x] ⭐ 22 Generate Parentheses — ✅ 2026-07-07 fuzz n≤12 卡塔蘭數全過(悟:條件是「可以放」非「一定放」,能放就分岔)
- [x] ⭐ 79 Word Search — ✅ 2026-07-08 fuzz 30萬過(自己抓到哨兵撞值 bug:'x' 標記撞盤面真實 'x')
- [ ] ☆ 698 Partition to K Equal Sum Subsets — 經典但偏難,排 22/79 後
- [ ] ⭐ 131 Palindrome Partitioning 〔🧱基石：回溯：切割〕
- [ ] ☆ 93 Restore IP Addresses
- [x] ⭐ 78 Subsets — ✅ 2026-07-06 閉卷一次過(收集放迴圈前=每節點都收) 〔🧱基石：回溯：子集〕
- [x] ⭐ 90 Subsets II — ✅ 2026-07-06 fuzz 20萬過(78收集+40去重;坑 i>idx 非 i>0)
- [ ] ☆ 491 Non-decreasing Subsequences
- [x] ⭐ 46 Permutations 〔🧱基石：回溯：排列（used 陣列）〕
- [ ] ⭐ 47 Permutations II
- [ ] ☆ 332 Reconstruct Itinerary
- [ ] ⭐ 51 N-Queens 〔🧱基石：回溯：棋盤〕
- [ ] ☆ 37 Sudoku Solver

## 9. 貪心 Greedy
- [ ] ⭐ 455 Assign Cookies 〔🧱基石：貪心入門：局部最優〕
- [ ] ☆ 376 Wiggle Subsequence
- [x] ⭐ 53 Maximum Subarray
- [ ] ⭐ 122 Best Time to Buy and Sell Stock II
- [ ] ⭐ 55 Jump Game 〔🧱基石：貪心：覆蓋範圍〕
- [ ] ⭐ 45 Jump Game II
- [ ] ☆ 1005 Maximize Sum of Array After K Negations
- [ ] ⭐ 134 Gas Station
- [ ] ☆ 135 Candy
- [x] ☆ 860 Lemonade Change
- [ ] ☆ 406 Queue Reconstruction by Height
- [ ] ⭐ 452 Minimum Number of Arrows to Burst Balloons 〔🧱基石：貪心：區間重疊〕
- [ ] ⭐ 435 Non-overlapping Intervals
- [ ] ⭐ 763 Partition Labels
- [x] ⭐ 56 Merge Intervals
- [ ] ☆ 738 Monotone Increasing Digits
- [ ] ☆ 968 Binary Tree Cameras

## 10. 動態規劃 DP
### 基礎
- [x] ⭐ 509 Fibonacci Number 〔🧱基石：DP 五部曲入門〕
- [x] ⭐ 70 Climbing Stairs — ✅ 2026-07-11 memo+邊界磨過,45階0ms(見 progress.md)
- [x] ☆ 746 Min Cost Climbing Stairs — ✅ 2026-07-12 fuzz 30萬過(DP主體自己寫;悟強制vs可選,見 progress.md)
- [x] ⭐ 62 Unique Paths 〔🧱基石：二維網格 DP〕
- [ ] ☆ 63 Unique Paths II
- [ ] ☆ 343 Integer Break
- [ ] ☆ 96 Unique Binary Search Trees
### 背包 Knapsack
- [ ] ⭐ 416 Partition Equal Subset Sum 〔🧱基石：0-1 背包〕
- [ ] ☆ 1049 Last Stone Weight II
- [ ] ⭐ 494 Target Sum
- [ ] ☆ 474 Ones and Zeroes
- [ ] ☆ 518 Coin Change II 〔🧱基石：完全背包〕
- [ ] ☆ 377 Combination Sum IV
- [x] ⭐ 322 Coin Change
- [ ] ☆ 279 Perfect Squares
- [ ] ⭐ 139 Word Break
### 打家劫舍 House Robber
- [x] ⭐ 198 House Robber 〔🧱基石：選／不選 DP〕
- [x] ⭐ 213 House Robber II — ✅ 2026-07-12 fuzz 30萬過(幾乎獨立;環形→拆兩趟直線198取max)
- [ ] ☆ 337 House Robber III
### 股票 Stock
- [x] ⭐ 121 Best Time to Buy and Sell Stock 〔🧱基石：股票狀態機 DP〕
- [ ] ⭐ 123 Best Time to Buy and Sell Stock III
- [ ] ⭐ 188 Best Time to Buy and Sell Stock IV
- [ ] ☆ 309 Best Time to Buy and Sell Stock with Cooldown
- [ ] ☆ 714 Best Time to Buy and Sell Stock with Transaction Fee
### 子序列 Subsequence
- [ ] ⭐ 300 Longest Increasing Subsequence 〔🧱基石：子序列 DP（單序列）〕
- [ ] ☆ 674 Longest Continuous Increasing Subsequence
- [ ] ☆ 718 Maximum Length of Repeated Subarray
- [ ] ⭐ 1143 Longest Common Subsequence 〔🧱基石：子序列 DP（雙序列）〕
- [ ] ☆ 1035 Uncrossed Lines
- [x] ⭐ 392 Is Subsequence
- [ ] ☆ 115 Distinct Subsequences
- [ ] ☆ 583 Delete Operation for Two Strings
- [ ] ⭐ 72 Edit Distance
- [ ] ⭐ 647 Palindromic Substrings 〔🧱基石：回文／區間 DP〕
- [ ] ☆ 516 Longest Palindromic Subsequence

## 11. 單調堆疊 Monotonic Stack
- [x] ⭐ 739 Daily Temperatures 〔🧱基石：單調棧〕
- [ ] ⭐ 496 Next Greater Element I
- [ ] ☆ 503 Next Greater Element II
- [ ] ⭐ 42 Trapping Rain Water
- [ ] ⭐ 84 Largest Rectangle in Histogram

## 12. 圖論 Graph（LeetCode 對應題）
> backend 定位：核心(島嶼/BFS/DFS)白板常出，先做；經典(並查集/拓撲/Dijkstra)當「必學但排最後」——面試少考，但聊天/看 code/系統討論會用到名詞，不能講不過去。進階最短路做完 Dijkstra 就好。

**A. 核心 — 先做（複用樹的 BFS/DFS 引擎）**
- [x] ⭐ 200 Number of Islands（外層 for/for 找起點、遇未訪陸地 +1、stack flood 標 '2'。血淚坑：BFS 一定要用自己的座標 a/b，別動外層 i/j，否則掃描位置被劫持會少算） 〔🧱基石：網格 DFS／BFS（flood fill）〕
- [x] ⭐ 695 Max Area of Island（200 遞迴版的回傳值變體：step 回傳「1 + 四方向遞迴和」，外層 Math.Max 收最大面積；標記走過直接改 0）
- [x] ☆ 130 Surrounded Regions（反向思考：先從邊界的 O flood 標成 '-'（逃得掉），收尾 '-'→O、剩下 O→X。補集思維）
- [x] ☆ 417 Pacific Atlantic Water Flow（兩海各自從邊界「逆流」往 ≥ 當前高度爬，兩張 boolean 表兼 visited，最後掃交集；不需去重）
- [x] ⭐ 994 Rotting Oranges (BFS 多源)（所有 2 先全入隊當第 0 層，count 鎖層數分鐘；入隊即標記防重複；收尾還有 1 回 -1、無新鮮回 0） 〔🧱基石：多源 BFS〕

**B. 經典 — 必學，排最後（聊天/共識用，面試低頻）**
- [x] ⭐ 207 Course Schedule (拓撲排序 / Kahn) — ✅ 2026-07-04 fuzz 20萬過 〔🧱基石：拓撲排序〕
- [ ] ☆ 210 Course Schedule II
- [ ] ⭐ 547 Number of Provinces (並查集) 〔🧱基石：並查集〕
- [ ] ☆ 684 Redundant Connection (並查集)
- [ ] ⭐ 127 Word Ladder (BFS 最短路) 〔🧱基石：BFS 最短路〕
- [ ] ☆ 743 Network Delay Time (Dijkstra，最短路經典，必學) 〔🧱基石：Dijkstra 最短路〕
- [ ] ☆ 787 Cheapest Flights Within K Stops (Bellman-Ford，行有餘力再碰)

## 13. 排序 Sorting（補充，代碼隨想錄沒有這章）
> 2026-10-25 實查：HiSKIO 調查「面試最常遇到的題型」第一名是排序。手寫 quick／merge 是基石。
- [ ] ⭐ 912 Sort an Array（手寫 mergesort 與 quicksort 各一次，不准呼叫內建排序） 〔🧱基石：手寫排序（merge／quick）〕
- [ ] ☆ 75 Sort Colors（三路 partition，quicksort 的 partition 變形）
- [ ] ☆ 148 Sort List（mergesort 用在鏈結串列，接 21 的 merge）
