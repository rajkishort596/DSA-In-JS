/*
    Author: Rajkishor Thakur
    Topic: Two Sum II
    Date: 22 Dec 2025
    1)Approach: Brute Force Approach
     1. Check all pairs of numbers to see if they sum to target
     2. If found, return their indices ++ (1-based indexing)
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    2)Approach: Hash Map Approach
     1. Use a hash map to store numbers and their indices
     2. For each number, calculate its complement (target - number)
     3. Check if complement exists in the map
     4. If found, return indices ++ (1-based indexing)
    Time Complexity: O(n)
    Space Complexity: O(n)

    3)Approach: Two Pointer Approach
     1. Initialize two pointers, one at the start and one at the end of the array
     2. While the start pointer is less than the end pointer:    
        a. Calculate the sum of the elements at the two pointers
        b. If the sum equals the target, return the indices ++ (1-based indexing)
        c. If the sum is greater than the target, move the end pointer one step to the left
        d. If the sum is less than the target, move the start pointer one step to the right
    Time Complexity: O(n)
    Space Complexity: O(1)

    
*/

class Solution {
  // Brute Force Approach
  twoSumBruteForce = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) return [++i, ++j];
      }
    }
  };

  // Hash Map Appraoch
  twoSumHashMap = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], i + 1);
    }

    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) return [++i, map.get(complement)];
    }
  };

  // Two Pointer Appraoch
  twoSum = function (nums, target) {
    let s = 0;
    let e = nums.length - 1;
    while (s < e) {
      if (nums[s] + nums[e] === target) return [++s, ++e];
      else if (nums[s] + nums[e] > target) {
        e--;
      } else {
        s++;
      }
    }
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const nums = [2, 7, 11, 15];
const target = 9;

const solver = new Solution();
// const Output = solver.twoSumBruteForce(nums, target);
// const Output = solver.twoSumHashMap(nums, target);
const Output = solver.twoSum(nums, target);

console.log(`Indixes that sum up to ${target}:`, Output);
