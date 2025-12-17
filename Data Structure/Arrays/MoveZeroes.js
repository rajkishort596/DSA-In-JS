/*
    Author: Rajkishor Thakur
    Topic: Move Zeroes
    Date: 17 Dec 2025
    1)Approach: Brute Force Approach
     1. Iterate through the array
     2. For each zero found, look for the next non-zero element 
        3. Swap the zero with the non-zero element
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    2)Approach: Two Pointer Approach
     1. Use two pointers, one for tracking the position of the next non-zero element
     2. Iterate through the array with the second pointer
     3. When a non-zero element is found, swap it with the element at the first pointer
     4. Increment the first pointer
    Time Complexity: O(n)
    Space Complexity: O(1)
 

    
*/

class Solution {
  // Brute Force Approach
  moveZeroesBruteForce = function (nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === 0 && nums[j] !== 0) {
          nums[i] = nums[j];
          nums[j] = 0;
        }
      }
    }
  };

  //Two Pointer Approach
  moveZeroes = function (nums) {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
      if (nums[right] != 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
      }
      right++;
    }
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const nums = [0, 1, 0, 3, 12];
// const nums = [0];

const solver = new Solution();

// solver.moveZeroesBruteForce(nums);
solver.moveZeroes(nums);

console.log(`Output:`, nums);
