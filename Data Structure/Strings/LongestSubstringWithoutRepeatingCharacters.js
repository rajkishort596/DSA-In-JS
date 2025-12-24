/*
    Author: Rajkishor Thakur
    Topic: Longest Substring Without Repeating Characters
    Date: 24 Dec 2025
    1)Approach: Brute Force Approach
     1.Initialize maxlength to 0 and substring variable
     2.Use two nested loops to generate all possible substrings
     3.For each substring, check if it has all unique characters
     4.If valid, update maxlength if substring length is greater
     5.Return maxlength after checking all substrings 
    Time Complexity: O(n^3)
    Space Complexity: O(n)

    2)Approach: Sliding Window Approach
     1.Initialize a Set to store unique characters, and two pointers (left and right) at start
     2.Traverse the string with the right pointer
     3.If character at right pointer is not in Set, add it and update maxlength
     4.If character is already in Set, remove character at left pointer and move left pointer right
     5.Repeat until right pointer reaches end of string
     6.Return maxlength
    Time Complexity: O(n)
    Space Complexity: O(n)
*/

class Solution {
  // Brute Force Approach

  isValidSubstring = function (s) {
    s = s.split("").sort();
    for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i - 1]) return false;
    }
    return true;
  };

  lengthOfLongestSubstringBruteForce = function (s) {
    let substring;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        substring = s.slice(i, j);
        if (this.isValidSubstring(substring)) {
          maxLength = Math.max(maxLength, substring.length);
        }
      }
    }

    return maxLength;
  };

  // Sliding Window Approach
  lengthOfLongestSubstring = function (s) {
    let longestStr = 0;
    let set = new Set();

    let left = 0;
    let right = 0;

    while (right < s.length) {
      let letter = s[right];
      if (!set.has(letter)) {
        set.add(letter);
        longestStr = Math.max(longestStr, set.size);
        right++;
      } else {
        set.delete(s[left]);
        left++;
      }
    }
    return longestStr;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

// const s = "abcabcbb";
const s = "pwwkew";
// const s = "bbbbbb";

const solver = new Solution();
// const length = solver.lengthOfLongestSubstringBruteForce(s);
const length = solver.lengthOfLongestSubstring(s);

console.log(`Length of longest substring in "${s}" is:`, length);
