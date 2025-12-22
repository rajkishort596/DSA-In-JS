/*
    Author: Rajkishor Thakur
    Topic: Merge Sorted Arrays
    Date: 22 Dec 2025
    1)Approach: Brute Force Approach
        1. Initialize pointer i at the end of nums1 (m + n - 1)
        2. Initialize pointer j at the end of nums2 (n - 1)
        4. Merge nums2 into nums1 starting from index m + n - 1 to 0
        5. Sort nums1 to get the merged sorted array
    Time Complexity: O(N(log n))
    Space Complexity: O(1)

    2)Approach: Three pointer Approach
     1. Initialize pointer last at the end of nums1 (m + n - 1)
     2. Initialize pointer i at the end of valid elements in nums1 (m - 1)
     3. Initialize pointer j at the end of nums2 (n - 1)
     4. While both i and j are >= 0:
        a. If nums1[i] < nums2[j], place nums2[j] at nums1[last] and decrement j and last
        b. Else, place nums1[i] at nums1[last] and decrement i and last
     5. If any elements remain in nums2, copy them to nums1
    Time Complexity: O(m + n)
    Space Complexity: O(1)
*/

class Solution {
  // Brute Force Approach
  mergeBruteForce = function (nums1, m, nums2, n) {
    let i = m + n - 1;
    let j = n - 1;
    while (i >= 0 && j >= 0) {
      nums1[i--] = nums2[j--];
    }
    nums1.sort((a, b) => a - b);
  };

  // Three pointer Approach
  merge = function (nums1, m, nums2, n) {
    let last = m + n - 1;
    let i = m - 1;
    let j = n - 1;
    while (i >= 0 && j >= 0) {
      if (nums1[i] < nums2[j]) {
        nums1[last--] = nums2[j--];
      } else {
        nums1[last--] = nums1[i--];
      }
    }
    while (j >= 0) {
      nums1[last--] = nums2[j--];
    }
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

const solver = new Solution();

// solver.mergeBruteForce(nums1, m, nums2, n);
solver.merge(nums1, m, nums2, n);

console.log(`Merged:`, nums1);
