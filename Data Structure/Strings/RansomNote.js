/*
    Author: Rajkishor Thakur
    Topic: Ransom Note
    Date: 19 Dec 2025
    1)Approach: Brute Force Approach
      1. Convert magazine string to an array of characters
      2. For each character in ransomNote, check if it exists in magazine array
      3. If found, mark that character in magazine array as used (e.g., replace with a '*' character)
      4. If not found, return false
      5. If all characters are found, return true
    Time Complexity: O(n^2)
    Space Complexity: O(n)

    2)Approach: Hash Map Approach
      1. Create a hash map to store the frequency of each character in magazine
      2. For each character in ransomNote, check if it exists in the hash map
      3. If it exists and the count is greater than 0, decrement the count
      4. If it does not exist or the count is 0, return false
      5. If all characters are found, return true
    Time Complexity: O(n)
    Space Complexity: O(n)
*/

class Solution {
  // Brute Force Approach
  ransomNoteBruteForce = function (ransomNote, magazine) {
    magazine = magazine.split("");
    for (let i = 0; i < ransomNote.length; i++) {
      let found = false;
      for (let j = 0; j < magazine.length; j++) {
        if (ransomNote.charAt(i) === magazine[j] && magazine[j] != "*") {
          found = true;
          magazine[j] = "*";
          break;
        }
      }
      if (!found) return false;
    }
    return true;
  };

  // Hash Map Approach
  ransomNote = function (ransomNote, magazine) {
    let map = new Map();

    for (let c of magazine) {
      if (!map.has(c)) map.set(c, 1);
      else {
        let count = map.get(c);
        map.set(c, ++count);
      }
    }
    for (let c of ransomNote) {
      if (map.has(c)) {
        let count = map.get(c);
        if (count === 0) return false;
        map.set(c, --count);
      } else {
        return false;
      }
    }
    return true;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const ransomNote = "aa";
const magazine = "aab";

const solver = new Solution();
// const output = solver.ransomNoteBruteForce(ransomNote, magazine);
const output = solver.ransomNote(ransomNote, magazine);

console.log(`Is "${ransomNote}" a valid ransom note of "${magazine}"?`, output);
