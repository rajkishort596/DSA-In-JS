/*
    Author: Rajkishor Thakur
    Topic: Reverse Stirng
    Date: 15 Dec 2025
    1) Approach: Two Pointer Approach
      1. Start and end pointers begin at opposite ends   
      2. Swap chars at start and end pointers using a temp variable
      3. Move pointers towards each other until they meet
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    2) Approach: Brute Force Approach
      1. Create a new array to hold reversed characters
      2. Iterate original array from end to start, filling new array
      3. Copy reversed array back to original array
    Time Complexity: O(n)
    Space Complexity: O(n)
*/

class Solution {
  // Two Pointer Approach
  reverseString = function (s) {
    let start = 0;
    let end = s.length - 1;
    let temp;

    while (start < end) {
      temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start++;
      end--;
    }
  };
  // Brute Force Approach
  reverseStringBruteForce = function (s) {
    const n = s.length;
    const reversed = new Array(n);

    for (let i = 0; i < n; i++) {
      reversed[i] = s[n - 1 - i];
    }
    for (let i = 0; i < n; i++) {
      s[i] = reversed[i];
    }
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const s = ["H", "a", "n", "n", "a", "h"];

const solver = new Solution();
solver.reverseString(s);
// solver.reverseStringBruteForce(s);

console.log("Reversed String:", s);
