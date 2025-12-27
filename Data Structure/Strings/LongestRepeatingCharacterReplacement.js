/*
    Author: Rajkishor Thakur
    Topic: Longest Repeating Character Replacement
    Date: 27 Dec 2025
    1)Approach: Brute Force Approach
     1.Initialize max to track the maximum length of valid substring
     2.Iterate throught the string using i as starting index
     3.For each starting index, initialize a maxfrequency = 0 and count map to track character frequencies
     4.Iterate thourgh the string using j = i to end of string
        a.Update the count frequency map with character at j
        b.Update the maxfrequency with the maximum frequency of any character in the current window
        c.Calculate the window length as j - i + 1
        d.If the number of characters to change (window length - maxfrequency) is less than or equal to k, update max
        e.Else break the inner loop as further extension will also be invalid
     5.Return the maximum length found
    Time Complexity: O(n^2)
    Space Complexity: O(m) => O(1) where m is the size of character set from a-z

    2)Approach: Sliding Window Approach
     1.Initialize max to track the maximum length of valid substring
     2.Initialize a frequency map to count occurrences of characters in the current window
     3.Use two pointers, left and right, to represent the sliding window
     4.Iterate through the string with the right pointer
        a.Calculate the window length as right - left + 1
        b.Update the frequency map with the character at the right pointer
        c.Determine the maximum frequency of any character in the current window with a helper function
        d.If the number of characters to change (window length - max frequency) is less than or equal to k, update max
        e.Otherwise, shrink the window from the left by updating the frequency map and moving the left pointer
     5.Return the maximum length found
    Time Complexity: O(n)
    Space Complexity: O(m) => O(1) where m is the size of character set from a-z  

*/

class Solution {
  // Brute Force Approach
  characterReplacementBruteForce = function (s, k) {
    let max = 0;

    for (let i = 0; i < s.length; i++) {
      let count = new Map();
      let maxFreq = 0;

      for (let j = i; j < s.length; j++) {
        count.set(s[j], (count.get(s[j]) || 0) + 1);
        maxFreq = Math.max(maxFreq, count.get(s[j]));

        let windowLen = j - i + 1;
        if (windowLen - maxFreq <= k) {
          max = Math.max(max, windowLen);
        } else {
          break;
        }
      }
    }
    return max;
  };

  // Sliding Window Approach
  getMaxFreq = function (map) {
    let max = -Infinity;
    for (let [key, val] of map) {
      max = Math.max(max, val);
    }
    return max;
  };
  characterReplacement = function (s, k) {
    let max = -Infinity;
    let count = new Map();
    let maxFreq,
      winLen,
      left = 0,
      right = 0;
    while (right < s.length) {
      winLen = right - left + 1;
      count.set(s[right], (count.get(s[right]) || 0) + 1);
      maxFreq = this.getMaxFreq(count);
      if (winLen - maxFreq <= k) {
        max = Math.max(max, winLen);
      } else {
        if (count.get(s[left] === 1)) {
          count.delete(s[left]);
        } else {
          count.set(s[left], count.get(s[left]) - 1);
        }
        left++;
      }
      right++;
    }
    return max;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const s = "ABAB";
const k = 2;
// const s = "AABABBA";
// const k = 1;

const solver = new Solution();

// const length = solver.characterReplacementBruteForce(s, k);
const length = solver.characterReplacement(s, k);

console.log(`Longest Repeating Character Replacement:`, length);
