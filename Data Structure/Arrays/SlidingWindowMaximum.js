/*
    Author: Rajkishor Thakur
    Topic: Sliding Window Maximum
    Date: 25 Dec 2025
    1)Approach: Brute Force Approach
     1.Initialize an empty array max to store maximums
     2.Use a loop to iterate through the array from 0 to length-k
     3.For each position, use a nested loop to find the maximum in the current window of size k
     4.Append the maximum to max array
     5.Return max array after processing all windows
    Time Complexity: O(n*k)
    Space Complexity: O(n)

    2)Approach: Sliding Window Naive Approach
     1.Initialize maxElement to -Infinity, max array to store maximums, left and right pointers to 0 and k-1 respectively
     2.While right < nums.length:
        a. Initialize maxElement to -Infinity
        b. Iterate from left to right and find the maximum element in the current window
        c. Push maxElement into max array
        d. Increment left and right pointers
     3.Return max array

    Time Complexity: O(n*k)
    Space Complexity: O(n)

    3)Approach: Sliding Window + Deque Approach
     1.Initialize result array to store maximums and deque to store indices
     2.Process the first k elements to initialize the first window: (Monotonic Decreasing Queue)
        a. While deque is not empty and current element is greater than or equal to the element at the back of deque, pop from back
        b. Push current index to deque
     3.Process the remaining elements from index k to end:
        a. Add the maximum element (front of deque) to result
        b. Remove indices that have slid out of the window range
        c. Maintain monotonic property for the new element at index i
        d. Push current index to deque
    4. After the loop, add the maximum of the last window to result    
    5.Return result array
    Time Complexity: O(n)
    Space Complexity: O(k + n)
*/

class Solution {
  // Brute Force Approach
  slidingWindowMaximumBruteForce = function (nums, k) {
    if (!nums.length || k === 0) return [];
    const max = [];

    for (let i = 0; i <= nums.length - k; i++) {
      let maxElement = nums[i];
      for (let j = i + 1; j < i + k; j++) {
        maxElement = Math.max(maxElement, nums[j]);
      }
      max.push(maxElement);
    }
    return max;
  };

  //Naive Sliding Window Approach
  slidingWindowMaximumNaive = function (nums, k) {
    let maxElement = -Infinity;
    let max = [];
    let left = 0;
    let right = k - 1;
    while (right < nums.length) {
      maxElement = -Infinity;
      for (let i = left; i <= right; i++) {
        maxElement = Math.max(maxElement, nums[i]);
      }
      max.push(maxElement);
      left++;
      right++;
    }
    return max;
  };

  // Sliding Window + Deque Approach
  slidingWindowMaximum = function (nums, k) {
    if (!nums.length || k === 0) return [];

    const result = [];
    const deque = [];

    // 1. Process the first k elements to initialize the first window
    for (let i = 0; i < k; i++) {
      // Remove smaller elements from the back (monotonic decreasing)
      while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
        deque.pop();
      }
      deque.push(i);
    }

    // 2. Process the remaining elements from index k to the end
    for (let i = k; i < nums.length; i++) {
      // The front of the deque is the maximum of the first window
      result.push(nums[deque[0]]);

      // Remove indices that have slid out of the window range
      if (deque[0] <= i - k) {
        deque.shift();
      }

      // Maintain monotonic property for the new element at index i
      while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
        deque.pop();
      }
      deque.push(i);
    }
    // The front of deque is the maximum of the last window
    result.push(nums[deque[0]]);

    return result;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const solver = new Solution();

// const max = solver.slidingWindowMaximumBruteForce(nums, k);
// const max = solver.slidingWindowMaximumNaive(nums, k);
const max = solver.slidingWindowMaximum(nums, k);

console.log(`Maximum elements in sliding window are:`, max);
