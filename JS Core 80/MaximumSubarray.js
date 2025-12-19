/*
    Author: Rajkishor Thakur
    Topic: Maximum Subarray
    Date: 19 Dec 2025
    1)Approach: Brute Force Approach
     1. Check all subarrays to calculate their sums
     2. Keep track of maximum sum found
     3. Return maximum sum   
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    2)Approach: Kadane's Algorithm
     1. Initialize current sum and maximum sum
     2. Iterate through the array, maintaining a current sum
     3. If current sum drops below 0, reset it to 0
     4. Update maximum sum whenever current sum exceeds it
     5. Return maximum sum found
    Time Complexity: O(n)
    Space Complexity: O(1)

*/

class Solution {
  // Brute Force Approach
  maxSubArrayBruteForce = function (nums) {
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      let currSum = 0;
      for (let j = i; j < nums.length; j++) {
        currSum += nums[j];
        maxSum = Math.max(currSum, maxSum);
      }
    }
    return maxSum;
  };

  // Kadane's Algorithm Approach
  maxSubArray = function (nums) {
    let currSum = 0;
    let maxSum = nums[0];
    for (let num of nums) {
      currSum += num;
      if (currSum > maxSum) maxSum = currSum;
      if (currSum < 0) currSum = 0;
    }
    return maxSum;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums = [5, 4, -1, 7, 8];

const solver = new Solution();

// const Subarray = solver.maxSubArrayBruteForce(nums);
const Subarray = solver.maxSubArray(nums);

console.log(`Maximum Subarray:`, Subarray);
