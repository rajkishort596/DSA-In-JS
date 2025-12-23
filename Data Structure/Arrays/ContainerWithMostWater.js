/*
    Author: Rajkishor Thakur
    Topic: Container With Most Water
    Date: 23 Dec 2025
    1)Approach: Brute Force Approach
     1. Iterate through each pair of lines in the array
     2. For each pair, calculate the area formed between the lines and the x-axis
     3. Keep track of the maximum area found
     4. Return the maximum area
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    2)Approach: Two Pointers Approach
      1. Initialize two pointers, one at the beginning and one at the end of the array
      2. Calculate the area formed by the lines at these pointers
      3. Move the pointer pointing to the shorter line inward
      4. Repeat until the pointers meet
      5. Return the maximum area found
    Time Complexity: O(n)
    Space Complexity: O(1)

*/

class Solution {
  // Brute Force Approach
  maxWaterBruteForce = function (height) {
    let maxWater = -Infinity;
    let currWater = 0;
    let minHeight;
    for (let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
        minHeight = Math.min(height[i], height[j]);
        currWater = minHeight * (j - i);
        maxWater = Math.max(maxWater, currWater);
      }
    }
    return maxWater;
  };

  // Two Pointers Approach
  maxWater = function (height) {
    let maxWater = -Infinity;
    let currWater = 0;
    let minHeight;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
      minHeight = Math.min(height[left], height[right]);
      currWater = minHeight * (right - left);
      maxWater = Math.max(currWater, maxWater);
      height[left] < height[right] ? left++ : right--;
    }

    return maxWater;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 1];

const solver = new Solution();
// const maxWater = solver.maxWaterBruteForce(height);
const maxWater = solver.maxWater(height);

console.log(`Maximum water that can be contained is:`, maxWater);
