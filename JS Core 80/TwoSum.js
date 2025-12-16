/*
    Author: Rajkishor Thakur
    Topic: Two Sum
    Date: 16 Dec 2025
    1)Approach: Brute Force Approach
     1. Check all pairs of numbers to see if they sum to target
     2. If found, return their indices
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    2)Approach: Hash Map Approach
    1. Use a hash map to store numbers and their indices
    2. For each number, calculate its complement (target - number)
    3. Check if complement exists in the map
    4. If found, return indices
  
    Time Complexity: O(n)
    Space Complexity: O(n)

    
*/

class Solution {
  // Brute Force Approach
  twoSumBruteForce = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) return [i, j];
      }
    }
  };

  // Hash Map Appraoch
  twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) return [i, map.get(complement)];
      map.set(nums[i], i);
    }
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const nums = [2, 7, 11, 15];
const target = 18;

const solver = new Solution();
// const Output = solver.twoSumBruteForce(nums, target);
const Output = solver.twoSum(nums, target);

console.log(`Indixes that sum up to ${target}:`, Output);
