/*
    Author: Rajkishor Thakur
    Topic: Contains Duplicate
    Date: 16 Dec 2025
    1)Approach: Brute Force Approach
    1. Check all pairs of numbers to see if they are duplicates
    2. If found, return true
    3. If no duplicates found, return false
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    2)Approach: Hash Map Approach
    1. Use a hash map to track seen numbers 
    2. For each number, check if it exists in the map
    3. If found, return true
    4. If not found, add it to the map
    5. If no duplicates found, return false 
  
    Time Complexity: O(n)
    Space Complexity: O(n)

    
*/

class Solution {
  // Brute Force Approach
  containsDuplicateBruteForce = function (nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) return true;
      }
    }
    return false;
  };

  // Hash Map Appraoch
  containsDuplicate = function (nums) {
    let map = new Map();
    for (const num of nums) {
      if (map.has(num)) return true;
      map.set(num, true);
    }
    return false;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const solver = new Solution();

// const ContainsDuplicate = solver.containsDuplicateBruteForce(nums);
const ContainsDuplicate = solver.containsDuplicate(nums);

console.log(`Contains Duplicate:`, ContainsDuplicate);
