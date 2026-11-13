window.ROADMAP = {
 "chapters": [
  {
   "no": 1,
   "zh": "陣列",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "704",
       "t": "Binary Search",
       "zh": "二分查找",
       "slug": "binary-search",
       "star": "⭐",
       "st": "y26",
       "d": "E",
       "hi": false,
       "base": "二分搜尋：區間不變量",
       "r": [
        true,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "27",
       "t": "Remove Element",
       "zh": "移除元素",
       "slug": "remove-element",
       "star": "⭐",
       "st": "y26",
       "d": "E",
       "hi": false,
       "base": "快慢指針：原地覆寫",
       "r": [
        true,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-13",
         "kind": "練習",
         "level": "靠引導",
         "note": "後來改快慢指針（一個變數記放到第幾格、不是 val 就覆蓋過去）寫完，20 萬組 fuzz 全過。選了兩頭夾（left/right 交換），卡在邊界：① while left<right 導致最後一格沒檢查（[2] val=1 回 0）② 內層 while 只擋 right>0，right 退過 left 再交換把 val 換回前面（[2,3,3] val=3 → [3,2,3]）。另外搞不懂 judge 為何 Expected 顯示陣列（它印 nums 前 k 格）。AI 失誤：讀到舊版 code、太晚解釋 judge、太晚建議換寫法，使用者情緒失控，先停。"
        }
       ]
      },
      {
       "n": "977",
       "t": "Squares of a Sorted Array",
       "zh": "有序数组的平方",
       "slug": "squares-of-a-sorted-array",
       "star": "⭐",
       "st": "y19",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "209",
       "t": "Minimum Size Subarray Sum",
       "zh": "长度最小的子数组",
       "slug": "minimum-size-subarray-sum",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "可變滑動窗口",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-02",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "副線二刷。想法和複雜度一開始就對（可變窗口，右擴左縮）。卡在邊界，改了 4 版：① while 條件在 right 到底時就停、沒機會檢查最後的 sum ② res 初始值用 nums.Length 當「沒找到」，答案剛好等於 n 時誤判 ③ 修迴圈時曾寫出無窮迴圈（right < n-1）、陣列越界（right 先加再讀）。AI 只給最小反例 [1] t=1／t=2 和方向提示，修法自己想出。累到想放棄但寫完。30 萬組 fuzz＋10^5 大陣列 0 mismatch。 同晚重寫成標準版（for 擴張＋內層 while 收縮，長度用 i-left+1），一次過 fuzz。"
        }
       ]
      }
     ]
    },
    {
     "g": "滑動視窗鞏固",
     "items": [
      {
       "n": "209",
       "t": "Minimum Size Subarray Sum",
       "zh": "长度最小的子数组",
       "slug": "minimum-size-subarray-sum",
       "star": "",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "可變滑動窗口",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-02",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "副線二刷。想法和複雜度一開始就對（可變窗口，右擴左縮）。卡在邊界，改了 4 版：① while 條件在 right 到底時就停、沒機會檢查最後的 sum ② res 初始值用 nums.Length 當「沒找到」，答案剛好等於 n 時誤判 ③ 修迴圈時曾寫出無窮迴圈（right < n-1）、陣列越界（right 先加再讀）。AI 只給最小反例 [1] t=1／t=2 和方向提示，修法自己想出。累到想放棄但寫完。30 萬組 fuzz＋10^5 大陣列 0 mismatch。 同晚重寫成標準版（for 擴張＋內層 while 收縮，長度用 i-left+1），一次過 fuzz。"
        }
       ]
      },
      {
       "n": "3",
       "t": "Longest Substring Without Repeating Characters",
       "zh": "",
       "slug": "longest-substring-without-repeating-characters",
       "star": "",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "1004",
       "t": "Max Consecutive Ones III",
       "zh": "",
       "slug": "max-consecutive-ones-iii",
       "star": "",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "904",
       "t": "Fruit Into Baskets",
       "zh": "",
       "slug": "fruit-into-baskets",
       "star": "",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "438",
       "t": "Find All Anagrams in a String",
       "zh": "",
       "slug": "find-all-anagrams-in-a-string",
       "star": "",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "固定滑動窗口＋計數",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-04",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "副線二刷（一刷 06-17 Python）。想法自己講：雙指針＋計數＋一個變數記剩幾個。AI 只問了「怎麼判斷是重新排列、進出怎麼更新」，並提醒只看存不存在不夠（重複字母）、建議 int[26]。寫出的是可變視窗版：字母超量或視窗滿就縮左邊，len==0 且該字母計數為 0 即命中——不是固定視窗標準版但正確。一次過 30 萬組 fuzz＋3 萬字大字串。沒講複雜度就寫了。97 魔術數字可改 'a'。"
        }
       ]
      },
      {
       "n": "567",
       "t": "Permutation in String",
       "zh": "",
       "slug": "permutation-in-string",
       "star": "",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "424",
       "t": "Longest Repeating Character Replacement",
       "zh": "",
       "slug": "longest-repeating-character-replacement",
       "star": "",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "76",
       "t": "Minimum Window Substring",
       "zh": "",
       "slug": "minimum-window-substring",
       "star": "",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "59",
       "t": "Spiral Matrix II",
       "zh": "螺旋矩阵II",
       "slug": "spiral-matrix-ii",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "模擬：邊界不變量",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    },
    {
     "g": "前綴和 Prefix Sum",
     "items": [
      {
       "n": "238",
       "t": "Product of Array Except Self",
       "zh": "",
       "slug": "product-of-array-except-self",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-09",
         "kind": "閉卷",
         "level": "獨立",
         "note": "A&H 章前綴和第一題。想法自己講對（左累乘、右累乘兩陣列，idx 取 a[idx-1]×b[idx+1]、越界當 1），複雜度 O(n)/O(n) 對。一次過，30 萬組 fuzz（含 0、負數）0 mismatch。left/right 存的是『含自己』的累乘，所以合併時要錯一格、首尾特判。自己主動提出『感覺可以 O(1)』，追問待做。 LeetCode 22:20 一次 AC。"
        },
        {
         "date": "2026-11-12",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "O(1) 額外空間 follow-up（前綴積原本延後，使用者自己主動寫）。res 先存左積、right 用單一變數從右掃乘上去，一次寫對，30 萬組 fuzz（含 0、負數）0 mismatch。等級記有小提示：兩個方向（左積存進 res、右邊只需一個變數）是 AI 11-09 給的，這次隔 3 天自己寫出來。小地方：res[i]=1 再 *=left 可直接寫成 =left。"
        }
       ]
      },
      {
       "n": "560",
       "t": "Subarray Sum Equals K",
       "zh": "",
       "slug": "subarray-sum-equals-k",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "前綴和＋雜湊",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-11",
         "kind": "練習",
         "level": "靠引導",
         "note": "07-20、07-23 AC 過。這次骨架（累加 sum、dict 先放 (0,1)、查 sum-k）自己寫出，但「查」和「存」混在一起，改四版：①存 sum-k 且先加再算 ②查到只 count++、存 sum 放 else ③拆成兩個迴圈先存完再查 ④一個迴圈先查再存，fuzz 20 萬組全過。我第三輪的解釋太長、使用者看不懂，改用白話（先問前面有幾個 sum-k、再把自己記下來）才通。進難題清單。"
        },
        {
         "date": "2026-11-11",
         "kind": "閉卷",
         "level": "獨立",
         "note": "同日晚間主動再寫一遍，AI 沒給提示。這次一次寫出標準 O(n)/O(n)：dict 先放 (0,1)，每格累加 sum，先把 dict[sum-k] 的次數加進答案，再累計 dict[sum]；查和存已正確拆開且順序正確。隨機陣列（含負數、0）對照 O(n²) 暴力 fuzz 20 萬組，0 mismatch。難題短期驗收 1/3；後續複習仍照使用者決定延後。"
        },
        {
         "date": "2026-11-13",
         "kind": "閉卷",
         "level": "獨立",
         "note": "難題隔 2 天重寫（2/3，原排 11-14，提早一天）。一次寫對：dict 先放 (0,1)、累加 sum、先查 sum-k 加進答案、再記 sum。20 萬組 fuzz（含負數、0）0 mismatch，2 萬個 0 跑 6ms。中途 nvim 跳 11-11 的舊暫存檔，確認無未存內容後刪掉。 寫完講複雜度 O(n)/O(n) 正確。"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "no": 2,
   "zh": "鏈結串列",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "203",
       "t": "Remove Linked List Elements",
       "zh": "移除链表元素",
       "slug": "remove-linked-list-elements",
       "star": "⭐",
       "st": "y19",
       "d": "E",
       "hi": true,
       "base": "dummy head 虛擬頭節點",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "707",
       "t": "Design Linked List",
       "zh": "设计链表",
       "slug": "design-linked-list",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "鏈結串列基本操作",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "206",
       "t": "Reverse Linked List",
       "zh": "翻转链表",
       "slug": "reverse-linked-list",
       "star": "⭐",
       "st": "y26",
       "d": "E",
       "hi": true,
       "base": "鏈結串列反轉（三指針）",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "24",
       "t": "Swap Nodes in Pairs",
       "zh": "两两交换链表中的节点",
       "slug": "swap-nodes-in-pairs",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": true,
       "base": "",
       "r": [
        true,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "19",
       "t": "Remove Nth Node From End of List",
       "zh": "删除链表的倒数第N个节点",
       "slug": "remove-nth-node-from-end-of-list",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": true,
       "base": "快慢指針：固定間距",
       "r": [
        true,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "02.07",
       "t": "Intersection of Two Linked Lists",
       "zh": "",
       "slug": "intersection-of-two-linked-lists",
       "star": "☆",
       "st": "y19",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "142",
       "t": "Linked List Cycle II",
       "zh": "环形链表II",
       "slug": "linked-list-cycle-ii",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": true,
       "base": "Floyd 判環找入口",
       "r": [
        true,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "146",
       "t": "LRU Cache",
       "zh": "",
       "slug": "lru-cache",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": true,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    }
   ]
  },
  {
   "no": 3,
   "zh": "雜湊表",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "242",
       "t": "Valid Anagram",
       "zh": "有效的字母异位词",
       "slug": "valid-anagram",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": true,
       "base": "計數陣列",
       "r": [
        true,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-08",
         "kind": "閉卷",
         "level": "獨立",
         "note": "新策略（NeetCode 主題順序、先題庫再 NeetCode 測）A&H 章第一題。計數陣列 int[26]，s 加、t 減，減到 <0 提早回 false，最後掃一次 >0。沒先講想法/複雜度就直接寫。30 萬組 fuzz 0 mismatch。O(n)、O(1)。小瑕疵：用 97 魔術數字（寫 'a' 較清楚）；可先比長度就省掉最後那圈。"
        }
       ]
      },
      {
       "n": "1002",
       "t": "Find Common Characters",
       "zh": "查找常用字符",
       "slug": "find-common-characters",
       "star": "☆",
       "st": "y19",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "349",
       "t": "Intersection of Two Arrays",
       "zh": "两个数组的交集",
       "slug": "intersection-of-two-arrays",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "HashSet 去重",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-08",
         "kind": "閉卷",
         "level": "獨立",
         "note": "A&H 章第二題。這次有先講想法和複雜度 O(m+n)/O(n)。口頭想法是『第二個陣列 Add 進同一個 set，加不進去的就是答案』——這樣 nums2 自己重複（nums1=[1], nums2=[2,2]）會誤判；但寫的時候自己改成 Contains 查＋結果用另一個 HashSet 去重，所以 code 是對的。30 萬組 fuzz 0 mismatch。開頭判空那行多餘但無害。"
        }
       ]
      },
      {
       "n": "202",
       "t": "Happy Number",
       "zh": "快乐数",
       "slug": "happy-number",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-09",
         "kind": "閉卷",
         "level": "獨立",
         "note": "想法自己講對（HashSet 記出現過的和，重複＝有環，到 1＝happy）。一次寫對，fuzz 4 萬組（1～20000 全測＋隨機到 int.MaxValue）全過。小地方：最後 return false 執行不到、list 多餘、Math.Pow 走 double 可改 d*d。複雜度事後補講 O(log n)/O(log n)，正確。"
        }
       ]
      },
      {
       "n": "1",
       "t": "Two Sum",
       "zh": "两数之和",
       "slug": "two-sum",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": true,
       "base": "HashMap 補數查表",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-09",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "A&H 章基石（HashMap 補數查表）。存『補數→索引』、看到 nums[i] 在表裡就配對，想法對。第一版用 dict.Add，重複補數會丟例外（[1,1,2,3] t=5），指出後改成索引子設值並加 break。這次沒跑 fuzz（使用者擋掉執行），靠讀程式碼確認。"
        }
       ]
      },
      {
       "n": "454",
       "t": "4Sum II",
       "zh": "四数相加II",
       "slug": "4sum-ii",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": true,
       "base": "",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-09",
         "kind": "練習",
         "level": "靠引導",
         "note": "第一次寫（meet in the middle）。自己想到用 dictionary、前兩個陣列相加，也自己提出兩個 dictionary 次數相乘的版本（正確）；value 存次數、後半查 -(c+d) 是引導出來的。寫完 fuzz 5000 組＋極值（2^28 不溢位、答案 16 億）全過。11-12 閉卷重寫驗收。"
        }
       ]
      },
      {
       "n": "383",
       "t": "Ransom Note",
       "zh": "赎金信",
       "slug": "ransom-note",
       "star": "☆",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-09",
         "kind": "閉卷",
         "level": "獨立",
         "note": "想法、複雜度 O(n)/O(1) 先講再寫（時間嚴格是 O(m+n)）。int[26] 計 magazine、ransomNote 扣到負就 false，用 'a' 不用魔術數字（242 的建議有吸收）。一次過，30 萬組 fuzz 0 mismatch。 LeetCode 21:51 一次 AC。2019 第一刷 5 次 WA 才過。"
        }
       ]
      },
      {
       "n": "15",
       "t": "3Sum",
       "zh": "三数之和",
       "slug": "3sum",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "排序＋雙指針（N-Sum 骨架）",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-10",
         "kind": "練習",
         "level": "靠引導",
         "note": "骨架自己講出來（固定 i、j/k 對撞、i 跟前一個比去重），但漏講排序、空間誤答 O(n)。寫了四版：①沒排序、收索引、j 多一層 for ②去重放在每輪且跟後一個比、if 只跳一次、k 沒去重 → 漏 [-4,-2,2,2]、重複 [-2,0,0,2,2] ③去重移進命中分支但條件沒守 j<k → [0,0,0] 越界 ④ fuzz 20 萬筆全過。去重位置與條件是我指出的。11-13 閉卷重寫。"
        },
        {
         "date": "2026-11-10",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "同一天晚上重寫（早上另一台靠引導寫出），所以只算短期記憶、不算隔天驗收，11-12 照排。骨架、三處去重（i 跟前一個比、命中後 j/k 各自跳過相同且守 k>j）都自己寫對；又漏了排序（早上也漏講），fuzz 反例 [3,0,-2,-1] 回空，加 Array.Sort 後 30 萬組 0 mismatch。 事後講複雜度 O(n²)/O(log n)（排序的遞迴堆疊，不算輸出）正確——早上誤答 O(n)，這次對了。也自己確認 j 去重為何不會漏（先 j++ 再跟 j-1 比＝剛用掉的值）。"
        },
        {
         "date": "2026-11-11",
         "kind": "閉卷",
         "level": "獨立",
         "note": "隔天驗收（距 11-10 早上第一次一天）。自己寫、沒在 session 講想法；本機檔 08:46 重開、LeetCode 08:53 一次 AC，約 7 分鐘。這次記得排序；i 跟前一個比、命中後 j/k 先各移一格再 while 跳過相同並守 k>j，全對。fuzz 20 萬組全過。下一關：11-14 左右再閉卷一次＋40 Combination Sum II（同一條去重規則的變形）。"
        }
       ]
      },
      {
       "n": "18",
       "t": "4Sum",
       "zh": "四数之和",
       "slug": "4sum",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-10",
         "kind": "練習",
         "level": "有小提示",
         "note": "緊接 15 寫，模板自己套過來（排序、兩層固定、內層對撞、命中後去重）。我指出的錯：少內層 while、移動方向反、j 去重條件（先寫 j>0、再寫 j>i，最後才 j>i+1）、四數和 int 溢位。第三版 fuzz 20 萬筆（含 ±1e9）全過。反覆錯在「指針第一個位置是哪一格」的邊界條件。"
        },
        {
         "date": "2026-11-10",
         "kind": "閉卷",
         "level": "獨立",
         "note": "同一天晚上重寫（早上另一台有小提示），只算短期記憶，11-12 照排。這次自己記得排序、j 去重 j>i+1、long 防溢位；中途自己用 LeetCode 範例跑出錯（只回 [[-2,0,0,2]]），自己除錯修好，AI 沒給提示。改用 tmp=target-(i+j) 再比 k+l，方向 val>0→k++ 正確。20 萬組 fuzz（含 ±1e9 溢位）0 mismatch。"
        },
        {
         "date": "2026-11-11",
         "kind": "閉卷",
         "level": "獨立",
         "note": "隔天驗收。LeetCode 09:06 一次 AC（15 是 08:53 交，中間約 13 分鐘）。排序、i/j 去重（j>i+1）、命中後 k/l 先移再 while 跳過並守 l>k、long 防溢位全部自己寫對。target−兩數和的寫法讓方向變成 val>0→k++，也對。fuzz 20 萬組（含 ±1e9）全過。"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "no": 4,
   "zh": "字串",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "344",
       "t": "Reverse String",
       "zh": "反转字符串",
       "slug": "reverse-string",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "雙指針反轉",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-13",
         "kind": "閉卷",
         "level": "獨立",
         "note": "Two Pointers 章第一題。第一版用 Array.Reverse 不算，改成左右指針交換、left<right 停。fuzz 10 萬筆全過。"
        }
       ]
      },
      {
       "n": "541",
       "t": "Reverse String II",
       "zh": "反转字符串II",
       "slug": "reverse-string-ii",
       "star": "☆",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "151",
       "t": "Reverse Words in a String",
       "zh": "翻转字符串里的单词",
       "slug": "reverse-words-in-a-string",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "28",
       "t": "Find the Index of the First Occurrence in a String",
       "zh": "实现strStr",
       "slug": "find-the-index-of-the-first-occurrence-in-a-string",
       "star": "⭐",
       "st": "y19",
       "d": "E",
       "hi": false,
       "base": "KMP 字串匹配",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "459",
       "t": "Repeated Substring Pattern",
       "zh": "重复的子字符串",
       "slug": "repeated-substring-pattern",
       "star": "☆",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    }
   ]
  },
  {
   "no": 5,
   "zh": "雙指針",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "11",
       "t": "Container With Most Water",
       "zh": "",
       "slug": "container-with-most-water",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "對撞指針",
       "r": [
        true,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "283",
       "t": "Move Zeroes",
       "zh": "",
       "slug": "move-zeroes",
       "star": "⭐",
       "st": "y19",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "26",
       "t": "Remove Duplicates from Sorted Array",
       "zh": "",
       "slug": "remove-duplicates-from-sorted-array",
       "star": "☆",
       "st": "y26",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      }
     ]
    },
    {
     "g": "N-Sum 家族",
     "items": [
      {
       "n": "15",
       "t": "3Sum",
       "zh": "三数之和",
       "slug": "3sum",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "排序＋雙指針（N-Sum 骨架）",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-10",
         "kind": "練習",
         "level": "靠引導",
         "note": "骨架自己講出來（固定 i、j/k 對撞、i 跟前一個比去重），但漏講排序、空間誤答 O(n)。寫了四版：①沒排序、收索引、j 多一層 for ②去重放在每輪且跟後一個比、if 只跳一次、k 沒去重 → 漏 [-4,-2,2,2]、重複 [-2,0,0,2,2] ③去重移進命中分支但條件沒守 j<k → [0,0,0] 越界 ④ fuzz 20 萬筆全過。去重位置與條件是我指出的。11-13 閉卷重寫。"
        },
        {
         "date": "2026-11-10",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "同一天晚上重寫（早上另一台靠引導寫出），所以只算短期記憶、不算隔天驗收，11-12 照排。骨架、三處去重（i 跟前一個比、命中後 j/k 各自跳過相同且守 k>j）都自己寫對；又漏了排序（早上也漏講），fuzz 反例 [3,0,-2,-1] 回空，加 Array.Sort 後 30 萬組 0 mismatch。 事後講複雜度 O(n²)/O(log n)（排序的遞迴堆疊，不算輸出）正確——早上誤答 O(n)，這次對了。也自己確認 j 去重為何不會漏（先 j++ 再跟 j-1 比＝剛用掉的值）。"
        },
        {
         "date": "2026-11-11",
         "kind": "閉卷",
         "level": "獨立",
         "note": "隔天驗收（距 11-10 早上第一次一天）。自己寫、沒在 session 講想法；本機檔 08:46 重開、LeetCode 08:53 一次 AC，約 7 分鐘。這次記得排序；i 跟前一個比、命中後 j/k 先各移一格再 while 跳過相同並守 k>j，全對。fuzz 20 萬組全過。下一關：11-14 左右再閉卷一次＋40 Combination Sum II（同一條去重規則的變形）。"
        }
       ]
      },
      {
       "n": "18",
       "t": "4Sum",
       "zh": "四数之和",
       "slug": "4sum",
       "star": "☆",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-10",
         "kind": "練習",
         "level": "有小提示",
         "note": "緊接 15 寫，模板自己套過來（排序、兩層固定、內層對撞、命中後去重）。我指出的錯：少內層 while、移動方向反、j 去重條件（先寫 j>0、再寫 j>i，最後才 j>i+1）、四數和 int 溢位。第三版 fuzz 20 萬筆（含 ±1e9）全過。反覆錯在「指針第一個位置是哪一格」的邊界條件。"
        },
        {
         "date": "2026-11-10",
         "kind": "閉卷",
         "level": "獨立",
         "note": "同一天晚上重寫（早上另一台有小提示），只算短期記憶，11-12 照排。這次自己記得排序、j 去重 j>i+1、long 防溢位；中途自己用 LeetCode 範例跑出錯（只回 [[-2,0,0,2]]），自己除錯修好，AI 沒給提示。改用 tmp=target-(i+j) 再比 k+l，方向 val>0→k++ 正確。20 萬組 fuzz（含 ±1e9 溢位）0 mismatch。"
        },
        {
         "date": "2026-11-11",
         "kind": "閉卷",
         "level": "獨立",
         "note": "隔天驗收。LeetCode 09:06 一次 AC（15 是 08:53 交，中間約 13 分鐘）。排序、i/j 去重（j>i+1）、命中後 k/l 先移再 while 跳過並守 l>k、long 防溢位全部自己寫對。target−兩數和的寫法讓方向變成 val>0→k++，也對。fuzz 20 萬組（含 ±1e9）全過。"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "no": 6,
   "zh": "堆疊與佇列",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "232",
       "t": "Implement Queue using Stacks",
       "zh": "用栈实现队列",
       "slug": "implement-queue-using-stacks",
       "star": "⭐",
       "st": "y26",
       "d": "E",
       "hi": true,
       "base": "棧⇄佇列互換",
       "r": [
        true,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "225",
       "t": "Implement Stack using Queues",
       "zh": "用队列实现栈",
       "slug": "implement-stack-using-queues",
       "star": "⭐",
       "st": "y26",
       "d": "E",
       "hi": true,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "20",
       "t": "Valid Parentheses",
       "zh": "有效的括号",
       "slug": "valid-parentheses",
       "star": "⭐",
       "st": "y26",
       "d": "E",
       "hi": true,
       "base": "棧：括號配對",
       "r": [
        true,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "1047",
       "t": "Remove All Adjacent Duplicates In String",
       "zh": "删除字符串中的所有相邻重复项",
       "slug": "remove-all-adjacent-duplicates-in-string",
       "star": "⭐",
       "st": "y26",
       "d": "E",
       "hi": true,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "150",
       "t": "Evaluate Reverse Polish Notation",
       "zh": "逆波兰表达式求值",
       "slug": "evaluate-reverse-polish-notation",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": true,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": [
        {
         "date": "2026-09-04",
         "kind": "閉卷",
         "level": "獨立",
         "note": "RPN 求值。"
        }
       ]
      },
      {
       "n": "215",
       "t": "Kth Largest Element in an Array",
       "zh": "",
       "slug": "kth-largest-element-in-an-array",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "Heap／Top-K",
       "r": [
        true,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "239",
       "t": "Sliding Window Maximum",
       "zh": "滑动窗口最大值",
       "slug": "sliding-window-maximum",
       "star": "☆",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "單調佇列",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "347",
       "t": "Top K Frequent Elements",
       "zh": "前K个高频元素",
       "slug": "top-k-frequent-elements",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-12",
         "kind": "閉卷",
         "level": "獨立",
         "note": "NeetCode A&H 測驗（07 月寫過，隔 4 個月）。零提示一次寫對：dict 計次數 → 大小 k 的 min-heap（PriorityQueue 以次數為 priority，超過 k 就 Dequeue 最小）→ 剩下的就是答案。fuzz 10 萬組全過。也可用 451/1338 的 bucket 做到 O(n)。"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "no": 7,
   "zh": "二元樹",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "144",
       "t": "Binary Tree Preorder Traversal",
       "zh": "",
       "slug": "binary-tree-preorder-traversal",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": true,
       "base": "DFS 遞迴遍歷",
       "r": [
        true,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-10-26",
         "kind": "閉卷",
         "level": "獨立",
         "note": "遞迴＋迭代都寫。"
        }
       ]
      },
      {
       "n": "94",
       "t": "Binary Tree Inorder Traversal",
       "zh": "",
       "slug": "binary-tree-inorder-traversal",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": true,
       "base": "",
       "r": [
        true,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-10-26",
         "kind": "閉卷",
         "level": "獨立",
         "note": "遞迴過；迭代版沒寫出來。"
        }
       ]
      },
      {
       "n": "145",
       "t": "Binary Tree Postorder Traversal",
       "zh": "",
       "slug": "binary-tree-postorder-traversal",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": true,
       "base": "",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-10-26",
         "kind": "閉卷",
         "level": "獨立",
         "note": "遞迴過；迭代版先擱著。"
        }
       ]
      },
      {
       "n": "102",
       "t": "Binary Tree Level Order Traversal",
       "zh": "二叉树的层序遍历",
       "slug": "binary-tree-level-order-traversal",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": true,
       "base": "BFS 層序遍歷",
       "r": [
        true,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-09-02",
         "kind": "閉卷",
         "level": "獨立",
         "note": "層序母模板。"
        },
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "二刷閉卷（上次 09-02）。queue＋先記 count 再跑 for 分層，空樹先回傳。20 萬組 fuzz（含 2000 節點）0 mismatch。"
        }
       ]
      },
      {
       "n": "226",
       "t": "Invert Binary Tree",
       "zh": "翻转二叉树",
       "slug": "invert-binary-tree",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-02",
         "kind": "閉卷",
         "level": "獨立",
         "note": "二刷閉卷，沒有 AI 介入。後序：先遞迴左右，再交換。20 萬組 fuzz＋5000 節點鏈 0 mismatch。"
        }
       ]
      },
      {
       "n": "101",
       "t": "Symmetric Tree",
       "zh": "对称二叉树",
       "slug": "symmetric-tree",
       "star": "⭐",
       "st": "y26",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-03",
         "kind": "練習",
         "level": "有小提示",
         "note": "二刷。先問了很多題意（鏡像 vs 兩邊一樣、不規則形狀、只有 root）。AI 用圖走過一次「比較一對節點、外側對外側、內側對內側」後自己寫出，一次對。root==null 回 false（題目 n≥1 走不到，但空樹語意上應為 true）。30 萬組 fuzz（約一半對稱、含近似對稱）0 mismatch。"
        }
       ]
      },
      {
       "n": "104",
       "t": "Maximum Depth of Binary Tree",
       "zh": "二叉树的最大深度",
       "slug": "maximum-depth-of-binary-tree",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": true,
       "base": "遞迴回傳值（後序聚合）",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-10-26",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "有除錯討論。"
        },
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "基石題重寫（遞迴回傳值）。沒有提示，fuzz 30000 組全過。第二個 if 寫成 root == null && ...，永遠不成立的死碼（本意應是判斷葉子，但葉子不需要特判）。"
        },
        {
         "date": "2026-11-10",
         "kind": "閉卷",
         "level": "獨立",
         "note": "複習（距 11-07 三天）。一次寫對，標準寫法：null 回 0，回 1+max(左,右)。"
        }
       ]
      },
      {
       "n": "111",
       "t": "Minimum Depth of Binary Tree",
       "zh": "二叉树的最小深度",
       "slug": "minimum-depth-of-binary-tree",
       "star": "☆",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "只看了題目兩個例子的圖，沒有解法提示。自己處理「單邊為空不算葉子」的陷阱（空的一邊當 int.MaxValue），一次寫對，fuzz 30000 組全過。"
        }
       ]
      },
      {
       "n": "222",
       "t": "Count Complete Tree Nodes",
       "zh": "完全二叉树的节点个数",
       "slug": "count-complete-tree-nodes",
       "star": "☆",
       "st": "y19",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "110",
       "t": "Balanced Binary Tree",
       "zh": "平衡二叉树",
       "slug": "balanced-binary-tree",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": true,
       "base": "",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-10-26",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "自底向上聚合，回傳 (高度, 是否平衡)。"
        },
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "沒有提示，一次寫對。回傳 (balanced, h) tuple，左右任一不平衡就提早回傳，O(n)。fuzz 40000 組全過（含 13053 棵平衡樹）。"
        }
       ]
      },
      {
       "n": "543",
       "t": "Diameter of Binary Tree",
       "zh": "",
       "slug": "diameter-of-binary-tree",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": true,
       "base": "",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-10-27",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "同招換題。卡在算邊還是算節點：左高＋右高＝經過該點的邊數。"
        },
        {
         "date": "2026-11-08",
         "kind": "閉卷",
         "level": "獨立",
         "note": "想法、複雜度 O(n)/O(h) 自己講對。AI 只提醒『左邊最長要怎麼拿、不能每個點重算高度』。用回傳 tuple (高度, 目前最大直徑) 一次後序算完，沒用全域變數；空節點高度 -1 讓邊數自然對上。20 萬組 fuzz（對照每點 BFS）0 mismatch，1 萬節點長鏈 OK。"
        }
       ]
      },
      {
       "n": "257",
       "t": "Binary Tree Paths",
       "zh": "二叉树的所有路径",
       "slug": "binary-tree-paths",
       "star": "☆",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "樹上回溯（路徑）",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "用後序回傳子樹路徑清單、再在前面加 root.val 的寫法（不是回溯）。一度 WA（[1,2,3,null,null,4] 輸出 1->3->2），只畫了圖沒解釋，自己改好，fuzz 30000 組全過。主函數 res 沒用到。基石要的「由上往下帶路徑＋回溯」版本還沒寫。"
        },
        {
         "date": "2026-11-07",
         "kind": "練習",
         "level": "靠引導",
         "note": "回溯版（共用路徑、加入→遞迴→撤銷）。錯誤：AddRange vs Add、Remove(值) vs RemoveAt(位置)、在葉子沒收集、只加葉子、父節點在左右之間幫孩子刪。我用文字列出一次呼叫的 5 步順序後改好，fuzz 30000 組全過。重點：誰加的誰刪，刪在左右都走完之後。"
        },
        {
         "date": "2026-11-10",
         "kind": "閉卷",
         "level": "獨立",
         "note": "回溯版複習（11-07 靠引導寫出）。約 20 分鐘內、沒提示，fuzz 5 萬筆全過。共用 path、葉子收集時複製、自己 Add 自己 RemoveAt 都對。小地方：葉子分支 RemoveAt+return 可省成統一走到底再 RemoveAt；先收 int list 再轉字串多一輪。"
        }
       ]
      },
      {
       "n": "404",
       "t": "Sum of Left Leaves",
       "zh": "左叶子之和",
       "slug": "sum-of-left-leaves",
       "star": "☆",
       "st": "y26",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-06",
         "kind": "練習",
         "level": "有小提示",
         "note": "自己選對判斷位置（站在父節點看左孩子是否葉子）。第一版回傳 root.val 且提早 return 沒走右子樹；逐步走例子說明後改成「左葉值＋右子樹遞迴」，fuzz 30000 組全過。"
        }
       ]
      },
      {
       "n": "513",
       "t": "Find Bottom Left Tree Value",
       "zh": "找树左下角的值",
       "slug": "find-bottom-left-tree-value",
       "star": "☆",
       "st": "y19",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "112",
       "t": "Path Sum",
       "zh": "路径总和",
       "slug": "path-sum",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-06",
         "kind": "閉卷",
         "level": "獨立",
         "note": "沒有提示，自己寫完（葉子判斷 root.val == targetSum，往下傳 targetSum - root.val），fuzz 30000 組全過。第二個 if 的 root != null 多餘。"
        }
       ]
      },
      {
       "n": "106",
       "t": "Construct Binary Tree from Inorder and Postorder Traversal",
       "zh": "从中序与后序遍历序列构造二叉树",
       "slug": "construct-binary-tree-from-inorder-and-postorder-traversal",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": true,
       "base": "構造二元樹",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-01",
         "kind": "練習",
         "level": "靠引導",
         "note": "二刷閉卷，完全忘記。自己想到：根＝postorder 最後一個、四個 index 鎖範圍。卡在 postorder 怎麼切（要用左子樹的『個數』切，不是拿 inorder 的位置、也不是去 postorder 找值）。AI 多次解釋仍轉不過來，主動跳過。隔 ≥2 天先寫切片版。"
        }
       ]
      },
      {
       "n": "654",
       "t": "Maximum Binary Tree",
       "zh": "最大二叉树",
       "slug": "maximum-binary-tree",
       "star": "☆",
       "st": "y19",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "617",
       "t": "Merge Two Binary Trees",
       "zh": "合并二叉树",
       "slug": "merge-two-binary-trees",
       "star": "☆",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-05",
         "kind": "閉卷",
         "level": "獨立",
         "note": "一次寫對，fuzz 20000 組全過。改 root1 原地合併，遞迴回傳子樹根再接回（改結構模式）。"
        }
       ]
      },
      {
       "n": "700",
       "t": "Search in a Binary Search Tree",
       "zh": "二叉搜索树中的搜索",
       "slug": "search-in-a-binary-search-tree",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "BST 性質",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "沒有提示，一次寫對（方向正確、找到回傳節點、null 回傳 null），fuzz 30000 組全過，比對回傳的是同一個節點。"
        }
       ]
      },
      {
       "n": "98",
       "t": "Validate Binary Search Tree",
       "zh": "验证二叉搜索树",
       "slug": "validate-binary-search-tree",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": true,
       "base": "",
       "r": [
        true,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-01",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "一開始把 98 和 110 搞混。AI 給反例 5→10→7→12 後，自己想到從上往下帶 (下限, 上限)。兩個坑都靠 fuzz 反例抓到：① 相等要算不合法（[0,null,1,1]）② 用 int.MinValue/MaxValue 當「沒有邊界」會撞到真的極值（[0,-2147483648]），AI 列三種解法、建議改 long。30 萬組 fuzz 0 mismatch。下次 BST 題先問：相等怎麼辦、極值怎麼辦。"
        },
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "隔 6 天再寫。自己講出從上往下帶 (min,max)、O(n)/O(h)。說不記得 11-01 的坑，但兩個都自己避掉：嚴格不等（相等不合法）、用 long 邊界。30 萬組 fuzz（含 int 極值、相等值）0 mismatch，1 萬節點長鏈 OK。自評「比想像中簡單」。"
        }
       ]
      },
      {
       "n": "530",
       "t": "Minimum Absolute Difference in BST",
       "zh": "二叉搜索树的最小绝对差",
       "slug": "minimum-absolute-difference-in-bst",
       "star": "☆",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "501",
       "t": "Find Mode in Binary Search Tree",
       "zh": "二叉搜索树中的众数",
       "slug": "find-mode-in-binary-search-tree",
       "star": "☆",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "236",
       "t": "Lowest Common Ancestor of a Binary Tree",
       "zh": "二叉树的最近公共祖先",
       "slug": "lowest-common-ancestor-of-a-binary-tree",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": true,
       "base": "LCA：後序合併",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-02",
         "kind": "練習",
         "level": "有小提示",
         "note": "忘了解法，寫之前 AI 講過 235/236 差別（後序、左右回報往上收）。bug：right 那行遞迴進 root.left（粗心型，跟 1026 Min/Max 同類）；[1,2,3] 這種小例子剛好對，AI 給反例 [1,null,2,null,3] p=2 q=3 才抓到。修正後 20 萬組 fuzz 0 mismatch。隔 ≥2 天要閉卷重寫。"
        },
        {
         "date": "2026-11-04",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "隔 2 天閉卷。① 用 left ?? right 只問到一邊（反例 [1,2,3,null,4] p=4 q=3 得 4），AI 畫圖手算。② 改成兩邊都問，但把結果寫回 root.left/root.right，會改壞輸入的樹（把 450/701 的「接回」用到查詢題上）；LeetCode 不抓，AI 實跑證明。③ 改區域變數後最後一行誤回 root.left ?? root.right。④ 最終版自己整理乾淨（去掉多餘的 p/q 配對判斷），20 萬組 fuzz 0 mismatch、樹不被改動。"
        }
       ]
      },
      {
       "n": "235",
       "t": "Lowest Common Ancestor of a Binary Search Tree",
       "zh": "二叉搜索树的最近公共祖先",
       "slug": "lowest-common-ancestor-of-a-binary-search-tree",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": true,
       "base": "",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-02",
         "kind": "練習",
         "level": "有小提示",
         "note": "寫之前 AI 講過 235/236 差別、p q 無大小關係要寫對稱判斷。遞迴版，邏輯對；兩個打字錯（少 ||、roo.val）編譯不過，改了幾輪才存檔對。最後一行 left ?? right 是走不到的死碼（BST 值唯一，所有情況前面都處理了）。20 萬組 fuzz（含鏈狀）0 mismatch。下次閉卷寫 while 版 O(1) 空間。"
        },
        {
         "date": "2026-11-02",
         "kind": "練習",
         "level": "有小提示",
         "note": "接著寫迭代版：先 queue 版、再 while 單變數版。兩版都犯同一個錯：分岔時回傳 root 而不是 current（反例 [5,3,6,2,4,null,null,1] p=1 q=4 得 5）。AI 指出後修正，20 萬組 fuzz 0 mismatch。遞迴版也精簡成三種情況。 最終提交版：拿掉 current 直接移動 root，O(h)/O(1)。LeetCode Runtime 101～124 ms 起伏是雜訊（演算法本身 <0.001 ms），不用追。"
        },
        {
         "date": "2026-11-04",
         "kind": "閉卷",
         "level": "獨立",
         "note": "隔 2 天閉卷，AI 沒介入。寫遞迴三情況版（不是原定的 while 版）。第一行 root==p||root==q 多餘（else 已涵蓋）但無害。20 萬組 fuzz（含鏈狀）0 mismatch。 接著閉卷寫 while 版：漏了 else，迴圈內 return 每圈都執行（LeetCode 範例 p=3 q=5 得 2）。AI 畫圖手算後自己補 else，20 萬組 fuzz 0 mismatch。"
        },
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "隔 3 天閉卷，自己覺得忘了，但寫出最精簡的三情況遞迴版（都大往右、都小往左、否則就是 root），11-04 那行多餘的 root==p||root==q 也沒了。20 萬組 fuzz（含鏈狀、大數值）0 mismatch。"
        }
       ]
      },
      {
       "n": "701",
       "t": "Insert into a Binary Search Tree",
       "zh": "二叉搜索树中的插入操作",
       "slug": "insert-into-a-binary-search-tree",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-03",
         "kind": "練習",
         "level": "有小提示",
         "note": "二刷。一開始想「找第一個比 val 大的節點插左邊」，AI 給反例（插 0，4 的左邊已有 2）。自己修成 BST 搜尋往下走；AI 補了「走到空的位置就是插入點」並提到可用 450 的回傳子樹根。寫出遞迴版，一次對，用的正是 450 剛學的「回傳子樹根、接回父節點」。30 萬組 fuzz（含空樹、鏈狀）0 mismatch。"
        }
       ]
      },
      {
       "n": "450",
       "t": "Delete Node in a BST",
       "zh": "删除二叉搜索树中的节点",
       "slug": "delete-node-in-a-bst",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": true,
       "base": "",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-03",
         "kind": "練習",
         "level": "靠引導",
         "note": "一刷看答案，這次等於第一次自己寫。自己做到：照 BST 大小往一邊找、沒右子樹回傳左、遞迴回傳值接回父節點、FindMin 最後改成回傳 (min, 刪掉最小後的子樹根) 而且寫對。卡住：① 以為 FindMin 回傳的是最小節點的父節點 ② 中途從 A（左子樹接到右子樹最小節點）換成 B（後繼值替代）③ 沒用 found.node 接回 root.right，反例 [1,null,2] key=1 得 [2,null,2]。AI 講了 A 的兩步、畫圖解釋為什麼要接回 root.right。挫折到想放棄，但最後自己補上 root.right = found.node 寫完。26 萬組 fuzz（0～12 節點、含刪不存在的 key）0 mismatch。11-05 後閉卷重寫，先畫圖再寫。"
        },
        {
         "date": "2026-11-05",
         "kind": "練習",
         "level": "靠引導",
         "note": "閉卷重寫第三次，未完成。方向反、右子樹 null 的情況已自己修好；卡在換值後要對右子樹遞迴 DeleteNode 刪掉最小值，試了 root.right=node 和 root.right=node.right 都錯。最後口頭給答案。11-06 再閉卷重寫。"
        },
        {
         "date": "2026-11-06",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "第四次重寫，完成。昨晚卡的「換值後對右子樹遞迴 DeleteNode 並接回」這次自己寫出來。手滑兩處：往左右走沒接回傳值、FindMin 遞迴傳 root 沒往左；指出後改好，fuzz 全過。"
        }
       ]
      },
      {
       "n": "669",
       "t": "Trim a Binary Search Tree",
       "zh": "修剪二叉搜索树",
       "slug": "trim-a-binary-search-tree",
       "star": "☆",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-06",
         "kind": "練習",
         "level": "有小提示",
         "note": "沒寫過的同機制題（關 2）。自己想到「小於 low 左邊整串刪」，一開始以為要像 450 找右樹最小補上；提示「讓它消失、回傳修剪後的右子樹」後一次寫對，fuzz 30000 組全過。理解：每次剪等於 450 只有一個孩子的情況。"
        }
       ]
      },
      {
       "n": "108",
       "t": "Convert Sorted Array to Binary Search Tree",
       "zh": "将有序数组转换为二叉搜索树",
       "slug": "convert-sorted-array-to-binary-search-tree",
       "star": "⭐",
       "st": "y26",
       "d": "E",
       "hi": true,
       "base": "",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-06",
         "kind": "練習",
         "level": "靠引導",
         "note": "想法自己講對（取中間當根、左右遞迴）。第一版把 root 從外面傳進去補、mid 括號錯、左右範圍含 mid；我用文字講了「給範圍、函數內 new、左右接上、回傳」的結構後重寫。再卡在停止條件 start>=end（end 含在內，[0] 回 null）的差一錯誤，提示後改好，fuzz 20000 組全過。start==end 那行多餘但不影響。"
        }
       ]
      },
      {
       "n": "538",
       "t": "Convert BST to Greater Tree",
       "zh": "把二叉搜索树转换为累加树",
       "slug": "convert-bst-to-greater-tree",
       "star": "☆",
       "st": "y19",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      }
     ]
    }
   ]
  },
  {
   "no": 8,
   "zh": "回溯",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "77",
       "t": "Combinations",
       "zh": "组合优化",
       "slug": "combinations",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "回溯模板：組合",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "216",
       "t": "Combination Sum III",
       "zh": "组合总和III",
       "slug": "combination-sum-iii",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "17",
       "t": "Letter Combinations of a Phone Number",
       "zh": "电话号码的字母组合",
       "slug": "letter-combinations-of-a-phone-number",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "39",
       "t": "Combination Sum",
       "zh": "组合总和",
       "slug": "combination-sum",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": [
        {
         "date": "2026-07-06",
         "kind": "閉卷",
         "level": "獨立",
         "note": "一次過，比初版更乾淨。狀態還原：sum 傳值免撤、list 傳參考要 RemoveAt。"
        }
       ]
      },
      {
       "n": "40",
       "t": "Combination Sum II",
       "zh": "组合总和II",
       "slug": "combination-sum-ii",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "回溯：同層去重",
       "r": [
        false,
        true,
        false
       ],
       "ev": [
        {
         "date": "2026-07-06",
         "kind": "閉卷",
         "level": "獨立",
         "note": "同層去重 i>idx && 相鄰相等就跳過。"
        }
       ]
      },
      {
       "n": "22",
       "t": "Generate Parentheses",
       "zh": "",
       "slug": "generate-parentheses",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": [
        {
         "date": "2026-07-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "剩餘 left/right 計數，兩個獨立 if 各自分岔。"
        }
       ]
      },
      {
       "n": "79",
       "t": "Word Search",
       "zh": "",
       "slug": "word-search",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "698",
       "t": "Partition to K Equal Sum Subsets",
       "zh": "",
       "slug": "partition-to-k-equal-sum-subsets",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "131",
       "t": "Palindrome Partitioning",
       "zh": "分割回文串",
       "slug": "palindrome-partitioning",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "回溯：切割",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "93",
       "t": "Restore IP Addresses",
       "zh": "复原IP地址",
       "slug": "restore-ip-addresses",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "78",
       "t": "Subsets",
       "zh": "子集",
       "slug": "subsets",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "回溯：子集",
       "r": [
        true,
        true,
        false
       ],
       "ev": [
        {
         "date": "2026-07-06",
         "kind": "閉卷",
         "level": "獨立",
         "note": "進節點就收集，一次過。"
        }
       ]
      },
      {
       "n": "90",
       "t": "Subsets II",
       "zh": "子集II",
       "slug": "subsets-ii",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "491",
       "t": "Non-decreasing Subsequences",
       "zh": "递增子序列",
       "slug": "non-decreasing-subsequences",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "46",
       "t": "Permutations",
       "zh": "全排列",
       "slug": "permutations",
       "star": "⭐",
       "st": "y19",
       "d": "M",
       "hi": false,
       "base": "回溯：排列（used 陣列）",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "47",
       "t": "Permutations II",
       "zh": "全排列II",
       "slug": "permutations-ii",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "332",
       "t": "Reconstruct Itinerary",
       "zh": "重新安排行程",
       "slug": "reconstruct-itinerary",
       "star": "☆",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "51",
       "t": "N-Queens",
       "zh": "N皇后",
       "slug": "n-queens",
       "star": "⭐",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "回溯：棋盤",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "37",
       "t": "Sudoku Solver",
       "zh": "解数独",
       "slug": "sudoku-solver",
       "star": "☆",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    }
   ]
  },
  {
   "no": 9,
   "zh": "貪心",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "455",
       "t": "Assign Cookies",
       "zh": "分发饼干",
       "slug": "assign-cookies",
       "star": "⭐",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "貪心入門：局部最優",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "376",
       "t": "Wiggle Subsequence",
       "zh": "摆动序列",
       "slug": "wiggle-subsequence",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "53",
       "t": "Maximum Subarray",
       "zh": "最大子序和（动态规划）",
       "slug": "maximum-subarray",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "122",
       "t": "Best Time to Buy and Sell Stock II",
       "zh": "买卖股票的最佳时机II（动态规划）",
       "slug": "best-time-to-buy-and-sell-stock-ii",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "55",
       "t": "Jump Game",
       "zh": "跳跃游戏",
       "slug": "jump-game",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "貪心：覆蓋範圍",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "45",
       "t": "Jump Game II",
       "zh": "跳跃游戏II",
       "slug": "jump-game-ii",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "1005",
       "t": "Maximize Sum Of Array After K Negations",
       "zh": "K次取反后最大化的数组和",
       "slug": "maximize-sum-of-array-after-k-negations",
       "star": "☆",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "134",
       "t": "Gas Station",
       "zh": "加油站",
       "slug": "gas-station",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "135",
       "t": "Candy",
       "zh": "分发糖果",
       "slug": "candy",
       "star": "☆",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "860",
       "t": "Lemonade Change",
       "zh": "柠檬水找零",
       "slug": "lemonade-change",
       "star": "☆",
       "st": "y19",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "406",
       "t": "Queue Reconstruction by Height",
       "zh": "根据身高重建队列",
       "slug": "queue-reconstruction-by-height",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "452",
       "t": "Minimum Number of Arrows to Burst Balloons",
       "zh": "用最少数量的箭引爆气球",
       "slug": "minimum-number-of-arrows-to-burst-balloons",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "貪心：區間重疊",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "435",
       "t": "Non-overlapping Intervals",
       "zh": "无重叠区间",
       "slug": "non-overlapping-intervals",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "763",
       "t": "Partition Labels",
       "zh": "划分字母区间",
       "slug": "partition-labels",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "56",
       "t": "Merge Intervals",
       "zh": "合并区间",
       "slug": "merge-intervals",
       "star": "⭐",
       "st": "y19",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "738",
       "t": "Monotone Increasing Digits",
       "zh": "单调递增的数字",
       "slug": "monotone-increasing-digits",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "968",
       "t": "Binary Tree Cameras",
       "zh": "监控二叉树",
       "slug": "binary-tree-cameras",
       "star": "☆",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    }
   ]
  },
  {
   "no": 10,
   "zh": "動態規劃",
   "groups": [
    {
     "g": "基礎",
     "items": [
      {
       "n": "509",
       "t": "Fibonacci Number",
       "zh": "斐波那契数",
       "slug": "fibonacci-number",
       "star": "⭐",
       "st": "y19",
       "d": "E",
       "hi": false,
       "base": "DP 五部曲入門",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "70",
       "t": "Climbing Stairs",
       "zh": "爬楼梯完全背包版本",
       "slug": "climbing-stairs",
       "star": "⭐",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": [
        {
         "date": "2026-08-10",
         "kind": "閉卷",
         "level": "獨立",
         "note": "白紙寫出滾動變數版，寫法跟舊版不同＝真的重推。"
        }
       ]
      },
      {
       "n": "746",
       "t": "Min Cost Climbing Stairs",
       "zh": "使用最小花费爬楼梯",
       "slug": "min-cost-climbing-stairs",
       "star": "☆",
       "st": "grad",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": [
        {
         "date": "2026-08-24",
         "kind": "閉卷",
         "level": "獨立",
         "note": "收尾 min(dp[n-1],dp[n-2]) 沒漏（上輪錯兩三次的點）。"
        }
       ]
      },
      {
       "n": "62",
       "t": "Unique Paths",
       "zh": "不同路径",
       "slug": "unique-paths",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "二維網格 DP",
       "r": [
        true,
        true,
        false
       ],
       "ev": [
        {
         "date": "2026-08-24",
         "kind": "閉卷",
         "level": "獨立",
         "note": "定義與 base case 自己填對。"
        }
       ]
      },
      {
       "n": "63",
       "t": "Unique Paths II",
       "zh": "不同路径II",
       "slug": "unique-paths-ii",
       "star": "☆",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "343",
       "t": "Integer Break",
       "zh": "整数拆分",
       "slug": "integer-break",
       "star": "☆",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "96",
       "t": "Unique Binary Search Trees",
       "zh": "不同的二叉搜索树",
       "slug": "unique-binary-search-trees",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    },
    {
     "g": "背包 Knapsack",
     "items": [
      {
       "n": "416",
       "t": "Partition Equal Subset Sum",
       "zh": "分割等和子集",
       "slug": "partition-equal-subset-sum",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "0-1 背包",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "1049",
       "t": "Last Stone Weight II",
       "zh": "最后一块石头的重量II",
       "slug": "last-stone-weight-ii",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "494",
       "t": "Target Sum",
       "zh": "目标和",
       "slug": "target-sum",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "474",
       "t": "Ones and Zeroes",
       "zh": "一和零",
       "slug": "ones-and-zeroes",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "518",
       "t": "Coin Change II",
       "zh": "零钱兑换II",
       "slug": "coin-change-ii",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "完全背包",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "377",
       "t": "Combination Sum IV",
       "zh": "组合总和Ⅳ",
       "slug": "combination-sum-iv",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "322",
       "t": "Coin Change",
       "zh": "零钱兑换",
       "slug": "coin-change",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "279",
       "t": "Perfect Squares",
       "zh": "完全平方数",
       "slug": "perfect-squares",
       "star": "☆",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "139",
       "t": "Word Break",
       "zh": "单词拆分",
       "slug": "word-break",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    },
    {
     "g": "打家劫舍 House Robber",
     "items": [
      {
       "n": "198",
       "t": "House Robber",
       "zh": "打家劫舍",
       "slug": "house-robber",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "選／不選 DP",
       "r": [
        true,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-10-24",
         "kind": "閉卷",
         "level": "獨立",
         "note": "停 13 天後 drill。"
        }
       ]
      },
      {
       "n": "213",
       "t": "House Robber II",
       "zh": "打家劫舍II",
       "slug": "house-robber-ii",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "337",
       "t": "House Robber III",
       "zh": "打家劫舍III",
       "slug": "house-robber-iii",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    },
    {
     "g": "股票 Stock",
     "items": [
      {
       "n": "121",
       "t": "Best Time to Buy and Sell Stock",
       "zh": "买卖股票的最佳时机",
       "slug": "best-time-to-buy-and-sell-stock",
       "star": "⭐",
       "st": "y19",
       "d": "E",
       "hi": false,
       "base": "股票狀態機 DP",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "123",
       "t": "Best Time to Buy and Sell Stock III",
       "zh": "买卖股票的最佳时机III",
       "slug": "best-time-to-buy-and-sell-stock-iii",
       "star": "⭐",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "188",
       "t": "Best Time to Buy and Sell Stock IV",
       "zh": "买卖股票的最佳时机IV",
       "slug": "best-time-to-buy-and-sell-stock-iv",
       "star": "⭐",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "309",
       "t": "Best Time to Buy and Sell Stock with Cooldown",
       "zh": "最佳买卖股票时机含冷冻期",
       "slug": "best-time-to-buy-and-sell-stock-with-cooldown",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "714",
       "t": "Best Time to Buy and Sell Stock with Transaction Fee",
       "zh": "买卖股票的最佳时机含手续费（动态规划）",
       "slug": "best-time-to-buy-and-sell-stock-with-transaction-fee",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    },
    {
     "g": "子序列 Subsequence",
     "items": [
      {
       "n": "300",
       "t": "Longest Increasing Subsequence",
       "zh": "最长上升子序列",
       "slug": "longest-increasing-subsequence",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "子序列 DP（單序列）",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "674",
       "t": "Longest Continuous Increasing Subsequence",
       "zh": "最长连续递增序列",
       "slug": "longest-continuous-increasing-subsequence",
       "star": "☆",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "718",
       "t": "Maximum Length of Repeated Subarray",
       "zh": "最长重复子数组",
       "slug": "maximum-length-of-repeated-subarray",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "1143",
       "t": "Longest Common Subsequence",
       "zh": "最长公共子序列",
       "slug": "longest-common-subsequence",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "子序列 DP（雙序列）",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "1035",
       "t": "Uncrossed Lines",
       "zh": "不相交的线",
       "slug": "uncrossed-lines",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "392",
       "t": "Is Subsequence",
       "zh": "判断子序列",
       "slug": "is-subsequence",
       "star": "⭐",
       "st": "y19",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "115",
       "t": "Distinct Subsequences",
       "zh": "不同的子序列",
       "slug": "distinct-subsequences",
       "star": "☆",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "583",
       "t": "Delete Operation for Two Strings",
       "zh": "两个字符串的删除操作",
       "slug": "delete-operation-for-two-strings",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "72",
       "t": "Edit Distance",
       "zh": "编辑距离",
       "slug": "edit-distance",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "647",
       "t": "Palindromic Substrings",
       "zh": "回文子串",
       "slug": "palindromic-substrings",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "回文／區間 DP",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "516",
       "t": "Longest Palindromic Subsequence",
       "zh": "最长回文子序列",
       "slug": "longest-palindromic-subsequence",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    }
   ]
  },
  {
   "no": 11,
   "zh": "單調堆疊",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "739",
       "t": "Daily Temperatures",
       "zh": "每日温度",
       "slug": "daily-temperatures",
       "star": "⭐",
       "st": "y19",
       "d": "M",
       "hi": false,
       "base": "單調棧",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "496",
       "t": "Next Greater Element I",
       "zh": "下一个更大元素I",
       "slug": "next-greater-element-i",
       "star": "⭐",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "503",
       "t": "Next Greater Element II",
       "zh": "下一个更大元素II",
       "slug": "next-greater-element-ii",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "42",
       "t": "Trapping Rain Water",
       "zh": "接雨水",
       "slug": "trapping-rain-water",
       "star": "⭐",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "84",
       "t": "Largest Rectangle in Histogram",
       "zh": "柱状图中最大的矩形",
       "slug": "largest-rectangle-in-histogram",
       "star": "⭐",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    }
   ]
  },
  {
   "no": 12,
   "zh": "圖論",
   "groups": [
    {
     "g": "A. 核心",
     "items": [
      {
       "n": "200",
       "t": "Number of Islands",
       "zh": "",
       "slug": "number-of-islands",
       "star": "⭐",
       "st": "grad",
       "d": "M",
       "hi": false,
       "base": "網格 DFS／BFS（flood fill）",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-09-03",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "兩個粗心 bug：迴圈條件誤用外層 i、邊界檢查用 j 存取用 y。AI 只指位置。"
        },
        {
         "date": "2026-10-11",
         "kind": "冷測",
         "level": "獨立",
         "note": "停 5 週後重寫，題意忘了、AI 只重述題目。BFS＋方向陣列，一次寫對、零 bug。"
        }
       ]
      },
      {
       "n": "695",
       "t": "Max Area of Island",
       "zh": "",
       "slug": "max-area-of-island",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "130",
       "t": "Surrounded Regions",
       "zh": "",
       "slug": "surrounded-regions",
       "star": "☆",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "417",
       "t": "Pacific Atlantic Water Flow",
       "zh": "",
       "slug": "pacific-atlantic-water-flow",
       "star": "☆",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "994",
       "t": "Rotting Oranges",
       "zh": "",
       "slug": "rotting-oranges",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "多源 BFS",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      }
     ]
    },
    {
     "g": "B. 經典",
     "items": [
      {
       "n": "207",
       "t": "Course Schedule",
       "zh": "",
       "slug": "course-schedule",
       "star": "⭐",
       "st": "y26",
       "d": "M",
       "hi": false,
       "base": "拓撲排序",
       "r": [
        false,
        true,
        false
       ],
       "ev": []
      },
      {
       "n": "210",
       "t": "Course Schedule II",
       "zh": "",
       "slug": "course-schedule-ii",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "547",
       "t": "Number of Provinces",
       "zh": "",
       "slug": "number-of-provinces",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "並查集",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "684",
       "t": "Redundant Connection",
       "zh": "",
       "slug": "redundant-connection",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "127",
       "t": "Word Ladder",
       "zh": "",
       "slug": "word-ladder",
       "star": "⭐",
       "st": "none",
       "d": "H",
       "hi": false,
       "base": "BFS 最短路",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "743",
       "t": "Network Delay Time",
       "zh": "",
       "slug": "network-delay-time",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "Dijkstra 最短路",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "787",
       "t": "Cheapest Flights Within K Stops",
       "zh": "",
       "slug": "cheapest-flights-within-k-stops",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    }
   ]
  },
  {
   "no": 13,
   "zh": "排序",
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "912",
       "t": "Sort an Array",
       "zh": "",
       "slug": "sort-an-array",
       "star": "⭐",
       "st": "y19",
       "d": "M",
       "hi": true,
       "base": "手寫排序（merge／quick）",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "75",
       "t": "Sort Colors",
       "zh": "",
       "slug": "sort-colors",
       "star": "☆",
       "st": "y19",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        true,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "148",
       "t": "Sort List",
       "zh": "",
       "slug": "sort-list",
       "star": "☆",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      }
     ]
    }
   ]
  },
  {
   "no": 14,
   "zh": "冷測・清單外",
   "extra": true,
   "groups": [
    {
     "g": "",
     "items": [
      {
       "n": "36",
       "t": "Valid Sudoku",
       "zh": "",
       "slug": "valid-sudoku",
       "d": "M",
       "st": "grad",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-13",
         "kind": "閉卷",
         "level": "獨立",
         "note": "NeetCode A&H。想法：列、行、小九宮格各一組 HashSet，一次走完 81 格；小格編號 i/3*3+j/3（寫了多餘的 <3 判斷，結果仍正確）。fuzz 20 萬筆全過，一次就對。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "49",
       "t": "Group Anagrams",
       "zh": "",
       "slug": "group-anagrams",
       "d": "M",
       "st": "grad",
       "r": [
        true,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-09-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "計數法建 key。"
        },
        {
         "date": "2026-11-11",
         "kind": "閉卷",
         "level": "獨立",
         "note": "沒先講想法直接寫，一次寫對（含空字串），fuzz 10 萬組全過。key＝26 格字母計數用 # 串起來（O(k) 建 key，比排序 O(k log k) 好）。複雜度答 O(n)/O(n) 不精確：應為 O(n·k) 時間、O(n·k) 空間，k＝最長字串長度。小地方：ContainsKey 後的 `?? new List` 多餘、可用 TryGetValue；回傳可直接 dict.Values。"
        },
        {
         "date": "2026-11-12",
         "kind": "閉卷",
         "level": "獨立",
         "note": "NeetCode A&H 章節重測（距 11-11 一天）。一次 AC，fuzz 10 萬組全過。昨天提的小地方都改了：拿掉多餘的 ?? new List、直接回 dict.Values。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "100",
       "t": "Same Tree",
       "zh": "",
       "slug": "same-tree",
       "d": "E",
       "st": "grad",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "結構一開始就對（兩邊都 null 回 true、左右遞迴 &&）。卡在用 p == q 比較（C# 比的是參考不是值），指出後改成兩邊非 null 且 val 相等，fuzz 30000 組全過。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "105",
       "t": "Construct Binary Tree from Preorder and Inorder Traversal",
       "zh": "",
       "slug": "construct-binary-tree-from-preorder-and-inorder-traversal",
       "d": "M",
       "st": "y26",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-09",
         "kind": "練習",
         "level": "有小提示",
         "note": "未完成，先欠著（晚上補）。一開始以為中序倒數第二個是右樹根；提示後知道前序第一個是根。寫出來只有頂層用前序找根，子樹改成取中序 mid（套 108），[1,2,3]/[3,2,1] WA。卡在：每個子樹的根要從『該子樹那段前序』拿，左子樹節點數由中序切點算出。"
        },
        {
         "date": "2026-11-09",
         "kind": "練習",
         "level": "靠引導",
         "note": "晚上補寫仍未完成，明天再寫。停止條件改了三版（start<end → 加 start==end → start>end）才對，fuzz 反例依序 [1]（stack overflow）、[1]（回 null）、[2,1]/[1,2]（回 null）。結構問題：只用一組 start/end 同時當 preorder 和 inorder 的範圍。口頭演算法自己講對（preorder 頭＝根 → inorder 算左邊幾個 k → 回 preorder 切），但不懂『同一子樹在兩陣列長度一樣、起點不一樣』。AI 用表格逐層列 pre/in 位置後理解。建議明天先寫切片版（傳小陣列，不用 index）。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "128",
       "t": "Longest Consecutive Sequence",
       "zh": "",
       "slug": "longest-consecutive-sequence",
       "d": "M",
       "st": "grad",
       "r": [
        false,
        true,
        true
       ],
       "ev": [
        {
         "date": "2026-11-11",
         "kind": "練習",
         "level": "靠引導",
         "note": "07-30 寫過（TLE 一次後 AC）。這次 HashSet 自己想到，但兩版都是每個數往後數 O(n²)（第二版只改上限、沒改起點）。關鍵「x-1 在 set 裡就跳過、只從串頭數」是我直接講的。第三版 fuzz 10 萬組全過、10 萬連續數 4ms。使用者自評：忘記可以往前看、想複雜了。小地方：hashset.ToArray 多餘，可直接 foreach set。進難題清單。"
        },
        {
         "date": "2026-11-12",
         "kind": "閉卷",
         "level": "獨立",
         "note": "難題清單隔天重寫（1/3）。一次寫對：外層直接跑 set、x-1 在 set 就跳過、只從串頭往後數。昨天的小地方（ToArray 多餘）也改掉了。fuzz 10 萬組全過、10 萬連續數 3ms。"
        },
        {
         "date": "2026-11-12",
         "kind": "閉卷",
         "level": "獨立",
         "note": "同日晚上再寫一次（早上 10:33 已閉卷獨立），只算短期記憶，難題進度仍是 1/3，下次照排 11-15。一次寫對：外層跑 set、x-1 在 set 就跳過、從串頭往後數。30 萬組 fuzz 0 mismatch、20 萬數 1ms。值域 ±1e9 所以 i++ 溢位不會發生。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "199",
       "t": "Binary Tree Right Side View",
       "zh": "",
       "slug": "binary-tree-right-side-view",
       "d": "M",
       "st": "grad",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "NeetCode 樹章。2019 寫過、2026 第一次。102 層序骨架，每層開始前用 queue.Last() 取這層最右邊。Last() 是 LINQ、會掃整個 queue，但 queue 當下剛好是一層，總共仍 O(n)。20 萬組 fuzz 0 mismatch。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "217",
       "t": "Contains Duplicate",
       "zh": "",
       "slug": "contains-duplicate",
       "d": "E",
       "st": "grad",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-11",
         "kind": "閉卷",
         "level": "獨立",
         "note": "NeetCode A&H 測驗暖身（2019-08 寫過）。HashSet.Add 回 false 就 true，一次寫對，標準解。O(n)/O(n)，沒先講。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "230",
       "t": "Kth Smallest Element in a BST",
       "zh": "",
       "slug": "kth-smallest-element-in-a-bst",
       "d": "M",
       "st": "grad",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-08",
         "kind": "閉卷",
         "level": "獨立",
         "note": "NeetCode 樹章收尾。2019 寫過、2026 第一次。中序遍歷＋List 收前 k 個、滿了就不往右走（提早停）。自己覺得解法奇怪，其實就是中序＋提早結束，List 只當計數器用。沒先講想法/複雜度就直接寫。20 萬組 fuzz 0 mismatch，1 萬節點長鏈 OK。時間 O(h+k)、空間 O(h+k)。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "451",
       "t": "Sort Characters By Frequency",
       "zh": "",
       "slug": "sort-characters-by-frequency",
       "d": "M",
       "st": "grad",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-12",
         "kind": "冷測",
         "level": "有小提示",
         "note": "陣列冷題清單第 2 題（沒寫過）。想法自己講對：計數＋bucket sort（次數當索引）再組字串。過程：①最後迴圈 i++ 寫成往上 → 任何輸入越界（給反例 \"a\"）②修好後正確但 map 存整串 string 用 += → 50 萬同字母 20 秒，O(n²)（我提示 += 每次複製、問「需要存整串嗎」）③改存次數＋StringBuilder，編譯錯 4 個（?? 用在 int、殘留變數 m、沒 ToString）④bucket 索引寫成 map.Length → 越界 ⑤bucket[map[i]] 過：10 萬組正確、50 萬字元 6ms。複雜度 O(n)/O(n) 沒講。跨 11-11 晚～11-12 早。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "572",
       "t": "Subtree of Another Tree",
       "zh": "",
       "slug": "subtree-of-another-tree",
       "d": "E",
       "st": "grad",
       "r": [
        true,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-08",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "NeetCode 樹章收尾。想法自己講對（走訪每個節點當起點＋same tree 比較）；複雜度先講 O(n)，AI 給『全是 1、只有最底形狀不同』的例子後改成 O(m×n)。主函式用迭代前序（stack）、IsSame 遞迴。30 萬組 fuzz 0 mismatch。小瑕疵：一開始先 Push(root) 又拿 current=root，root 會在最後被 pop 再走一次，整棵樹大約掃兩遍——結果對但多做一倍。nvim 中途被關，靠 swap 救回。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "1026",
       "t": "Maximum Difference Between Node and Ancestor",
       "zh": "",
       "slug": "maximum-difference-between-node-and-ancestor",
       "d": "M",
       "st": "grad",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-01",
         "kind": "冷測",
         "level": "有小提示",
         "note": "想法自己想出：後序回傳 (子樹 min, max, 子樹內答案)。max 那行誤寫 Math.Min（粗心型），空節點哨兵 int.MinValue 相減溢位。AI 給最小反例 [0,1]。子樹答案往上傳是自己補的。20 萬組 fuzz 0 mismatch。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "1338",
       "t": "Reduce Array Size to The Half",
       "zh": "",
       "slug": "reduce-array-size-to-the-half",
       "d": "M",
       "st": "grad",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-12",
         "kind": "冷測",
         "level": "獨立",
         "note": "陣列冷題清單第 4 題（沒寫過）。沒講想法直接寫，零提示、一次寫對：dict 計次數 → 次數當索引做 bucket（沿用 451 的招）→ 從最大次數往下貪心扣，扣到 ≤ 一半就回傳。fuzz 20 萬組全過、10 萬全不同 3ms。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "1347",
       "t": "Minimum Number of Steps to Make Two Strings Anagram",
       "zh": "",
       "slug": "minimum-number-of-steps-to-make-two-strings-anagram",
       "d": "M",
       "st": "grad",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-12",
         "kind": "冷測",
         "level": "有小提示",
         "note": "陣列冷題清單第 1 題（沒寫過）。一開始不確定「最少」在哪、只想看 t 有 s 沒有的字元；我用範例 1 指出要比次數不是比有沒有，之後自己講出「每個字母多出來的加總」。一次寫對：int[26] s 加 t 減、加總正數，fuzz 20 萬組全過。加的是正數（s 比 t 多）而我講的是 t 多出來的，兩者相等因為等長——沒說明。複雜度 O(n)/O(1) 沒講。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "1448",
       "t": "Count Good Nodes in Binary Tree",
       "zh": "",
       "slug": "count-good-nodes-in-binary-tree",
       "d": "M",
       "st": "grad",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "NeetCode 樹章，從沒寫過（關 2：同 1026 的「往下帶路徑最大值」）。只問了題意，想法、>= 條件、O(n)/O(h) 都自己講對，一次寫對。用 int.MinValue 當初始最大值（只拿來比較、不相減，所以沒有 1026/98 的溢位坑）。20 萬組 fuzz＋10 萬節點長鏈 0 mismatch。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      },
      {
       "n": "2352",
       "t": "Equal Row and Column Pairs",
       "zh": "",
       "slug": "equal-row-and-column-pairs",
       "d": "M",
       "st": "grad",
       "r": [
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-12",
         "kind": "冷測",
         "level": "有小提示",
         "note": "陣列冷題清單第 3 題（沒寫過），新流程第一題。想法：列、行各轉字串當 key 進兩個 dict 計數——方向對；但合併說「取大的」被我打斷一次，用 2 列×3 行=6 的例子後自己講出相乘。bug：string.Join 沒分隔符，11,1 和 1,11 都變 \"111\"（LeetCode WA 給的），我只說「看 key 長怎樣」，自己改成逗號。fuzz 10 萬組（含 1/11/111 撞 key 情況）全過。"
        }
       ],
       "star": "",
       "hi": false,
       "base": ""
      }
     ]
    }
   ]
  }
 ],
 "sql": [
  {
   "n": "175",
   "t": "Combine Two Tables",
   "slug": "combine-two-tables",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "176",
   "t": "Second Highest Salary",
   "slug": "second-highest-salary",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "177",
   "t": "Nth Highest Salary",
   "slug": "nth-highest-salary",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "178",
   "t": "Rank Scores",
   "slug": "rank-scores",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "180",
   "t": "Consecutive Numbers",
   "slug": "consecutive-numbers",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "181",
   "t": "Employees Earning More Than Their Managers",
   "slug": "employees-earning-more-than-their-managers",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "182",
   "t": "Duplicate Emails",
   "slug": "duplicate-emails",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "183",
   "t": "Customers Who Never Order",
   "slug": "customers-who-never-order",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "184",
   "t": "Department Highest Salary",
   "slug": "department-highest-salary",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "185",
   "t": "Department Top Three Salaries",
   "slug": "department-top-three-salaries",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "196",
   "t": "Delete Duplicate Emails",
   "slug": "delete-duplicate-emails",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "197",
   "t": "Rising Temperature",
   "slug": "rising-temperature",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "595",
   "t": "Big Countries",
   "slug": "big-countries",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "596",
   "t": "Classes With at Least 5 Students",
   "slug": "classes-with-at-least-5-students",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "620",
   "t": "Not Boring Movies",
   "slug": "not-boring-movies",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "627",
   "t": "Swap Sex of Employees",
   "slug": "swap-sex-of-employees",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1179",
   "t": "Reformat Department Table",
   "slug": "reformat-department-table",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  }
 ],
 "other": [
  {
   "n": "2",
   "t": "Add Two Numbers",
   "slug": "add-two-numbers",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "7",
   "t": "Reverse Integer",
   "slug": "reverse-integer",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "9",
   "t": "Palindrome Number",
   "slug": "palindrome-number",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "16",
   "t": "3Sum Closest",
   "slug": "3sum-closest",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "21",
   "t": "Merge Two Sorted Lists",
   "slug": "merge-two-sorted-lists",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "33",
   "t": "Search in Rotated Sorted Array",
   "slug": "search-in-rotated-sorted-array",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "34",
   "t": "Find First and Last Position of Element in Sorted Array",
   "slug": "find-first-and-last-position-of-element-in-sorted-array",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "35",
   "t": "Search Insert Position",
   "slug": "search-insert-position",
   "st": "y26",
   "r": [
    true,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "64",
   "t": "Minimum Path Sum",
   "slug": "minimum-path-sum",
   "st": "y26",
   "r": [
    true,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "66",
   "t": "Plus One",
   "slug": "plus-one",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "67",
   "t": "Add Binary",
   "slug": "add-binary",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "74",
   "t": "Search a 2D Matrix",
   "slug": "search-a-2d-matrix",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "81",
   "t": "Search in Rotated Sorted Array II",
   "slug": "search-in-rotated-sorted-array-ii",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "83",
   "t": "Remove Duplicates from Sorted List",
   "slug": "remove-duplicates-from-sorted-list",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "91",
   "t": "Decode Ways",
   "slug": "decode-ways",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "118",
   "t": "Pascal's Triangle",
   "slug": "pascals-triangle",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "120",
   "t": "Triangle",
   "slug": "triangle",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "136",
   "t": "Single Number",
   "slug": "single-number",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "141",
   "t": "Linked List Cycle",
   "slug": "linked-list-cycle",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "153",
   "t": "Find Minimum in Rotated Sorted Array",
   "slug": "find-minimum-in-rotated-sorted-array",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "155",
   "t": "Min Stack",
   "slug": "min-stack",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "167",
   "t": "Two Sum II - Input Array Is Sorted",
   "slug": "two-sum-ii-input-array-is-sorted",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "169",
   "t": "Majority Element",
   "slug": "majority-element",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "171",
   "t": "Excel Sheet Column Number",
   "slug": "excel-sheet-column-number",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "179",
   "t": "Largest Number",
   "slug": "largest-number",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "189",
   "t": "Rotate Array",
   "slug": "rotate-array",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "191",
   "t": "Number of 1 Bits",
   "slug": "number-of-1-bits",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "208",
   "t": "Implement Trie (Prefix Tree)",
   "slug": "implement-trie-prefix-tree",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "231",
   "t": "Power of Two",
   "slug": "power-of-two",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "234",
   "t": "Palindrome Linked List",
   "slug": "palindrome-linked-list",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "237",
   "t": "Delete Node in a Linked List",
   "slug": "delete-node-in-a-linked-list",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "263",
   "t": "Ugly Number",
   "slug": "ugly-number",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "268",
   "t": "Missing Number",
   "slug": "missing-number",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "290",
   "t": "Word Pattern",
   "slug": "word-pattern",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "303",
   "t": "Range Sum Query - Immutable",
   "slug": "range-sum-query-immutable",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "307",
   "t": "Range Sum Query - Mutable",
   "slug": "range-sum-query-mutable",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "328",
   "t": "Odd Even Linked List",
   "slug": "odd-even-linked-list",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "334",
   "t": "Increasing Triplet Subsequence",
   "slug": "increasing-triplet-subsequence",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "342",
   "t": "Power of Four",
   "slug": "power-of-four",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "371",
   "t": "Sum of Two Integers",
   "slug": "sum-of-two-integers",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "378",
   "t": "Kth Smallest Element in a Sorted Matrix",
   "slug": "kth-smallest-element-in-a-sorted-matrix",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "402",
   "t": "Remove K Digits",
   "slug": "remove-k-digits",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "412",
   "t": "Fizz Buzz",
   "slug": "fizz-buzz",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "414",
   "t": "Third Maximum Number",
   "slug": "third-maximum-number",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "429",
   "t": "N-ary Tree Level Order Traversal",
   "slug": "n-ary-tree-level-order-traversal",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "445",
   "t": "Add Two Numbers II",
   "slug": "add-two-numbers-ii",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "476",
   "t": "Number Complement",
   "slug": "number-complement",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "485",
   "t": "Max Consecutive Ones",
   "slug": "max-consecutive-ones",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "523",
   "t": "Continuous Subarray Sum",
   "slug": "continuous-subarray-sum",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "525",
   "t": "Contiguous Array",
   "slug": "contiguous-array",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "539",
   "t": "Minimum Time Difference",
   "slug": "minimum-time-difference",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "557",
   "t": "Reverse Words in a String III",
   "slug": "reverse-words-in-a-string-iii",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "561",
   "t": "Array Partition",
   "slug": "array-partition",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "606",
   "t": "Construct String from Binary Tree",
   "slug": "construct-string-from-binary-tree",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "657",
   "t": "Robot Return to Origin",
   "slug": "robot-return-to-origin",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "703",
   "t": "Kth Largest Element in a Stream",
   "slug": "kth-largest-element-in-a-stream",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "709",
   "t": "To Lower Case",
   "slug": "to-lower-case",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "724",
   "t": "Find Pivot Index",
   "slug": "find-pivot-index",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "728",
   "t": "Self Dividing Numbers",
   "slug": "self-dividing-numbers",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "729",
   "t": "My Calendar I",
   "slug": "my-calendar-i",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "771",
   "t": "Jewels and Stones",
   "slug": "jewels-and-stones",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "791",
   "t": "Custom Sort String",
   "slug": "custom-sort-string",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "796",
   "t": "Rotate String",
   "slug": "rotate-string",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "804",
   "t": "Unique Morse Code Words",
   "slug": "unique-morse-code-words",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "814",
   "t": "Binary Tree Pruning",
   "slug": "binary-tree-pruning",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "821",
   "t": "Shortest Distance to a Character",
   "slug": "shortest-distance-to-a-character",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "832",
   "t": "Flipping an Image",
   "slug": "flipping-an-image",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "848",
   "t": "Shifting Letters",
   "slug": "shifting-letters",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "852",
   "t": "Peak Index in a Mountain Array",
   "slug": "peak-index-in-a-mountain-array",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "856",
   "t": "Score of Parentheses",
   "slug": "score-of-parentheses",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "867",
   "t": "Transpose Matrix",
   "slug": "transpose-matrix",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "884",
   "t": "Uncommon Words from Two Sentences",
   "slug": "uncommon-words-from-two-sentences",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "890",
   "t": "Find and Replace Pattern",
   "slug": "find-and-replace-pattern",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "905",
   "t": "Sort Array By Parity",
   "slug": "sort-array-by-parity",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "916",
   "t": "Word Subsets",
   "slug": "word-subsets",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "917",
   "t": "Reverse Only Letters",
   "slug": "reverse-only-letters",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "921",
   "t": "Minimum Add to Make Parentheses Valid",
   "slug": "minimum-add-to-make-parentheses-valid",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "922",
   "t": "Sort Array By Parity II",
   "slug": "sort-array-by-parity-ii",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "929",
   "t": "Unique Email Addresses",
   "slug": "unique-email-addresses",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "930",
   "t": "Binary Subarrays With Sum",
   "slug": "binary-subarrays-with-sum",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "931",
   "t": "Minimum Falling Path Sum",
   "slug": "minimum-falling-path-sum",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "938",
   "t": "Range Sum of BST",
   "slug": "range-sum-of-bst",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "942",
   "t": "DI String Match",
   "slug": "di-string-match",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "950",
   "t": "Reveal Cards In Increasing Order",
   "slug": "reveal-cards-in-increasing-order",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "961",
   "t": "N-Repeated Element in Size 2N Array",
   "slug": "n-repeated-element-in-size-2n-array",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "965",
   "t": "Univalued Binary Tree",
   "slug": "univalued-binary-tree",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "974",
   "t": "Subarray Sums Divisible by K",
   "slug": "subarray-sums-divisible-by-k",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "989",
   "t": "Add to Array-Form of Integer",
   "slug": "add-to-array-form-of-integer",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1008",
   "t": "Construct Binary Search Tree from Preorder Traversal",
   "slug": "construct-binary-search-tree-from-preorder-traversal",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1013",
   "t": "Partition Array Into Three Parts With Equal Sum",
   "slug": "partition-array-into-three-parts-with-equal-sum",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1038",
   "t": "Binary Search Tree to Greater Sum Tree",
   "slug": "binary-search-tree-to-greater-sum-tree",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1046",
   "t": "Last Stone Weight",
   "slug": "last-stone-weight",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "1071",
   "t": "Greatest Common Divisor of Strings",
   "slug": "greatest-common-divisor-of-strings",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1089",
   "t": "Duplicate Zeros",
   "slug": "duplicate-zeros",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1110",
   "t": "Delete Nodes And Return Forest",
   "slug": "delete-nodes-and-return-forest",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1122",
   "t": "Relative Sort Array",
   "slug": "relative-sort-array",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1160",
   "t": "Find Words That Can Be Formed by Characters",
   "slug": "find-words-that-can-be-formed-by-characters",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1161",
   "t": "Maximum Level Sum of a Binary Tree",
   "slug": "maximum-level-sum-of-a-binary-tree",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1189",
   "t": "Maximum Number of Balloons",
   "slug": "maximum-number-of-balloons",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1233",
   "t": "Remove Sub-Folders from the Filesystem",
   "slug": "remove-sub-folders-from-the-filesystem",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1267",
   "t": "Count Servers that Communicate",
   "slug": "count-servers-that-communicate",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1291",
   "t": "Sequential Digits",
   "slug": "sequential-digits",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1302",
   "t": "Deepest Leaves Sum",
   "slug": "deepest-leaves-sum",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1305",
   "t": "All Elements in Two Binary Search Trees",
   "slug": "all-elements-in-two-binary-search-trees",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1381",
   "t": "Design a Stack With Increment Operation",
   "slug": "design-a-stack-with-increment-operation",
   "st": "y19",
   "r": [
    true,
    false,
    false
   ],
   "ev": []
  },
  {
   "n": "1480",
   "t": "Running Sum of 1d Array",
   "slug": "running-sum-of-1d-array",
   "st": "y26",
   "r": [
    true,
    true,
    false
   ],
   "ev": []
  },
  {
   "n": "1524",
   "t": "Number of Sub-arrays With Odd Sum",
   "slug": "number-of-sub-arrays-with-odd-sum",
   "st": "y26",
   "r": [
    false,
    true,
    false
   ],
   "ev": []
  }
 ],
 "records": {
  "39": {
   "n": "39",
   "t": "Combination Sum",
   "zh": "组合总和",
   "slug": "combination-sum",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    false
   ],
   "ev": [
    {
     "date": "2026-07-06",
     "kind": "閉卷",
     "level": "獨立",
     "note": "一次過，比初版更乾淨。狀態還原：sum 傳值免撤、list 傳參考要 RemoveAt。"
    }
   ]
  },
  "40": {
   "n": "40",
   "t": "Combination Sum II",
   "zh": "组合总和II",
   "slug": "combination-sum-ii",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    false
   ],
   "ev": [
    {
     "date": "2026-07-06",
     "kind": "閉卷",
     "level": "獨立",
     "note": "同層去重 i>idx && 相鄰相等就跳過。"
    }
   ]
  },
  "78": {
   "n": "78",
   "t": "Subsets",
   "zh": "子集",
   "slug": "subsets",
   "d": "M",
   "st": "grad",
   "r": [
    true,
    true,
    false
   ],
   "ev": [
    {
     "date": "2026-07-06",
     "kind": "閉卷",
     "level": "獨立",
     "note": "進節點就收集，一次過。"
    }
   ]
  },
  "22": {
   "n": "22",
   "t": "Generate Parentheses",
   "zh": "",
   "slug": "generate-parentheses",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    false
   ],
   "ev": [
    {
     "date": "2026-07-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "剩餘 left/right 計數，兩個獨立 if 各自分岔。"
    }
   ]
  },
  "70": {
   "n": "70",
   "t": "Climbing Stairs",
   "zh": "爬楼梯完全背包版本",
   "slug": "climbing-stairs",
   "d": "E",
   "st": "grad",
   "r": [
    false,
    true,
    false
   ],
   "ev": [
    {
     "date": "2026-08-10",
     "kind": "閉卷",
     "level": "獨立",
     "note": "白紙寫出滾動變數版，寫法跟舊版不同＝真的重推。"
    }
   ]
  },
  "746": {
   "n": "746",
   "t": "Min Cost Climbing Stairs",
   "zh": "使用最小花费爬楼梯",
   "slug": "min-cost-climbing-stairs",
   "d": "E",
   "st": "grad",
   "r": [
    false,
    true,
    false
   ],
   "ev": [
    {
     "date": "2026-08-24",
     "kind": "閉卷",
     "level": "獨立",
     "note": "收尾 min(dp[n-1],dp[n-2]) 沒漏（上輪錯兩三次的點）。"
    }
   ]
  },
  "62": {
   "n": "62",
   "t": "Unique Paths",
   "zh": "不同路径",
   "slug": "unique-paths",
   "d": "M",
   "st": "grad",
   "r": [
    true,
    true,
    false
   ],
   "ev": [
    {
     "date": "2026-08-24",
     "kind": "閉卷",
     "level": "獨立",
     "note": "定義與 base case 自己填對。"
    }
   ]
  },
  "102": {
   "n": "102",
   "t": "Binary Tree Level Order Traversal",
   "zh": "二叉树的层序遍历",
   "slug": "binary-tree-level-order-traversal",
   "d": "M",
   "st": "grad",
   "r": [
    true,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-09-02",
     "kind": "閉卷",
     "level": "獨立",
     "note": "層序母模板。"
    },
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "二刷閉卷（上次 09-02）。queue＋先記 count 再跑 for 分層，空樹先回傳。20 萬組 fuzz（含 2000 節點）0 mismatch。"
    }
   ]
  },
  "200": {
   "n": "200",
   "t": "Number of Islands",
   "zh": "",
   "slug": "number-of-islands",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-09-03",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "兩個粗心 bug：迴圈條件誤用外層 i、邊界檢查用 j 存取用 y。AI 只指位置。"
    },
    {
     "date": "2026-10-11",
     "kind": "冷測",
     "level": "獨立",
     "note": "停 5 週後重寫，題意忘了、AI 只重述題目。BFS＋方向陣列，一次寫對、零 bug。"
    }
   ]
  },
  "150": {
   "n": "150",
   "t": "Evaluate Reverse Polish Notation",
   "zh": "逆波兰表达式求值",
   "slug": "evaluate-reverse-polish-notation",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    false
   ],
   "ev": [
    {
     "date": "2026-09-04",
     "kind": "閉卷",
     "level": "獨立",
     "note": "RPN 求值。"
    }
   ]
  },
  "49": {
   "n": "49",
   "t": "Group Anagrams",
   "zh": "",
   "slug": "group-anagrams",
   "d": "M",
   "st": "grad",
   "r": [
    true,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-09-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "計數法建 key。"
    },
    {
     "date": "2026-11-11",
     "kind": "閉卷",
     "level": "獨立",
     "note": "沒先講想法直接寫，一次寫對（含空字串），fuzz 10 萬組全過。key＝26 格字母計數用 # 串起來（O(k) 建 key，比排序 O(k log k) 好）。複雜度答 O(n)/O(n) 不精確：應為 O(n·k) 時間、O(n·k) 空間，k＝最長字串長度。小地方：ContainsKey 後的 `?? new List` 多餘、可用 TryGetValue；回傳可直接 dict.Values。"
    },
    {
     "date": "2026-11-12",
     "kind": "閉卷",
     "level": "獨立",
     "note": "NeetCode A&H 章節重測（距 11-11 一天）。一次 AC，fuzz 10 萬組全過。昨天提的小地方都改了：拿掉多餘的 ?? new List、直接回 dict.Values。"
    }
   ]
  },
  "198": {
   "n": "198",
   "t": "House Robber",
   "zh": "打家劫舍",
   "slug": "house-robber",
   "d": "M",
   "st": "grad",
   "r": [
    true,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-10-24",
     "kind": "閉卷",
     "level": "獨立",
     "note": "停 13 天後 drill。"
    }
   ]
  },
  "236": {
   "n": "236",
   "t": "Lowest Common Ancestor of a Binary Tree",
   "zh": "二叉树的最近公共祖先",
   "slug": "lowest-common-ancestor-of-a-binary-tree",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-02",
     "kind": "練習",
     "level": "有小提示",
     "note": "忘了解法，寫之前 AI 講過 235/236 差別（後序、左右回報往上收）。bug：right 那行遞迴進 root.left（粗心型，跟 1026 Min/Max 同類）；[1,2,3] 這種小例子剛好對，AI 給反例 [1,null,2,null,3] p=2 q=3 才抓到。修正後 20 萬組 fuzz 0 mismatch。隔 ≥2 天要閉卷重寫。"
    },
    {
     "date": "2026-11-04",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "隔 2 天閉卷。① 用 left ?? right 只問到一邊（反例 [1,2,3,null,4] p=4 q=3 得 4），AI 畫圖手算。② 改成兩邊都問，但把結果寫回 root.left/root.right，會改壞輸入的樹（把 450/701 的「接回」用到查詢題上）；LeetCode 不抓，AI 實跑證明。③ 改區域變數後最後一行誤回 root.left ?? root.right。④ 最終版自己整理乾淨（去掉多餘的 p/q 配對判斷），20 萬組 fuzz 0 mismatch、樹不被改動。"
    }
   ]
  },
  "144": {
   "n": "144",
   "t": "Binary Tree Preorder Traversal",
   "zh": "",
   "slug": "binary-tree-preorder-traversal",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-10-26",
     "kind": "閉卷",
     "level": "獨立",
     "note": "遞迴＋迭代都寫。"
    }
   ]
  },
  "94": {
   "n": "94",
   "t": "Binary Tree Inorder Traversal",
   "zh": "",
   "slug": "binary-tree-inorder-traversal",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-10-26",
     "kind": "閉卷",
     "level": "獨立",
     "note": "遞迴過；迭代版沒寫出來。"
    }
   ]
  },
  "145": {
   "n": "145",
   "t": "Binary Tree Postorder Traversal",
   "zh": "",
   "slug": "binary-tree-postorder-traversal",
   "d": "E",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-10-26",
     "kind": "閉卷",
     "level": "獨立",
     "note": "遞迴過；迭代版先擱著。"
    }
   ]
  },
  "104": {
   "n": "104",
   "t": "Maximum Depth of Binary Tree",
   "zh": "二叉树的最大深度",
   "slug": "maximum-depth-of-binary-tree",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-10-26",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "有除錯討論。"
    },
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "基石題重寫（遞迴回傳值）。沒有提示，fuzz 30000 組全過。第二個 if 寫成 root == null && ...，永遠不成立的死碼（本意應是判斷葉子，但葉子不需要特判）。"
    },
    {
     "date": "2026-11-10",
     "kind": "閉卷",
     "level": "獨立",
     "note": "複習（距 11-07 三天）。一次寫對，標準寫法：null 回 0，回 1+max(左,右)。"
    }
   ]
  },
  "110": {
   "n": "110",
   "t": "Balanced Binary Tree",
   "zh": "平衡二叉树",
   "slug": "balanced-binary-tree",
   "d": "E",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-10-26",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "自底向上聚合，回傳 (高度, 是否平衡)。"
    },
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "沒有提示，一次寫對。回傳 (balanced, h) tuple，左右任一不平衡就提早回傳，O(n)。fuzz 40000 組全過（含 13053 棵平衡樹）。"
    }
   ]
  },
  "543": {
   "n": "543",
   "t": "Diameter of Binary Tree",
   "zh": "",
   "slug": "diameter-of-binary-tree",
   "d": "E",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-10-27",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "同招換題。卡在算邊還是算節點：左高＋右高＝經過該點的邊數。"
    },
    {
     "date": "2026-11-08",
     "kind": "閉卷",
     "level": "獨立",
     "note": "想法、複雜度 O(n)/O(h) 自己講對。AI 只提醒『左邊最長要怎麼拿、不能每個點重算高度』。用回傳 tuple (高度, 目前最大直徑) 一次後序算完，沒用全域變數；空節點高度 -1 讓邊數自然對上。20 萬組 fuzz（對照每點 BFS）0 mismatch，1 萬節點長鏈 OK。"
    }
   ]
  },
  "1026": {
   "n": "1026",
   "t": "Maximum Difference Between Node and Ancestor",
   "zh": "",
   "slug": "maximum-difference-between-node-and-ancestor",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-01",
     "kind": "冷測",
     "level": "有小提示",
     "note": "想法自己想出：後序回傳 (子樹 min, max, 子樹內答案)。max 那行誤寫 Math.Min（粗心型），空節點哨兵 int.MinValue 相減溢位。AI 給最小反例 [0,1]。子樹答案往上傳是自己補的。20 萬組 fuzz 0 mismatch。"
    }
   ]
  },
  "106": {
   "n": "106",
   "t": "Construct Binary Tree from Inorder and Postorder Traversal",
   "zh": "从中序与后序遍历序列构造二叉树",
   "slug": "construct-binary-tree-from-inorder-and-postorder-traversal",
   "d": "M",
   "st": "y26",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-01",
     "kind": "練習",
     "level": "靠引導",
     "note": "二刷閉卷，完全忘記。自己想到：根＝postorder 最後一個、四個 index 鎖範圍。卡在 postorder 怎麼切（要用左子樹的『個數』切，不是拿 inorder 的位置、也不是去 postorder 找值）。AI 多次解釋仍轉不過來，主動跳過。隔 ≥2 天先寫切片版。"
    }
   ]
  },
  "98": {
   "n": "98",
   "t": "Validate Binary Search Tree",
   "zh": "验证二叉搜索树",
   "slug": "validate-binary-search-tree",
   "d": "M",
   "st": "grad",
   "r": [
    true,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-01",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "一開始把 98 和 110 搞混。AI 給反例 5→10→7→12 後，自己想到從上往下帶 (下限, 上限)。兩個坑都靠 fuzz 反例抓到：① 相等要算不合法（[0,null,1,1]）② 用 int.MinValue/MaxValue 當「沒有邊界」會撞到真的極值（[0,-2147483648]），AI 列三種解法、建議改 long。30 萬組 fuzz 0 mismatch。下次 BST 題先問：相等怎麼辦、極值怎麼辦。"
    },
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "隔 6 天再寫。自己講出從上往下帶 (min,max)、O(n)/O(h)。說不記得 11-01 的坑，但兩個都自己避掉：嚴格不等（相等不合法）、用 long 邊界。30 萬組 fuzz（含 int 極值、相等值）0 mismatch，1 萬節點長鏈 OK。自評「比想像中簡單」。"
    }
   ]
  },
  "226": {
   "n": "226",
   "t": "Invert Binary Tree",
   "zh": "翻转二叉树",
   "slug": "invert-binary-tree",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-02",
     "kind": "閉卷",
     "level": "獨立",
     "note": "二刷閉卷，沒有 AI 介入。後序：先遞迴左右，再交換。20 萬組 fuzz＋5000 節點鏈 0 mismatch。"
    }
   ]
  },
  "235": {
   "n": "235",
   "t": "Lowest Common Ancestor of a Binary Search Tree",
   "zh": "二叉搜索树的最近公共祖先",
   "slug": "lowest-common-ancestor-of-a-binary-search-tree",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-02",
     "kind": "練習",
     "level": "有小提示",
     "note": "寫之前 AI 講過 235/236 差別、p q 無大小關係要寫對稱判斷。遞迴版，邏輯對；兩個打字錯（少 ||、roo.val）編譯不過，改了幾輪才存檔對。最後一行 left ?? right 是走不到的死碼（BST 值唯一，所有情況前面都處理了）。20 萬組 fuzz（含鏈狀）0 mismatch。下次閉卷寫 while 版 O(1) 空間。"
    },
    {
     "date": "2026-11-02",
     "kind": "練習",
     "level": "有小提示",
     "note": "接著寫迭代版：先 queue 版、再 while 單變數版。兩版都犯同一個錯：分岔時回傳 root 而不是 current（反例 [5,3,6,2,4,null,null,1] p=1 q=4 得 5）。AI 指出後修正，20 萬組 fuzz 0 mismatch。遞迴版也精簡成三種情況。 最終提交版：拿掉 current 直接移動 root，O(h)/O(1)。LeetCode Runtime 101～124 ms 起伏是雜訊（演算法本身 <0.001 ms），不用追。"
    },
    {
     "date": "2026-11-04",
     "kind": "閉卷",
     "level": "獨立",
     "note": "隔 2 天閉卷，AI 沒介入。寫遞迴三情況版（不是原定的 while 版）。第一行 root==p||root==q 多餘（else 已涵蓋）但無害。20 萬組 fuzz（含鏈狀）0 mismatch。 接著閉卷寫 while 版：漏了 else，迴圈內 return 每圈都執行（LeetCode 範例 p=3 q=5 得 2）。AI 畫圖手算後自己補 else，20 萬組 fuzz 0 mismatch。"
    },
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "隔 3 天閉卷，自己覺得忘了，但寫出最精簡的三情況遞迴版（都大往右、都小往左、否則就是 root），11-04 那行多餘的 root==p||root==q 也沒了。20 萬組 fuzz（含鏈狀、大數值）0 mismatch。"
    }
   ]
  },
  "209": {
   "n": "209",
   "t": "Minimum Size Subarray Sum",
   "zh": "长度最小的子数组",
   "slug": "minimum-size-subarray-sum",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-02",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "副線二刷。想法和複雜度一開始就對（可變窗口，右擴左縮）。卡在邊界，改了 4 版：① while 條件在 right 到底時就停、沒機會檢查最後的 sum ② res 初始值用 nums.Length 當「沒找到」，答案剛好等於 n 時誤判 ③ 修迴圈時曾寫出無窮迴圈（right < n-1）、陣列越界（right 先加再讀）。AI 只給最小反例 [1] t=1／t=2 和方向提示，修法自己想出。累到想放棄但寫完。30 萬組 fuzz＋10^5 大陣列 0 mismatch。 同晚重寫成標準版（for 擴張＋內層 while 收縮，長度用 i-left+1），一次過 fuzz。"
    }
   ]
  },
  "450": {
   "n": "450",
   "t": "Delete Node in a BST",
   "zh": "删除二叉搜索树中的节点",
   "slug": "delete-node-in-a-bst",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-03",
     "kind": "練習",
     "level": "靠引導",
     "note": "一刷看答案，這次等於第一次自己寫。自己做到：照 BST 大小往一邊找、沒右子樹回傳左、遞迴回傳值接回父節點、FindMin 最後改成回傳 (min, 刪掉最小後的子樹根) 而且寫對。卡住：① 以為 FindMin 回傳的是最小節點的父節點 ② 中途從 A（左子樹接到右子樹最小節點）換成 B（後繼值替代）③ 沒用 found.node 接回 root.right，反例 [1,null,2] key=1 得 [2,null,2]。AI 講了 A 的兩步、畫圖解釋為什麼要接回 root.right。挫折到想放棄，但最後自己補上 root.right = found.node 寫完。26 萬組 fuzz（0～12 節點、含刪不存在的 key）0 mismatch。11-05 後閉卷重寫，先畫圖再寫。"
    },
    {
     "date": "2026-11-05",
     "kind": "練習",
     "level": "靠引導",
     "note": "閉卷重寫第三次，未完成。方向反、右子樹 null 的情況已自己修好；卡在換值後要對右子樹遞迴 DeleteNode 刪掉最小值，試了 root.right=node 和 root.right=node.right 都錯。最後口頭給答案。11-06 再閉卷重寫。"
    },
    {
     "date": "2026-11-06",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "第四次重寫，完成。昨晚卡的「換值後對右子樹遞迴 DeleteNode 並接回」這次自己寫出來。手滑兩處：往左右走沒接回傳值、FindMin 遞迴傳 root 沒往左；指出後改好，fuzz 全過。"
    }
   ]
  },
  "101": {
   "n": "101",
   "t": "Symmetric Tree",
   "zh": "对称二叉树",
   "slug": "symmetric-tree",
   "d": "E",
   "st": "y26",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-03",
     "kind": "練習",
     "level": "有小提示",
     "note": "二刷。先問了很多題意（鏡像 vs 兩邊一樣、不規則形狀、只有 root）。AI 用圖走過一次「比較一對節點、外側對外側、內側對內側」後自己寫出，一次對。root==null 回 false（題目 n≥1 走不到，但空樹語意上應為 true）。30 萬組 fuzz（約一半對稱、含近似對稱）0 mismatch。"
    }
   ]
  },
  "701": {
   "n": "701",
   "t": "Insert into a Binary Search Tree",
   "zh": "二叉搜索树中的插入操作",
   "slug": "insert-into-a-binary-search-tree",
   "d": "M",
   "st": "y26",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-03",
     "kind": "練習",
     "level": "有小提示",
     "note": "二刷。一開始想「找第一個比 val 大的節點插左邊」，AI 給反例（插 0，4 的左邊已有 2）。自己修成 BST 搜尋往下走；AI 補了「走到空的位置就是插入點」並提到可用 450 的回傳子樹根。寫出遞迴版，一次對，用的正是 450 剛學的「回傳子樹根、接回父節點」。30 萬組 fuzz（含空樹、鏈狀）0 mismatch。"
    }
   ]
  },
  "438": {
   "n": "438",
   "t": "Find All Anagrams in a String",
   "zh": "",
   "slug": "find-all-anagrams-in-a-string",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-04",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "副線二刷（一刷 06-17 Python）。想法自己講：雙指針＋計數＋一個變數記剩幾個。AI 只問了「怎麼判斷是重新排列、進出怎麼更新」，並提醒只看存不存在不夠（重複字母）、建議 int[26]。寫出的是可變視窗版：字母超量或視窗滿就縮左邊，len==0 且該字母計數為 0 即命中——不是固定視窗標準版但正確。一次過 30 萬組 fuzz＋3 萬字大字串。沒講複雜度就寫了。97 魔術數字可改 'a'。"
    }
   ]
  },
  "617": {
   "n": "617",
   "t": "Merge Two Binary Trees",
   "zh": "合并二叉树",
   "slug": "merge-two-binary-trees",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-05",
     "kind": "閉卷",
     "level": "獨立",
     "note": "一次寫對，fuzz 20000 組全過。改 root1 原地合併，遞迴回傳子樹根再接回（改結構模式）。"
    }
   ]
  },
  "669": {
   "n": "669",
   "t": "Trim a Binary Search Tree",
   "zh": "修剪二叉搜索树",
   "slug": "trim-a-binary-search-tree",
   "d": "M",
   "st": "y26",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-06",
     "kind": "練習",
     "level": "有小提示",
     "note": "沒寫過的同機制題（關 2）。自己想到「小於 low 左邊整串刪」，一開始以為要像 450 找右樹最小補上；提示「讓它消失、回傳修剪後的右子樹」後一次寫對，fuzz 30000 組全過。理解：每次剪等於 450 只有一個孩子的情況。"
    }
   ]
  },
  "108": {
   "n": "108",
   "t": "Convert Sorted Array to Binary Search Tree",
   "zh": "将有序数组转换为二叉搜索树",
   "slug": "convert-sorted-array-to-binary-search-tree",
   "d": "E",
   "st": "y26",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-06",
     "kind": "練習",
     "level": "靠引導",
     "note": "想法自己講對（取中間當根、左右遞迴）。第一版把 root 從外面傳進去補、mid 括號錯、左右範圍含 mid；我用文字講了「給範圍、函數內 new、左右接上、回傳」的結構後重寫。再卡在停止條件 start>=end（end 含在內，[0] 回 null）的差一錯誤，提示後改好，fuzz 20000 組全過。start==end 那行多餘但不影響。"
    }
   ]
  },
  "404": {
   "n": "404",
   "t": "Sum of Left Leaves",
   "zh": "左叶子之和",
   "slug": "sum-of-left-leaves",
   "d": "E",
   "st": "y26",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-06",
     "kind": "練習",
     "level": "有小提示",
     "note": "自己選對判斷位置（站在父節點看左孩子是否葉子）。第一版回傳 root.val 且提早 return 沒走右子樹；逐步走例子說明後改成「左葉值＋右子樹遞迴」，fuzz 30000 組全過。"
    }
   ]
  },
  "112": {
   "n": "112",
   "t": "Path Sum",
   "zh": "路径总和",
   "slug": "path-sum",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-06",
     "kind": "閉卷",
     "level": "獨立",
     "note": "沒有提示，自己寫完（葉子判斷 root.val == targetSum，往下傳 targetSum - root.val），fuzz 30000 組全過。第二個 if 的 root != null 多餘。"
    }
   ]
  },
  "111": {
   "n": "111",
   "t": "Minimum Depth of Binary Tree",
   "zh": "二叉树的最小深度",
   "slug": "minimum-depth-of-binary-tree",
   "d": "E",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "只看了題目兩個例子的圖，沒有解法提示。自己處理「單邊為空不算葉子」的陷阱（空的一邊當 int.MaxValue），一次寫對，fuzz 30000 組全過。"
    }
   ]
  },
  "100": {
   "n": "100",
   "t": "Same Tree",
   "zh": "",
   "slug": "same-tree",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "結構一開始就對（兩邊都 null 回 true、左右遞迴 &&）。卡在用 p == q 比較（C# 比的是參考不是值），指出後改成兩邊非 null 且 val 相等，fuzz 30000 組全過。"
    }
   ]
  },
  "700": {
   "n": "700",
   "t": "Search in a Binary Search Tree",
   "zh": "二叉搜索树中的搜索",
   "slug": "search-in-a-binary-search-tree",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "沒有提示，一次寫對（方向正確、找到回傳節點、null 回傳 null），fuzz 30000 組全過，比對回傳的是同一個節點。"
    }
   ]
  },
  "257": {
   "n": "257",
   "t": "Binary Tree Paths",
   "zh": "二叉树的所有路径",
   "slug": "binary-tree-paths",
   "d": "E",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "用後序回傳子樹路徑清單、再在前面加 root.val 的寫法（不是回溯）。一度 WA（[1,2,3,null,null,4] 輸出 1->3->2），只畫了圖沒解釋，自己改好，fuzz 30000 組全過。主函數 res 沒用到。基石要的「由上往下帶路徑＋回溯」版本還沒寫。"
    },
    {
     "date": "2026-11-07",
     "kind": "練習",
     "level": "靠引導",
     "note": "回溯版（共用路徑、加入→遞迴→撤銷）。錯誤：AddRange vs Add、Remove(值) vs RemoveAt(位置)、在葉子沒收集、只加葉子、父節點在左右之間幫孩子刪。我用文字列出一次呼叫的 5 步順序後改好，fuzz 30000 組全過。重點：誰加的誰刪，刪在左右都走完之後。"
    },
    {
     "date": "2026-11-10",
     "kind": "閉卷",
     "level": "獨立",
     "note": "回溯版複習（11-07 靠引導寫出）。約 20 分鐘內、沒提示，fuzz 5 萬筆全過。共用 path、葉子收集時複製、自己 Add 自己 RemoveAt 都對。小地方：葉子分支 RemoveAt+return 可省成統一走到底再 RemoveAt；先收 int list 再轉字串多一輪。"
    }
   ]
  },
  "199": {
   "n": "199",
   "t": "Binary Tree Right Side View",
   "zh": "",
   "slug": "binary-tree-right-side-view",
   "d": "M",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "NeetCode 樹章。2019 寫過、2026 第一次。102 層序骨架，每層開始前用 queue.Last() 取這層最右邊。Last() 是 LINQ、會掃整個 queue，但 queue 當下剛好是一層，總共仍 O(n)。20 萬組 fuzz 0 mismatch。"
    }
   ]
  },
  "1448": {
   "n": "1448",
   "t": "Count Good Nodes in Binary Tree",
   "zh": "",
   "slug": "count-good-nodes-in-binary-tree",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "NeetCode 樹章，從沒寫過（關 2：同 1026 的「往下帶路徑最大值」）。只問了題意，想法、>= 條件、O(n)/O(h) 都自己講對，一次寫對。用 int.MinValue 當初始最大值（只拿來比較、不相減，所以沒有 1026/98 的溢位坑）。20 萬組 fuzz＋10 萬節點長鏈 0 mismatch。"
    }
   ]
  },
  "230": {
   "n": "230",
   "t": "Kth Smallest Element in a BST",
   "zh": "",
   "slug": "kth-smallest-element-in-a-bst",
   "d": "M",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-08",
     "kind": "閉卷",
     "level": "獨立",
     "note": "NeetCode 樹章收尾。2019 寫過、2026 第一次。中序遍歷＋List 收前 k 個、滿了就不往右走（提早停）。自己覺得解法奇怪，其實就是中序＋提早結束，List 只當計數器用。沒先講想法/複雜度就直接寫。20 萬組 fuzz 0 mismatch，1 萬節點長鏈 OK。時間 O(h+k)、空間 O(h+k)。"
    }
   ]
  },
  "572": {
   "n": "572",
   "t": "Subtree of Another Tree",
   "zh": "",
   "slug": "subtree-of-another-tree",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-08",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "NeetCode 樹章收尾。想法自己講對（走訪每個節點當起點＋same tree 比較）；複雜度先講 O(n)，AI 給『全是 1、只有最底形狀不同』的例子後改成 O(m×n)。主函式用迭代前序（stack）、IsSame 遞迴。30 萬組 fuzz 0 mismatch。小瑕疵：一開始先 Push(root) 又拿 current=root，root 會在最後被 pop 再走一次，整棵樹大約掃兩遍——結果對但多做一倍。nvim 中途被關，靠 swap 救回。"
    }
   ]
  },
  "242": {
   "n": "242",
   "t": "Valid Anagram",
   "zh": "有效的字母异位词",
   "slug": "valid-anagram",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-08",
     "kind": "閉卷",
     "level": "獨立",
     "note": "新策略（NeetCode 主題順序、先題庫再 NeetCode 測）A&H 章第一題。計數陣列 int[26]，s 加、t 減，減到 <0 提早回 false，最後掃一次 >0。沒先講想法/複雜度就直接寫。30 萬組 fuzz 0 mismatch。O(n)、O(1)。小瑕疵：用 97 魔術數字（寫 'a' 較清楚）；可先比長度就省掉最後那圈。"
    }
   ]
  },
  "349": {
   "n": "349",
   "t": "Intersection of Two Arrays",
   "zh": "两个数组的交集",
   "slug": "intersection-of-two-arrays",
   "d": "E",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-08",
     "kind": "閉卷",
     "level": "獨立",
     "note": "A&H 章第二題。這次有先講想法和複雜度 O(m+n)/O(n)。口頭想法是『第二個陣列 Add 進同一個 set，加不進去的就是答案』——這樣 nums2 自己重複（nums1=[1], nums2=[2,2]）會誤判；但寫的時候自己改成 Contains 查＋結果用另一個 HashSet 去重，所以 code 是對的。30 萬組 fuzz 0 mismatch。開頭判空那行多餘但無害。"
    }
   ]
  },
  "105": {
   "n": "105",
   "t": "Construct Binary Tree from Preorder and Inorder Traversal",
   "zh": "",
   "slug": "construct-binary-tree-from-preorder-and-inorder-traversal",
   "d": "M",
   "st": "y26",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-09",
     "kind": "練習",
     "level": "有小提示",
     "note": "未完成，先欠著（晚上補）。一開始以為中序倒數第二個是右樹根；提示後知道前序第一個是根。寫出來只有頂層用前序找根，子樹改成取中序 mid（套 108），[1,2,3]/[3,2,1] WA。卡在：每個子樹的根要從『該子樹那段前序』拿，左子樹節點數由中序切點算出。"
    },
    {
     "date": "2026-11-09",
     "kind": "練習",
     "level": "靠引導",
     "note": "晚上補寫仍未完成，明天再寫。停止條件改了三版（start<end → 加 start==end → start>end）才對，fuzz 反例依序 [1]（stack overflow）、[1]（回 null）、[2,1]/[1,2]（回 null）。結構問題：只用一組 start/end 同時當 preorder 和 inorder 的範圍。口頭演算法自己講對（preorder 頭＝根 → inorder 算左邊幾個 k → 回 preorder 切），但不懂『同一子樹在兩陣列長度一樣、起點不一樣』。AI 用表格逐層列 pre/in 位置後理解。建議明天先寫切片版（傳小陣列，不用 index）。"
    }
   ]
  },
  "1": {
   "n": "1",
   "t": "Two Sum",
   "zh": "两数之和",
   "slug": "two-sum",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-09",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "A&H 章基石（HashMap 補數查表）。存『補數→索引』、看到 nums[i] 在表裡就配對，想法對。第一版用 dict.Add，重複補數會丟例外（[1,1,2,3] t=5），指出後改成索引子設值並加 break。這次沒跑 fuzz（使用者擋掉執行），靠讀程式碼確認。"
    }
   ]
  },
  "454": {
   "n": "454",
   "t": "4Sum II",
   "zh": "四数相加II",
   "slug": "4sum-ii",
   "d": "M",
   "st": "y26",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-09",
     "kind": "練習",
     "level": "靠引導",
     "note": "第一次寫（meet in the middle）。自己想到用 dictionary、前兩個陣列相加，也自己提出兩個 dictionary 次數相乘的版本（正確）；value 存次數、後半查 -(c+d) 是引導出來的。寫完 fuzz 5000 組＋極值（2^28 不溢位、答案 16 億）全過。11-12 閉卷重寫驗收。"
    }
   ]
  },
  "202": {
   "n": "202",
   "t": "Happy Number",
   "zh": "快乐数",
   "slug": "happy-number",
   "d": "E",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-09",
     "kind": "閉卷",
     "level": "獨立",
     "note": "想法自己講對（HashSet 記出現過的和，重複＝有環，到 1＝happy）。一次寫對，fuzz 4 萬組（1～20000 全測＋隨機到 int.MaxValue）全過。小地方：最後 return false 執行不到、list 多餘、Math.Pow 走 double 可改 d*d。複雜度事後補講 O(log n)/O(log n)，正確。"
    }
   ]
  },
  "383": {
   "n": "383",
   "t": "Ransom Note",
   "zh": "赎金信",
   "slug": "ransom-note",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-09",
     "kind": "閉卷",
     "level": "獨立",
     "note": "想法、複雜度 O(n)/O(1) 先講再寫（時間嚴格是 O(m+n)）。int[26] 計 magazine、ransomNote 扣到負就 false，用 'a' 不用魔術數字（242 的建議有吸收）。一次過，30 萬組 fuzz 0 mismatch。 LeetCode 21:51 一次 AC。2019 第一刷 5 次 WA 才過。"
    }
   ]
  },
  "238": {
   "n": "238",
   "t": "Product of Array Except Self",
   "zh": "",
   "slug": "product-of-array-except-self",
   "d": "M",
   "st": "grad",
   "r": [
    true,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-09",
     "kind": "閉卷",
     "level": "獨立",
     "note": "A&H 章前綴和第一題。想法自己講對（左累乘、右累乘兩陣列，idx 取 a[idx-1]×b[idx+1]、越界當 1），複雜度 O(n)/O(n) 對。一次過，30 萬組 fuzz（含 0、負數）0 mismatch。left/right 存的是『含自己』的累乘，所以合併時要錯一格、首尾特判。自己主動提出『感覺可以 O(1)』，追問待做。 LeetCode 22:20 一次 AC。"
    },
    {
     "date": "2026-11-12",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "O(1) 額外空間 follow-up（前綴積原本延後，使用者自己主動寫）。res 先存左積、right 用單一變數從右掃乘上去，一次寫對，30 萬組 fuzz（含 0、負數）0 mismatch。等級記有小提示：兩個方向（左積存進 res、右邊只需一個變數）是 AI 11-09 給的，這次隔 3 天自己寫出來。小地方：res[i]=1 再 *=left 可直接寫成 =left。"
    }
   ]
  },
  "15": {
   "n": "15",
   "t": "3Sum",
   "zh": "三数之和",
   "slug": "3sum",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-10",
     "kind": "練習",
     "level": "靠引導",
     "note": "骨架自己講出來（固定 i、j/k 對撞、i 跟前一個比去重），但漏講排序、空間誤答 O(n)。寫了四版：①沒排序、收索引、j 多一層 for ②去重放在每輪且跟後一個比、if 只跳一次、k 沒去重 → 漏 [-4,-2,2,2]、重複 [-2,0,0,2,2] ③去重移進命中分支但條件沒守 j<k → [0,0,0] 越界 ④ fuzz 20 萬筆全過。去重位置與條件是我指出的。11-13 閉卷重寫。"
    },
    {
     "date": "2026-11-10",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "同一天晚上重寫（早上另一台靠引導寫出），所以只算短期記憶、不算隔天驗收，11-12 照排。骨架、三處去重（i 跟前一個比、命中後 j/k 各自跳過相同且守 k>j）都自己寫對；又漏了排序（早上也漏講），fuzz 反例 [3,0,-2,-1] 回空，加 Array.Sort 後 30 萬組 0 mismatch。 事後講複雜度 O(n²)/O(log n)（排序的遞迴堆疊，不算輸出）正確——早上誤答 O(n)，這次對了。也自己確認 j 去重為何不會漏（先 j++ 再跟 j-1 比＝剛用掉的值）。"
    },
    {
     "date": "2026-11-11",
     "kind": "閉卷",
     "level": "獨立",
     "note": "隔天驗收（距 11-10 早上第一次一天）。自己寫、沒在 session 講想法；本機檔 08:46 重開、LeetCode 08:53 一次 AC，約 7 分鐘。這次記得排序；i 跟前一個比、命中後 j/k 先各移一格再 while 跳過相同並守 k>j，全對。fuzz 20 萬組全過。下一關：11-14 左右再閉卷一次＋40 Combination Sum II（同一條去重規則的變形）。"
    }
   ]
  },
  "18": {
   "n": "18",
   "t": "4Sum",
   "zh": "四数之和",
   "slug": "4sum",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-10",
     "kind": "練習",
     "level": "有小提示",
     "note": "緊接 15 寫，模板自己套過來（排序、兩層固定、內層對撞、命中後去重）。我指出的錯：少內層 while、移動方向反、j 去重條件（先寫 j>0、再寫 j>i，最後才 j>i+1）、四數和 int 溢位。第三版 fuzz 20 萬筆（含 ±1e9）全過。反覆錯在「指針第一個位置是哪一格」的邊界條件。"
    },
    {
     "date": "2026-11-10",
     "kind": "閉卷",
     "level": "獨立",
     "note": "同一天晚上重寫（早上另一台有小提示），只算短期記憶，11-12 照排。這次自己記得排序、j 去重 j>i+1、long 防溢位；中途自己用 LeetCode 範例跑出錯（只回 [[-2,0,0,2]]），自己除錯修好，AI 沒給提示。改用 tmp=target-(i+j) 再比 k+l，方向 val>0→k++ 正確。20 萬組 fuzz（含 ±1e9 溢位）0 mismatch。"
    },
    {
     "date": "2026-11-11",
     "kind": "閉卷",
     "level": "獨立",
     "note": "隔天驗收。LeetCode 09:06 一次 AC（15 是 08:53 交，中間約 13 分鐘）。排序、i/j 去重（j>i+1）、命中後 k/l 先移再 while 跳過並守 l>k、long 防溢位全部自己寫對。target−兩數和的寫法讓方向變成 val>0→k++，也對。fuzz 20 萬組（含 ±1e9）全過。"
    }
   ]
  },
  "128": {
   "n": "128",
   "t": "Longest Consecutive Sequence",
   "zh": "",
   "slug": "longest-consecutive-sequence",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-11",
     "kind": "練習",
     "level": "靠引導",
     "note": "07-30 寫過（TLE 一次後 AC）。這次 HashSet 自己想到，但兩版都是每個數往後數 O(n²)（第二版只改上限、沒改起點）。關鍵「x-1 在 set 裡就跳過、只從串頭數」是我直接講的。第三版 fuzz 10 萬組全過、10 萬連續數 4ms。使用者自評：忘記可以往前看、想複雜了。小地方：hashset.ToArray 多餘，可直接 foreach set。進難題清單。"
    },
    {
     "date": "2026-11-12",
     "kind": "閉卷",
     "level": "獨立",
     "note": "難題清單隔天重寫（1/3）。一次寫對：外層直接跑 set、x-1 在 set 就跳過、只從串頭往後數。昨天的小地方（ToArray 多餘）也改掉了。fuzz 10 萬組全過、10 萬連續數 3ms。"
    },
    {
     "date": "2026-11-12",
     "kind": "閉卷",
     "level": "獨立",
     "note": "同日晚上再寫一次（早上 10:33 已閉卷獨立），只算短期記憶，難題進度仍是 1/3，下次照排 11-15。一次寫對：外層跑 set、x-1 在 set 就跳過、從串頭往後數。30 萬組 fuzz 0 mismatch、20 萬數 1ms。值域 ±1e9 所以 i++ 溢位不會發生。"
    }
   ]
  },
  "560": {
   "n": "560",
   "t": "Subarray Sum Equals K",
   "zh": "",
   "slug": "subarray-sum-equals-k",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-11",
     "kind": "練習",
     "level": "靠引導",
     "note": "07-20、07-23 AC 過。這次骨架（累加 sum、dict 先放 (0,1)、查 sum-k）自己寫出，但「查」和「存」混在一起，改四版：①存 sum-k 且先加再算 ②查到只 count++、存 sum 放 else ③拆成兩個迴圈先存完再查 ④一個迴圈先查再存，fuzz 20 萬組全過。我第三輪的解釋太長、使用者看不懂，改用白話（先問前面有幾個 sum-k、再把自己記下來）才通。進難題清單。"
    },
    {
     "date": "2026-11-11",
     "kind": "閉卷",
     "level": "獨立",
     "note": "同日晚間主動再寫一遍，AI 沒給提示。這次一次寫出標準 O(n)/O(n)：dict 先放 (0,1)，每格累加 sum，先把 dict[sum-k] 的次數加進答案，再累計 dict[sum]；查和存已正確拆開且順序正確。隨機陣列（含負數、0）對照 O(n²) 暴力 fuzz 20 萬組，0 mismatch。難題短期驗收 1/3；後續複習仍照使用者決定延後。"
    },
    {
     "date": "2026-11-13",
     "kind": "閉卷",
     "level": "獨立",
     "note": "難題隔 2 天重寫（2/3，原排 11-14，提早一天）。一次寫對：dict 先放 (0,1)、累加 sum、先查 sum-k 加進答案、再記 sum。20 萬組 fuzz（含負數、0）0 mismatch，2 萬個 0 跑 6ms。中途 nvim 跳 11-11 的舊暫存檔，確認無未存內容後刪掉。 寫完講複雜度 O(n)/O(n) 正確。"
    }
   ]
  },
  "217": {
   "n": "217",
   "t": "Contains Duplicate",
   "zh": "",
   "slug": "contains-duplicate",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-11",
     "kind": "閉卷",
     "level": "獨立",
     "note": "NeetCode A&H 測驗暖身（2019-08 寫過）。HashSet.Add 回 false 就 true，一次寫對，標準解。O(n)/O(n)，沒先講。"
    }
   ]
  },
  "451": {
   "n": "451",
   "t": "Sort Characters By Frequency",
   "zh": "",
   "slug": "sort-characters-by-frequency",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-12",
     "kind": "冷測",
     "level": "有小提示",
     "note": "陣列冷題清單第 2 題（沒寫過）。想法自己講對：計數＋bucket sort（次數當索引）再組字串。過程：①最後迴圈 i++ 寫成往上 → 任何輸入越界（給反例 \"a\"）②修好後正確但 map 存整串 string 用 += → 50 萬同字母 20 秒，O(n²)（我提示 += 每次複製、問「需要存整串嗎」）③改存次數＋StringBuilder，編譯錯 4 個（?? 用在 int、殘留變數 m、沒 ToString）④bucket 索引寫成 map.Length → 越界 ⑤bucket[map[i]] 過：10 萬組正確、50 萬字元 6ms。複雜度 O(n)/O(n) 沒講。跨 11-11 晚～11-12 早。"
    }
   ]
  },
  "1347": {
   "n": "1347",
   "t": "Minimum Number of Steps to Make Two Strings Anagram",
   "zh": "",
   "slug": "minimum-number-of-steps-to-make-two-strings-anagram",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-12",
     "kind": "冷測",
     "level": "有小提示",
     "note": "陣列冷題清單第 1 題（沒寫過）。一開始不確定「最少」在哪、只想看 t 有 s 沒有的字元；我用範例 1 指出要比次數不是比有沒有，之後自己講出「每個字母多出來的加總」。一次寫對：int[26] s 加 t 減、加總正數，fuzz 20 萬組全過。加的是正數（s 比 t 多）而我講的是 t 多出來的，兩者相等因為等長——沒說明。複雜度 O(n)/O(1) 沒講。"
    }
   ]
  },
  "2352": {
   "n": "2352",
   "t": "Equal Row and Column Pairs",
   "zh": "",
   "slug": "equal-row-and-column-pairs",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-12",
     "kind": "冷測",
     "level": "有小提示",
     "note": "陣列冷題清單第 3 題（沒寫過），新流程第一題。想法：列、行各轉字串當 key 進兩個 dict 計數——方向對；但合併說「取大的」被我打斷一次，用 2 列×3 行=6 的例子後自己講出相乘。bug：string.Join 沒分隔符，11,1 和 1,11 都變 \"111\"（LeetCode WA 給的），我只說「看 key 長怎樣」，自己改成逗號。fuzz 10 萬組（含 1/11/111 撞 key 情況）全過。"
    }
   ]
  },
  "1338": {
   "n": "1338",
   "t": "Reduce Array Size to The Half",
   "zh": "",
   "slug": "reduce-array-size-to-the-half",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-12",
     "kind": "冷測",
     "level": "獨立",
     "note": "陣列冷題清單第 4 題（沒寫過）。沒講想法直接寫，零提示、一次寫對：dict 計次數 → 次數當索引做 bucket（沿用 451 的招）→ 從最大次數往下貪心扣，扣到 ≤ 一半就回傳。fuzz 20 萬組全過、10 萬全不同 3ms。"
    }
   ]
  },
  "347": {
   "n": "347",
   "t": "Top K Frequent Elements",
   "zh": "前K个高频元素",
   "slug": "top-k-frequent-elements",
   "d": "M",
   "st": "grad",
   "r": [
    true,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-12",
     "kind": "閉卷",
     "level": "獨立",
     "note": "NeetCode A&H 測驗（07 月寫過，隔 4 個月）。零提示一次寫對：dict 計次數 → 大小 k 的 min-heap（PriorityQueue 以次數為 priority，超過 k 就 Dequeue 最小）→ 剩下的就是答案。fuzz 10 萬組全過。也可用 451/1338 的 bucket 做到 O(n)。"
    }
   ]
  },
  "36": {
   "n": "36",
   "t": "Valid Sudoku",
   "zh": "",
   "slug": "valid-sudoku",
   "d": "M",
   "st": "grad",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-13",
     "kind": "閉卷",
     "level": "獨立",
     "note": "NeetCode A&H。想法：列、行、小九宮格各一組 HashSet，一次走完 81 格；小格編號 i/3*3+j/3（寫了多餘的 <3 判斷，結果仍正確）。fuzz 20 萬筆全過，一次就對。"
    }
   ]
  },
  "344": {
   "n": "344",
   "t": "Reverse String",
   "zh": "反转字符串",
   "slug": "reverse-string",
   "d": "E",
   "st": "grad",
   "r": [
    true,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-13",
     "kind": "閉卷",
     "level": "獨立",
     "note": "Two Pointers 章第一題。第一版用 Array.Reverse 不算，改成左右指針交換、left<right 停。fuzz 10 萬筆全過。"
    }
   ]
  },
  "27": {
   "n": "27",
   "t": "Remove Element",
   "zh": "移除元素",
   "slug": "remove-element",
   "d": "E",
   "st": "y26",
   "r": [
    true,
    true,
    true
   ],
   "ev": [
    {
     "date": "2026-11-13",
     "kind": "練習",
     "level": "靠引導",
     "note": "後來改快慢指針（一個變數記放到第幾格、不是 val 就覆蓋過去）寫完，20 萬組 fuzz 全過。選了兩頭夾（left/right 交換），卡在邊界：① while left<right 導致最後一格沒檢查（[2] val=1 回 0）② 內層 while 只擋 right>0，right 退過 left 再交換把 val 換回前面（[2,3,3] val=3 → [3,2,3]）。另外搞不懂 judge 為何 Expected 顯示陣列（它印 nums 前 k 格）。AI 失誤：讀到舊版 code、太晚解釋 judge、太晚建議換寫法，使用者情緒失控，先停。"
    }
   ]
  }
 },
 "stamp": "2026-11-13"
};
