/*
    Author: Rajkishor Thakur
    Topic: Majority Element
    Date: 20 Dec 2025
    1)Approach: Brute Force Approach
      1. Iterate through each element in the array
      2. For each element, count its occurrences in the array
      3. If the count exceeds n/2, return that element
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    2)Approach: Hash Map Approach
      1. Create a hash map to store the frequency of each element
      2. Iterate through the array and update the frequency count in the hash map
      3. Iterate through the hash map to find the element with frequency greater than n/2
    Time Complexity: O(n)
    Space Complexity: O(n)

    3)Approach: Moore's Voting Algorithm
      1. Initialize a count variable to 0 and a candidate variable to null
      2. Iterate through the array:
        a. If count is 0, set the current element as the candidate
        b. If the current element equals the candidate, increment count
        c. Otherwise, decrement count
      3. Return the candidate
    Time Complexity: O(n)
    Space Complexity: O(1)
*/

class Solution {
  // Brute Force Approach
  majorityElementBruteForce = function (nums) {
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] == nums[j]) count++;
        if (count > nums.length / 2) return nums[i];
      }
    }
  };

  //Hash Map Approach
  majorityElement = function (nums) {
    const map = new Map();

    for (let num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, count] of map) {
      if (count > nums.length / 2) return num;
    }
  };

  // Moore's Voting Algorithm Approach
  majorityElementMooreVoting = function (nums) {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
      if (count === 0) {
        candidate = num;
      }
      count += num === candidate ? 1 : -1;
    }
    return candidate;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const nums = [2, 2, 1, 1, 1, 2, 2];

const solver = new Solution();
// const major = solver.majorityElementBruteForce(nums);
// const major = solver.majorityElement(nums);
const major = solver.majorityElementMooreVoting(nums);

console.log(`Majority element in [${nums}] is:`, major);
