/*
    Author: Rajkishor Thakur
    Topic: Length of last word
    Date: 20 Dec 2025
    1)Approach: Brute Force Approach
        1. Trim the string to remove leading and trailing spaces
        2. Split the string by spaces to get an array of words
        3. Return the length of the last word in the array
    Time Complexity: O(n)
    Space Complexity: O(n)

    2)Approach: Pointer Approach
     1. Initialize a counter to 0 and a pointer at the end of the string
     2. Move the pointer backwards, skipping any trailing spaces
     3. Count the characters of the last word until a space is encountered
     4. Return the count
    Time Complexity: O(n)
    Space Complexity: O(1)
*/

class Solution {
  // Brute Force Approach
  lengthOfLastWordBruteForce = function (s) {
    let string = s.trim().split(" ");
    string = string[string.length - 1];
    return string.length;
  };
  // Pointer Appraoch
  lengthOfLastWord = function (s) {
    let count = 0;
    let i = s.length - 1;
    while (i >= 0) {
      if (s[i] == " " && count > 0) {
        return count;
      } else if (s[i] != " ") {
        count++;
      }
      i--;
    }
    return count;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

// const s = "   fly me   to   the moon  ";
const s = "luffy is still joyboy";

const solver = new Solution();
// const length = solver.lengthOfLastWordBruteForce(s);
const length = solver.lengthOfLastWord(s);

console.log(`Length of last word in "${s}" is:`, length);
