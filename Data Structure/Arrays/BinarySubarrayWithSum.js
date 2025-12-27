/*
    Author: Rajkishor Thakur
    Topic: Binary Subarray With Sum
    Date: 27 Dec 2025
    1)Approach: Brute Force Approach
     1.Initialize an empty array to store valid subarrays
     2.Nested loop to generate all possible subarrays
     3.Check if the sum of each subarray equals the goal using a helper function
     4.If it does, add it to the valid subarrays array
     5.Return the length of valid subarrays 
    Time Complexity: O(n^3)
    Space Complexity: O(n)

    2)Approach:Better Brute Force Approach
     1.Initialize a count variable to 0
     2.Nested loop to generate all possible subarrays
     3.Maintain a running sum for each subarray
     4.If the running sum equals the goal, increment the count
     5.Return the count of valid subarrays
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    3)Approach: Sliding Window Approach
     1.Define a helper function that counts subarrays with sum less than or equal to x
     2.If x is negative, return 0
     3.Initialize result, current sum, and left pointer
     4.Iterate through the array with a right pointer
        a.Add the current element to the current sum
        b.While current sum exceeds x, subtract elements from the left and move the left pointer
        c.Add the number of valid subarrays ending at right to the result
     5.Return the difference between counts for goal and goal - 1 to get exact sum equal to goal
    Time Complexity: O(n)
    Space Complexity: O(1)   

*/

class Solution {
  // Brute Force Approach
  isValidSubarray = function (subarray, goal) {
    return subarray.reduce((acc, curr) => acc + curr, 0) === goal;
  };
  numSubarraysWithSumBruteForce = function (nums, goal) {
    let validSubarray = [];
    for (let i = 0; i < nums.length; i++) {
      let subarray;
      for (let j = i + 1; j <= nums.length; j++) {
        subarray = nums.slice(i, j);
        if (this.isValidSubarray(subarray, goal)) validSubarray.push(subarray);
      }
    }
    return validSubarray.length;
  };

  // Better Brute Force Approach
  numSubarraysWithSumBetterBruteForce = function (nums, goal) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      let sum = nums[i];
      for (let j = i + 1; j <= nums.length; j++) {
        if (sum === goal) count++;
        sum += nums[j];
      }
    }
    return count;
  };
  // Sliding Window Approach
  numSubarraysWithSum = function (nums, goal) {
    function helper(x) {
      if (x < 0) return 0;
      let res = 0;
      let currSum = 0,
        left = 0;
      for (let right = 0; right < nums.length; right++) {
        currSum += nums[right];
        while (currSum > x) {
          currSum -= nums[left];
          left++;
        }
        res += right - left + 1;
      }
      return res;
    }
    return helper(goal) - helper(goal - 1);
  };
}

/* ================== MAIN / DRIVER CODE ================== */

// const nums = [1, 0, 1, 0, 1];
// const goal = 2;
const nums = [0, 0, 0, 0, 0];
const goal = 0;

const solver = new Solution();

// const count = solver.numSubarraysWithSumBruteForce(nums, goal);
// const count = solver.numSubarraysWithSumBetterBruteForce(nums, goal);
const count = solver.numSubarraysWithSum(nums, goal);

console.log(`Count of Subarrays with Sum ${goal}:`, count);
