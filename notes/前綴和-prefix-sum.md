# 前綴和 Prefix Sum 筆記

## 一句話核心
先把「從頭到某位置的累積量」算好存起來,之後問任何一段區間,用兩個累積量**相減**就 O(1) 拿到,不用每次重加。

## 基本定義（一維和）
```
presum[i] = nums[0] + nums[1] + ... + nums[i-1]   // 前 i 個的和；presum[0] = 0
區間 [l, r] 的和 = presum[r+1] - presum[l]
```
`presum` 長度是 `n+1`,多一格讓 `presum[0]=0`,邊界才不用特判。

## 為什麼快
- 暴力:每問一次區間和都重加一遍 → 一次 O(n),m 次查詢 O(n·m)。
- 前綴和:預處理 O(n),每次查詢 O(1)。

---

## 變種與招式

### 變種 1｜一維區間和查詢
- **觸發**:反覆問「第 l 到第 r 個的和是多少」。
- **招式**:建 presum 陣列,查詢 = `presum[r+1] - presum[l]`。
- **題**:303 Range Sum Query - Immutable。

**例**:`nums = [2, 4, 1, 3]`,問區間 [1,2](也就是 4+1)。
```csharp
var presum = new int[nums.Length + 1];        // 多一格,presum[0]=0
for (int i = 0; i < nums.Length; i++)
    presum[i + 1] = presum[i] + nums[i];
// presum = [0, 2, 6, 7, 10]
// 區間 [1,2] 的和 = presum[3] - presum[1] = 7 - 2 = 5   ✓ (4+1)
```

### 變種 2｜前綴和 + 雜湊：和為 K 的子陣列（最重要）
- **觸發**:問「有幾個連續子陣列的和剛好 = k」。
- **關鍵推導**:某段 [i, j] 的和 = k ⟺ `presum[j+1] - presum[i] = k` ⟺ `presum[i] = presum[j+1] - k`。
  → 掃到 j 時,問「前面出現過幾次值為 `presum - k` 的前綴和」。
- **招式**:邊掃邊累加 presum,用 dict 記每個前綴和出現幾次;每步**先查** `presum - k` 幾次、累加答案,**再記**當前 presum。
- **坑**:dict 先放 `{0: 1}`(空前綴,代表「從頭開始的整段」也算);先查再記,別把自己算進去。

**例**:`nums = [1, 1, 1]`,`k = 2` → 答案 2(有 [1,1] 和 [1,1] 兩段)。
```csharp
int count = 0, presum = 0;
var seen = new Dictionary<int, int> { { 0, 1 } };   // 空前綴先記一次
foreach (var x in nums)
{
    presum += x;
    if (seen.ContainsKey(presum - k)) count += seen[presum - k];   // 先查
    seen[presum] = seen.GetValueOrDefault(presum, 0) + 1;          // 再記
}
return count;   // 2
```

### 變種 3｜前後綴「積」（238 這一類）
- **觸發**:`answer[i] = 除了 nums[i] 以外全部乘起來`,且不准用除法。
- **招式**:兩趟。第一趟從左往右,存「i 左邊所有數的積」;第二趟從右往左,乘上「i 右邊所有數的積」。`answer[i] = 左積 × 右積`。
- **為什麼**:除自己以外 = 左半段 × 右半段,兩邊都是累積量,各掃一趟就好。

**例**:`nums = [1, 2, 3, 4]` → `[24, 12, 8, 6]`。
```csharp
int n = nums.Length;
var ans = new int[n];

int left = 1;
for (int i = 0; i < n; i++) { ans[i] = left; left *= nums[i]; }   // ans 先放「左邊的積」
// 此時 ans = [1, 1, 2, 6]

int right = 1;
for (int i = n - 1; i >= 0; i--) { ans[i] *= right; right *= nums[i]; }  // 再乘上「右邊的積」
// ans = [24, 12, 8, 6]
return ans;
```

### 變種 4｜二維前綴和
- **觸發**:一個矩陣,反覆問某個子矩形的總和。
- **招式**:`presum[i][j]` = 左上角到 (i-1,j-1) 的總和;子矩形用容斥(大塊 - 上塊 - 左塊 + 角補回)。

**例**:建表與查詢的核心兩行。
```csharp
// 建表:presum 大小 (m+1)x(n+1)
presum[i + 1][j + 1] = presum[i][j + 1] + presum[i + 1][j] - presum[i][j] + matrix[i][j];

// 查子矩形 (r1,c1) 到 (r2,c2) 的和:
sum = presum[r2 + 1][c2 + 1] - presum[r1][c2 + 1] - presum[r2 + 1][c1] + presum[r1][c1];
```
- **題**:304 Range Sum Query 2D。

### 變種 5｜差分陣列（前綴和的反操作，進階先知道有）
- **觸發**:反覆對「某個區間整段 +值」,最後才要看結果。
- **招式**:只在區間頭 +值、區間尾+1 處 -值,最後對差分陣列做一次前綴和還原。把每次 O(n) 的區間更新變 O(1)。

**例**:對 [l, r] 每格 +v,做很多次後才還原。
```csharp
diff[l] += v; diff[r + 1] -= v;                        // 每次區間更新只碰兩個點
for (int i = 1; i < diff.Length; i++) diff[i] += diff[i - 1];   // 最後前綴和 = 結果
```
- **題**:1109 Corporate Flight Bookings（進階,遇到再學）。

---

## 抓手總結
看到「**反覆問某段連續區間的總量(和／積)**」,或「**子陣列和 = 某值**」→ 想前綴和。
- 只問區間和 → presum 相減。
- 問「和為 k 的子陣列個數」→ presum + 雜湊。
- 除自己以外的積 → 前後綴積。
- 矩陣子矩形 → 二維前綴和。

## 我的檢查點（送出前自問）
- presum 長度 n+1、presum[0]=0 了嗎?
- 變種 2:dict 有先放 `{0:1}` 嗎?是「先查再記」嗎?
- 邊界:區間和是 `presum[r+1]-presum[l]`,不是 `presum[r]-presum[l]`(off-by-one)。
