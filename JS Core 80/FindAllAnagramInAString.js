/*
    Author: Rajkishor Thakur
    Topic: Find All Anagram In A String
    Date: 26 Dec 2025
     1)Approach: Brute Force Sliding Window Approach
      1.Initialize an empty result array res
      2.Set left and right pointers to define a sliding window of size equal to p's length
      3.Iterate through s with the sliding window
        a. Extract the substring from s using left and right pointers
        b. Check if the substring is an anagram of p using a helper function isAnagram
        c. If it is an anagram, add the left pointer index to res
        d. Move the sliding window by incrementing left and right pointers
      4.Return the result array res containing starting indices of anagrams
    Time Complexity: O(n*m) where n is length of s and m is length of p
    Space Complexity: O(n)

    2)Approach: Optimized Sliding Window Approach
     1.Initialize two frequency maps: pCount for p and sCount for the current window in s
     2.Populate pCount and sCount with character frequencies from p and the first window of s
     3.Initialize left and right pointers for the sliding window
     4.Iterate through s using the sliding window:
        a. Compare pCount and sCount, if they are equal, add left index to result
        b. Delete the leftmost character from sCount if its count is 1, otherwise decrement its count
        c. Slide the window by incrementing left and right pointers
        d. Add the new rightmost character to sCount if within bounds
     5.Return the result array containing starting indices of anagrams
    Time Complexity: O(n)
    Space Complexity: O(1) (since the character set is fixed)
*/

class Solution {
  // Brute Force Approach
  isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    s = s.toLowerCase();
    t = t.toLowerCase();

    let map = new Map();

    for (let c of s) {
      if (!map.has(c)) map.set(c, 1);
      else {
        let count = map.get(c);
        map.set(c, ++count);
      }
    }

    for (let c of t) {
      if (map.has(c)) {
        let count = map.get(c);
        map.set(c, --count);
      }
    }

    for (let count of map.values()) {
      if (count != 0) return false;
    }
    return true;
  };

  findAnagramsBruteForce = function (s, p) {
    let res = [];
    let left = 0;
    let right = p.length - 1;
    while (right < s.length) {
      let substring = s.slice(left, right + 1);
      if (this.isAnagram(p, substring)) {
        res.push(left);
      }
      left++;
      right++;
    }
    return res;
  };

  //Optimized Sliding Window Approach
  areMapsEqual = function (map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
      if (map2.get(key) !== val) return false;
    }
    return true;
  };

  findAnagrams = function (s, p) {
    if (s.length < p.length) return [];

    let pCount = new Map();
    let sCount = new Map();
    let res = [];

    // Initialize maps for the first window
    for (let i = 0; i < p.length; i++) {
      pCount.set(p[i], (pCount.get(p[i]) || 0) + 1);
      sCount.set(s[i], (sCount.get(s[i]) || 0) + 1);
    }

    let left = 0;
    let right = p.length - 1;

    while (right < s.length) {
      // 1. Check if current window is an anagram
      if (this.areMapsEqual(pCount, sCount)) {
        res.push(left);
      }

      // 2. Prepare to slide: Remove leftmost character from sCount
      if (sCount.get(s[left]) === 1) {
        sCount.delete(s[left]);
      } else {
        sCount.set(s[left], sCount.get(s[left]) - 1);
      }

      // 3. Slide the window
      left++;
      right++;

      // 4. Add the new rightmost character to sCount
      if (right < s.length) {
        sCount.set(s[right], (sCount.get(s[right]) || 0) + 1);
      }
    }

    return res;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

// const s = "cbaebabacd";
// const p = "abc";
const s = "abab";
const p = "ab";

const solver = new Solution();
const output = solver.findAnagramsBruteForce(s, p);
// const output = solver.findAnagrams(s, p);

console.log(`Start Index of p's anagram in s: `, output);
