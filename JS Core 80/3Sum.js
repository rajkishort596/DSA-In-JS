/*
    Author: Rajkishor Thakur
    Topic: Three Sum - Find all unique triplets in an array that sum to zero
    Date: 23 Dec 2025
    
    ============================================================================
    APPROACH 1: Brute Force Approach
    ============================================================================
    Algorithm:
    1. Use three nested loops to generate all possible triplets
    2. Check if each triplet sums to zero
    3. Sort each valid triplet and store in a Set to avoid duplicates
    4. Return all unique triplets found
    
    Time Complexity: O(n^3)
    Space Complexity: O(n)
    
    ============================================================================
    APPROACH 2: Hash Set Approach
    ============================================================================
    Algorithm:
    1. Initialize an empty result array and a Set to track unique triplets
    2. Fix one element nums[i] using an outer loop
    3. Use an inner hash set to store elements we've seen so far
    4. Fix another element nums[j] using the inner loop
    5. Calculate the third element needed to sum to zero: third = -(nums[i] + nums[j])
    6. Check if third exists in the hash set
    7. If it exists, we found a triplet; sort it and add to result if not already present
    8. Add nums[j] to the hash set for future checks
    9. Return all unique triplets found
    
    Optimization: Eliminates one loop by using hash set lookup (O(1))
    
    Time Complexity: O(n^2) 
    Space Complexity: O(n)
    
    ============================================================================
    APPROACH 3: Two Pointer Approach (OPTIMAL)
    ============================================================================
    Algorithm:
    1. Sort the array first (enables two-pointer technique)
    2. For each element nums[i], use two pointers (left and right)
    3. left pointer starts at i+1, right pointer at end of array
    4. Calculate sum = nums[i] + nums[left] + nums[right] 
    5. If sum equals 0: store triplet, skip duplicates, move both pointers
    6. If sum < 0: move left pointer right (need larger sum)
    7. If sum > 0: move right pointer left (need smaller sum)
    8. Skip duplicate elements to ensure unique triplets

    Time Complexity: O(n^2 + n log n) 
    Space Complexity: O(n) 
*/

class Solution {
  // Brute Force Approach
  threeSumBruteForce = function (nums) {
    let res = [];
    let seen = new Set();

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] + nums[j] + nums[k] === 0) {
            let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
            let str = triplet.join(",");
            if (!seen.has(str)) {
              res.push(triplet);
              seen.add(str);
            }
          }
        }
      }
    }
    return res;
  };

  // Hash Set Approach
  threeSumHashSet = function (nums) {
    let res = [];
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
      let hashSet = new Set();
      for (let j = i + 1; j < nums.length; j++) {
        let third = -(nums[i] + nums[j]);
        if (hashSet.has(third)) {
          let triplet = [nums[i], nums[j], third].sort((a, b) => a - b);
          let str = triplet.join(",");
          if (!set.has(str)) {
            res.push(triplet);
            set.add(str);
          }
        }
        hashSet.add(nums[j]);
      }
    }
    return res;
  };

  // Two Pointer Approach
  threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          res.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    return res;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const nums = [-1, 0, 1, 2, -1, -4];

const solver = new Solution();
// const Output = solver.threeSumBruteForce(nums);
// const Output = solver.threeSumHashSet(nums);
const Output = solver.threeSum(nums);

console.log(`Triplets that sum up to 0:`, Output);
