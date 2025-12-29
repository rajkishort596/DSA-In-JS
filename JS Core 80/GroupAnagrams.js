/*
    Author: Rajkishor Thakur
    Topic: Group Anagrams
    Date: 29 Dec 2025
    1)Approach: Brute Force Approach
     1.Initialize a visited array to track processed strings
     2.Initialize a result array to store groups of anagrams
     3.Iterate through the list of strings using index i to strs.length
        a.If the string at index i is already visited, continue to next iteration
        b.Initialize an anagram group with the current string and mark it as visited
        c.Sort the current string to create a reference sorted string
     4.Iterate through the list of strings using index j from i+1 to strs.length
        a.If the string at index j is not visited, sort it and compare with the reference sorted string
        b.If they match, add the string to the anagram group and mark it as visited
     5.Add the anagram group to the result array
     6.Return the result array containing groups of anagrams

    Time Complexity: O(n^2 * m log m) where n is number of strings and m is average length of strings
    Space Complexity: O(n) for visited array and result storage

    2)Approach: Hash Map Approach
     1.Create a sorted version of each string and store in an array
     2.Initialize a hash map to group anagrams
     3.Iterate through the sorted strings
        a.If the sorted string is not in the map, add it with the original string in an array
        b.Else, append the original string to the existing array for that sorted string
     4.Return the values of the hash map as the result array containing groups of anagrams   
     
    Time Complexity: O(n * m log m) where n is number of strings and m is average length of strings
    Space Complexity: O(n * m) for storing the sorted strings and groups  

*/

class Solution {
  // Brute Force Approach
  groupAnagramsBruteForce = function (strs) {
    let visited = new Array(strs.length).fill(false);
    let result = [];

    for (let i = 0; i < strs.length; i++) {
      if (visited[i]) continue;

      let anagramGroup = [strs[i]];
      visited[i] = true;

      let sortedStr1 = strs[i].split("").sort().join("");

      for (let j = i + 1; j < strs.length; j++) {
        if (!visited[j]) {
          let sortedStr2 = strs[j].split("").sort().join("");
          if (sortedStr1 === sortedStr2) {
            anagramGroup.push(strs[j]);
            visited[j] = true;
          }
        }
      }
      result.push(anagramGroup);
    }
    return result;
  };

  // Hash map Approach
  groupAnagrams = function (strs) {
    let sorted = strs.map((str) => str.split("").sort().join(""));
    let map = {};

    for (let i = 0; i < sorted.length; i++) {
      if (!map[sorted[i]]) {
        map[sorted[i]] = [strs[i]];
      } else {
        map[sorted[i]].push(strs[i]);
      }
    }
    return Object.values(map);
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const solver = new Solution();

// const anagrams = solver.groupAnagramsBruteForce(strs);
const anagrams = solver.groupAnagrams(strs);

console.log(`Group Anagrams:`, anagrams);
