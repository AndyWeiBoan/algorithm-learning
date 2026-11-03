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
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "二分搜尋：區間不變量",
       "r": [
        false,
        false,
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
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "快慢指針：原地覆寫",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "977",
       "t": "Squares of a Sorted Array",
       "zh": "有序数组的平方",
       "slug": "squares-of-a-sorted-array",
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
        false,
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
        false,
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
       "n": "1004",
       "t": "Max Consecutive Ones III",
       "zh": "",
       "slug": "max-consecutive-ones-iii",
       "star": "",
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
       "n": "904",
       "t": "Fruit Into Baskets",
       "zh": "",
       "slug": "fruit-into-baskets",
       "star": "",
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
       "n": "438",
       "t": "Find All Anagrams in a String",
       "zh": "",
       "slug": "find-all-anagrams-in-a-string",
       "star": "",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "固定滑動窗口＋計數",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "567",
       "t": "Permutation in String",
       "zh": "",
       "slug": "permutation-in-string",
       "star": "",
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
       "n": "424",
       "t": "Longest Repeating Character Replacement",
       "zh": "",
       "slug": "longest-repeating-character-replacement",
       "star": "",
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
       "n": "560",
       "t": "Subarray Sum Equals K",
       "zh": "",
       "slug": "subarray-sum-equals-k",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "前綴和＋雜湊",
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
       "st": "none",
       "d": "E",
       "hi": true,
       "base": "dummy head 虛擬頭節點",
       "r": [
        false,
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
       "st": "none",
       "d": "E",
       "hi": true,
       "base": "鏈結串列反轉（三指針）",
       "r": [
        false,
        false,
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
      },
      {
       "n": "19",
       "t": "Remove Nth Node From End of List",
       "zh": "删除链表的倒数第N个节点",
       "slug": "remove-nth-node-from-end-of-list",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": true,
       "base": "快慢指針：固定間距",
       "r": [
        false,
        false,
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
       "n": "142",
       "t": "Linked List Cycle II",
       "zh": "环形链表II",
       "slug": "linked-list-cycle-ii",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": true,
       "base": "Floyd 判環找入口",
       "r": [
        false,
        false,
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
       "st": "none",
       "d": "E",
       "hi": true,
       "base": "計數陣列",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "1002",
       "t": "Find Common Characters",
       "zh": "查找常用字符",
       "slug": "find-common-characters",
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
       "n": "349",
       "t": "Intersection of Two Arrays",
       "zh": "两个数组的交集",
       "slug": "intersection-of-two-arrays",
       "star": "⭐",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "HashSet 去重",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "202",
       "t": "Happy Number",
       "zh": "快乐数",
       "slug": "happy-number",
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
       "n": "1",
       "t": "Two Sum",
       "zh": "两数之和",
       "slug": "two-sum",
       "star": "⭐",
       "st": "none",
       "d": "E",
       "hi": true,
       "base": "HashMap 補數查表",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "454",
       "t": "4Sum II",
       "zh": "四数相加II",
       "slug": "4sum-ii",
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
      },
      {
       "n": "383",
       "t": "Ransom Note",
       "zh": "赎金信",
       "slug": "ransom-note",
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
       "n": "15",
       "t": "3Sum",
       "zh": "三数之和",
       "slug": "3sum",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "排序＋雙指針（N-Sum 骨架）",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "18",
       "t": "4Sum",
       "zh": "四数之和",
       "slug": "4sum",
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
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "雙指針反轉",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
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
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "KMP 字串匹配",
       "r": [
        false,
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
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "對撞指針",
       "r": [
        false,
        false,
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
       "n": "26",
       "t": "Remove Duplicates from Sorted Array",
       "zh": "",
       "slug": "remove-duplicates-from-sorted-array",
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
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "排序＋雙指針（N-Sum 骨架）",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "18",
       "t": "4Sum",
       "zh": "四数之和",
       "slug": "4sum",
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
       "st": "none",
       "d": "E",
       "hi": true,
       "base": "棧⇄佇列互換",
       "r": [
        false,
        false,
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
       "st": "none",
       "d": "E",
       "hi": true,
       "base": "",
       "r": [
        false,
        false,
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
       "st": "none",
       "d": "E",
       "hi": true,
       "base": "棧：括號配對",
       "r": [
        false,
        false,
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
       "st": "none",
       "d": "E",
       "hi": true,
       "base": "",
       "r": [
        false,
        false,
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
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "Heap／Top-K",
       "r": [
        false,
        false,
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
        false,
        false,
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
        false,
        false,
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
        false,
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
        false,
        true,
        false
       ],
       "ev": [
        {
         "date": "2026-09-02",
         "kind": "閉卷",
         "level": "獨立",
         "note": "層序母模板。"
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
        false,
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
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-10-26",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "有除錯討論。"
        }
       ]
      },
      {
       "n": "111",
       "t": "Minimum Depth of Binary Tree",
       "zh": "二叉树的最小深度",
       "slug": "minimum-depth-of-binary-tree",
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
       "n": "222",
       "t": "Count Complete Tree Nodes",
       "zh": "完全二叉树的节点个数",
       "slug": "count-complete-tree-nodes",
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
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-10-26",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "自底向上聚合，回傳 (高度, 是否平衡)。"
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
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-10-27",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "同招換題。卡在算邊還是算節點：左高＋右高＝經過該點的邊數。"
        }
       ]
      },
      {
       "n": "257",
       "t": "Binary Tree Paths",
       "zh": "二叉树的所有路径",
       "slug": "binary-tree-paths",
       "star": "☆",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "樹上回溯（路徑）",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "404",
       "t": "Sum of Left Leaves",
       "zh": "左叶子之和",
       "slug": "sum-of-left-leaves",
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
       "n": "513",
       "t": "Find Bottom Left Tree Value",
       "zh": "找树左下角的值",
       "slug": "find-bottom-left-tree-value",
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
       "n": "112",
       "t": "Path Sum",
       "zh": "路径总和",
       "slug": "path-sum",
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
       "n": "106",
       "t": "Construct Binary Tree from Inorder and Postorder Traversal",
       "zh": "从中序与后序遍历序列构造二叉树",
       "slug": "construct-binary-tree-from-inorder-and-postorder-traversal",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": true,
       "base": "構造二元樹",
       "r": [
        false,
        false,
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
       "n": "617",
       "t": "Merge Two Binary Trees",
       "zh": "合并二叉树",
       "slug": "merge-two-binary-trees",
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
       "n": "700",
       "t": "Search in a Binary Search Tree",
       "zh": "二叉搜索树中的搜索",
       "slug": "search-in-a-binary-search-tree",
       "star": "⭐",
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "BST 性質",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
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
        false,
        false,
        true
       ],
       "ev": [
        {
         "date": "2026-11-01",
         "kind": "閉卷",
         "level": "有小提示",
         "note": "一開始把 98 和 110 搞混。AI 給反例 5→10→7→12 後，自己想到從上往下帶 (下限, 上限)。兩個坑都靠 fuzz 反例抓到：① 相等要算不合法（[0,null,1,1]）② 用 int.MinValue/MaxValue 當「沒有邊界」會撞到真的極值（[0,-2147483648]），AI 列三種解法、建議改 long。30 萬組 fuzz 0 mismatch。下次 BST 題先問：相等怎麼辦、極值怎麼辦。"
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
       "st": "none",
       "d": "M",
       "hi": true,
       "base": "LCA：後序合併",
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
         "note": "忘了解法，寫之前 AI 講過 235/236 差別（後序、左右回報往上收）。bug：right 那行遞迴進 root.left（粗心型，跟 1026 Min/Max 同類）；[1,2,3] 這種小例子剛好對，AI 給反例 [1,null,2,null,3] p=2 q=3 才抓到。修正後 20 萬組 fuzz 0 mismatch。隔 ≥2 天要閉卷重寫。"
        }
       ]
      },
      {
       "n": "235",
       "t": "Lowest Common Ancestor of a Binary Search Tree",
       "zh": "二叉搜索树的最近公共祖先",
       "slug": "lowest-common-ancestor-of-a-binary-search-tree",
       "star": "⭐",
       "st": "none",
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
        }
       ]
      },
      {
       "n": "701",
       "t": "Insert into a Binary Search Tree",
       "zh": "二叉搜索树中的插入操作",
       "slug": "insert-into-a-binary-search-tree",
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
       "n": "450",
       "t": "Delete Node in a BST",
       "zh": "删除二叉搜索树中的节点",
       "slug": "delete-node-in-a-bst",
       "star": "⭐",
       "st": "none",
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
         "date": "2026-11-03",
         "kind": "練習",
         "level": "靠引導",
         "note": "未完成，fuzz 還沒過。一刷看答案，這次等於第一次自己寫。自己做到：照 BST 大小往一邊找、沒右子樹回傳左、遞迴回傳值接回父節點、FindMin 最後改成回傳 (min, 刪掉最小後的子樹根) 而且寫對。卡住：① 以為 FindMin 回傳的是最小節點的父節點 ② 中途從 A（左子樹接到右子樹最小節點）換成 B（後繼值替代）③ 沒用 found.node 接回 root.right，反例 [1,null,2] key=1 得 [2,null,2]。AI 講了 A 的兩步、畫圖解釋為什麼要接回 root.right。挫折到想放棄。11-05 後閉卷重寫，先畫圖再寫。"
        }
       ]
      },
      {
       "n": "669",
       "t": "Trim a Binary Search Tree",
       "zh": "修剪二叉搜索树",
       "slug": "trim-a-binary-search-tree",
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
       "n": "108",
       "t": "Convert Sorted Array to Binary Search Tree",
       "zh": "将有序数组转换为二叉搜索树",
       "slug": "convert-sorted-array-to-binary-search-tree",
       "star": "⭐",
       "st": "none",
       "d": "E",
       "hi": true,
       "base": "",
       "r": [
        false,
        false,
        false
       ],
       "ev": []
      },
      {
       "n": "538",
       "t": "Convert BST to Greater Tree",
       "zh": "把二叉搜索树转换为累加树",
       "slug": "convert-bst-to-greater-tree",
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
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "回溯模板：組合",
       "r": [
        false,
        false,
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
        false,
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
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "回溯：排列（used 陣列）",
       "r": [
        false,
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
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "DP 五部曲入門",
       "r": [
        false,
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
        false,
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
       "n": "343",
       "t": "Integer Break",
       "zh": "整数拆分",
       "slug": "integer-break",
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
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "0-1 背包",
       "r": [
        false,
        false,
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
       "n": "279",
       "t": "Perfect Squares",
       "zh": "完全平方数",
       "slug": "perfect-squares",
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
        false,
        false,
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
       "st": "none",
       "d": "E",
       "hi": false,
       "base": "股票狀態機 DP",
       "r": [
        false,
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
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "單調棧",
       "r": [
        false,
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
       "n": "130",
       "t": "Surrounded Regions",
       "zh": "",
       "slug": "surrounded-regions",
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
       "n": "417",
       "t": "Pacific Atlantic Water Flow",
       "zh": "",
       "slug": "pacific-atlantic-water-flow",
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
       "n": "994",
       "t": "Rotting Oranges",
       "zh": "",
       "slug": "rotting-oranges",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "多源 BFS",
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
     "g": "B. 經典",
     "items": [
      {
       "n": "207",
       "t": "Course Schedule",
       "zh": "",
       "slug": "course-schedule",
       "star": "⭐",
       "st": "none",
       "d": "M",
       "hi": false,
       "base": "拓撲排序",
       "r": [
        false,
        false,
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
       "st": "none",
       "d": "M",
       "hi": true,
       "base": "手寫排序（merge／quick）",
       "r": [
        false,
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
       "n": "49",
       "t": "Group Anagrams",
       "zh": "",
       "slug": "group-anagrams",
       "d": "M",
       "st": "grad",
       "r": [
        false,
        true,
        false
       ],
       "ev": [
        {
         "date": "2026-09-07",
         "kind": "閉卷",
         "level": "獨立",
         "note": "計數法建 key。"
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
      }
     ]
    }
   ]
  }
 ],
 "sql": [],
 "other": [],
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
    false,
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
    false,
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
    false,
    true,
    false
   ],
   "ev": [
    {
     "date": "2026-09-02",
     "kind": "閉卷",
     "level": "獨立",
     "note": "層序母模板。"
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
    false,
    true,
    false
   ],
   "ev": [
    {
     "date": "2026-09-07",
     "kind": "閉卷",
     "level": "獨立",
     "note": "計數法建 key。"
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
    false,
    false,
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
   "st": "none",
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
     "note": "忘了解法，寫之前 AI 講過 235/236 差別（後序、左右回報往上收）。bug：right 那行遞迴進 root.left（粗心型，跟 1026 Min/Max 同類）；[1,2,3] 這種小例子剛好對，AI 給反例 [1,null,2,null,3] p=2 q=3 才抓到。修正後 20 萬組 fuzz 0 mismatch。隔 ≥2 天要閉卷重寫。"
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
    false,
    false,
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
    false,
    false,
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
    false,
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
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-10-26",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "有除錯討論。"
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
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-10-26",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "自底向上聚合，回傳 (高度, 是否平衡)。"
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
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-10-27",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "同招換題。卡在算邊還是算節點：左高＋右高＝經過該點的邊數。"
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
   "st": "none",
   "r": [
    false,
    false,
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
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-01",
     "kind": "閉卷",
     "level": "有小提示",
     "note": "一開始把 98 和 110 搞混。AI 給反例 5→10→7→12 後，自己想到從上往下帶 (下限, 上限)。兩個坑都靠 fuzz 反例抓到：① 相等要算不合法（[0,null,1,1]）② 用 int.MinValue/MaxValue 當「沒有邊界」會撞到真的極值（[0,-2147483648]），AI 列三種解法、建議改 long。30 萬組 fuzz 0 mismatch。下次 BST 題先問：相等怎麼辦、極值怎麼辦。"
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
    false,
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
   "st": "none",
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
    false,
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
   "st": "none",
   "r": [
    false,
    false,
    true
   ],
   "ev": [
    {
     "date": "2026-11-03",
     "kind": "練習",
     "level": "靠引導",
     "note": "未完成，fuzz 還沒過。一刷看答案，這次等於第一次自己寫。自己做到：照 BST 大小往一邊找、沒右子樹回傳左、遞迴回傳值接回父節點、FindMin 最後改成回傳 (min, 刪掉最小後的子樹根) 而且寫對。卡住：① 以為 FindMin 回傳的是最小節點的父節點 ② 中途從 A（左子樹接到右子樹最小節點）換成 B（後繼值替代）③ 沒用 found.node 接回 root.right，反例 [1,null,2] key=1 得 [2,null,2]。AI 講了 A 的兩步、畫圖解釋為什麼要接回 root.right。挫折到想放棄。11-05 後閉卷重寫，先畫圖再寫。"
    }
   ]
  }
 },
 "stamp": "2026-11-03"
};
