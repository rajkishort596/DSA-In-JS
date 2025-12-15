/*
    Author: Rajkishor Thakur
    Topic: Valid Anagram
    Date: 15 Dec 2025
    1)Approach: Hash Map Approach
      1. Check if lengths of both strings are equal
      2. Use a hash map to count frequency of each character in first string
      3. Decrease the count for each character found in second string
      4. Finally, check if all counts are zero
    Time Complexity: O(n)
    Space Complexity: O(n)

    2)Approach: Brute Force Approach
      1. Check if lengths of both strings are equal
      2. For each character in first string, search for it in second string
      3. If found, mark that character in second string as used
      4. If any character is not found, return false
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/

class Solution {
  // Hash Map Appraoch
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
  // Brute Force Approach
  isAnagramBruteForce = function (s, t) {
    if (s.length != t.length) return false;

    s = s.toLowerCase();
    t = t.toLowerCase().split("");

    for (let i = 0; i < s.length; i++) {
      let found = false;
      for (let j = 0; j < t.length; j++) {
        if (t[j] != "*" && s.charAt(i) === t[j]) {
          found = true;
          t[j] = "*";
          break;
        }
      }
      if (!found) return false;
    }
    return true;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

// const s = "anagram";
// const t = "nagaram";
const s = "cat";
const t = "rat";

const solver = new Solution();
const isAnagram = solver.isAnagram(s, t);
// const isAnagram = solver.isAnagramBruteForce(s, t);

console.log(`Are "${s}" and "${t}" anagrams?`, isAnagram);
