/*
    Author: Rajkishor Thakur
    Topic: Top K Frequent Elements
    Date: 29 Dec 2025
    1)Approach: Brute Force Approach
     1.Initialize a frequency map to count occurrences of each element
     2.Convert the frequency map to an array of [element, frequency] pairs
     3.Sort the array in descending order based on frequency
     4.Extract the first k elements from the sorted array as the result
     5.Return the result array
     
    Time Complexity: O(n log n)
    Space Complexity: O(n)

    2)Approach: Hash Map Approach
     1.Initialize a frequency map to count occurrences of each element
     2.Initialize a bucket array where index represents frequency and each element is a set of numbers with that frequency
     3.Populate the frequency map by iterating through the input array
     4.Populate the bucket array using the frequency map
     5.Iterate through the bucket array in reverse order to collect the top k frequent elements
     6.Return the result array containing the top k frequent elements

    Time Complexity: O(n)
    Space Complexity: O(n)

*/

class Solution {
  // Brute Force Hash Map Approach
  topKFrequentBruteForce = function (nums, k) {
    let freqMap = new Map();

    for (let num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let freqArray = Array.from(freqMap.entries());
    freqArray.sort((a, b) => b[1] - a[1]);

    let result = [];
    for (let i = 0; i < k; i++) {
      result.push(freqArray[i][0]);
    }
    return result;
  };
  // Hash map Bucket Approach
  topKFrequent = function (nums, k) {
    let map = {};
    let bucket = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      if (!map[nums[i]]) {
        map[nums[i]] = 1;
      } else {
        map[nums[i]]++;
      }
    }

    for (let [num, freq] of Object.entries(map)) {
      if (!bucket[freq]) {
        bucket[freq] = new Set();
      }
      bucket[freq].add(Number(num));
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
      if (bucket[i]) result.push(...bucket[i]);
      if (result.length >= k) break;
    }
    return result.slice(0, k);
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;

const solver = new Solution();

const topKFrequent = solver.topKFrequent(nums, k);

console.log(`Top K Frequent Elements:`, topKFrequent);
