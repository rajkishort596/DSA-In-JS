/*
    Author: Rajkishor Thakur
    Topic: Permutaion in String
    Date: 26 Dec 2025
     
    1)Approach: Sliding Window Approach
     1.Initialize frequency array freq for s1
     2.For each character in s1, increment its count in freq
     3.Set windSize to length of s1
     4.Iterate through s2 with a window of size windSize 
        a. For each window, initialize windFreq array
        b. Count frequency of characters in the current window
        c. Compare windFreq with freq, if they match return true
     5.If no matching window found, return false
    Time Complexity: O((M-N+1)*N) => O(M*N) where N is length of s1 and M is length of s2
    Space Complexity: O(1) (constant space for frequency arrays)
    
*/

class Solution {
  // Sliding Window Approach
  isFreqSame = function (freq, windFreq) {
    for (let i = 0; i < 26; i++) {
      if (freq[i] !== windFreq[i]) return false;
    }
    return true;
  };

  checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    let freq = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
      freq[s1.charCodeAt(i) - 97]++;
    }

    let windSize = s1.length;

    for (let i = 0; i <= s2.length - windSize; i++) {
      let windFreq = new Array(26).fill(0);
      let idx = i;

      for (let j = 0; j < windSize; j++) {
        windFreq[s2.charCodeAt(idx) - 97]++;
        idx++;
      }

      if (this.isFreqSame(freq, windFreq)) return true;
    }

    return false;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

// const s1 = "ab",
//   s2 = "eidbaooo";
const s1 = "ab",
  s2 = "eidboaoo";

const solver = new Solution();

const result = solver.checkInclusionBruteForce(s1, s2);
// const result = solver.checkInclusion(s1, s2);

console.log(`Does Substring of s2 contains s1 permutaion?`, result);
