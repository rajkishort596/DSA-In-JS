/*
    Author: Rajkishor Thakur
    Topic: Valid Palindrome
    Date: 19 Dec 2025
    1)Approach: Brute Force Approach
     1. Normalize the string by removing non-alphanumeric characters and converting to lowercase
     2. Reverse the normalized string
     3. Compare the normalized string with the reversed string
     4. Return true if they are the same, otherwise false
    Time Complexity: O(n)
    Space Complexity: O(n)

    2)Approach: Two Pointers Approach
     1. Initialize two pointers, one at the start and one at the end of the string
     2. Move the pointers towards each other, skipping non-alphanumeric characters
     3. Compare characters at both pointers (case insensitive)
     4. If characters do not match, return false
     5. If pointers cross each other, return true
    Time Complexity: O(n)
    Space Complexity: O(1)
*/

class Solution {
  // Brute Force Approach
  isPalindromeBruteForce = function (s) {
    let string = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
    let reverseString = string.split("").reverse().join("");
    return string === reverseString;
  };

  // Two Pointers Approach
  isPalindrom = function (s) {
    function isAlphaNumeric(c) {
      const code = c.charCodeAt(0);
      return (
        (code >= 48 && code <= 57) || // numeric (0-9)
        (code >= 65 && code <= 90) || // upper alpha (A-Z)
        (code >= 97 && code <= 122) // lower alpha (a-z)
      );
    }

    let l = 0;
    let r = s.length - 1;
    while (l < r) {
      if (!isAlphaNumeric(s[l])) {
        l++;
        continue;
      }
      if (!isAlphaNumeric(s[r])) {
        r--;
        continue;
      }
      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }
    return true;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const s = "A man, a plan, a canal: Panama";
// const s = "race a car";

const solver = new Solution();
// const isPalindrome = solver.isPalindromeBruteForce(s);
const isPalindrome = solver.isPalindrom(s);

console.log(`Is "${s}" a palindrome?`, isPalindrome);
