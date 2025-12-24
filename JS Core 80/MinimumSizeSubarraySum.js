/*
    Author: Rajkishor Thakur
    Topic: Minimum Size Subarray Sum
    Date: 24 Dec 2025
    1)Approach: Brute Force Approach
     1.Initialize minLength to Infinity
     2.Use two nested loops to consider all subarrays
     3.For each subarray, calculate the sum
     4.If sum >= target, update minLength with the smaller length
     5.Return minLength or 0 if no valid subarray found
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    2)Approach: Sliding Window Approach
     1.Initialize minLength to Infinity, left and right pointers to 0, and sum to 0
     2.Iterate with the right pointer through the array
     3.Add nums[right] to sum
     4.While sum >= target, update minLength, subtract nums[left] from sum, and increment left
     5.Increment right pointer
     6.Return minLength or 0 if no valid subarray found
    Time Complexity: O(n)
    Space Complexity: O(1)

*/

class Solution {
  // Brute Force Approach
  minSubarrayLenBruteForce = function (target, nums) {
    let minLength = Infinity;
    for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = i; j < nums.length; j++) {
        sum += nums[j];
        if (sum >= target) {
          minLength = Math.min(minLength, j - i + 1);
        }
      }
    }
    return minLength === Infinity ? 0 : minLength;
  };

  // Sliding Window Approach
  minSubarrayLen = function (target, nums) {
    let minLength = Infinity;
    let left = 0;
    let right = 0;
    let sum = 0;
    while (right < nums.length) {
      sum += nums[right];
      while (sum >= target) {
        minLength = Math.min(minLength, right - left + 1);
        sum -= nums[left];
        left++;
      }
      right++;
    }
    return minLength === Infinity ? 0 : minLength;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const nums = [2, 3, 1, 2, 4, 3];
const target = 7;

const solver = new Solution();

// const minSubarrayLen = solver.minSubarrayLenBruteForce(target, nums);
const minSubarrayLen = solver.minSubarrayLen(target, nums);

console.log(`Minimum subarray length is:`, minSubarrayLen);
