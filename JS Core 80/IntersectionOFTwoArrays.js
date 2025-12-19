/*
    Author: Rajkishor Thakur
    Topic: Intersection of Two Arrays
    Date: 19 Dec 2025
    1)Approach: Brute Force Approach
     1. Initialize an empty intersection array
     2. Check all pairs of numbers from both arrays
     3. If a common number is found and not already in the result, add it
     4. Return the result array
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    2)Approach: HashSet Approach
     1. Initialize an empty intersection array
     2. Create sets from both arrays to remove duplicates
     3. Iterate through one set and check for existence in the other set
     4. If found, add to the intersection array
     5. Return the intersection array
    Time Complexity: O(n)
    Space Complexity: O(n)
*/

class Solution {
  // Brute Force Approach
  intersectionBruteForce = function (A, B) {
    let intersection = [];
    for (const a of A) {
      for (const b of B) {
        if (a === b && !intersection.includes(a)) intersection.push(a);
      }
    }
    return intersection;
  };
  // HashSet Approach
  intersection = function (A, B) {
    let Intersection = [];
    let S = new Set(A);
    let T = new Set(B);

    for (let num of S) {
      if (T.has(num)) Intersection.push(num);
    }

    return Intersection;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const A = [4, 9, 5];
const B = [9, 4, 9, 8, 4];

const solver = new Solution();

const intersection = solver.intersectionBruteForce(A, B);

console.log(`Intersection:`, intersection);
