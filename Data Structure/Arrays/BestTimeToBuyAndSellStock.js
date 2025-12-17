/*
    Author: Rajkishor Thakur
    Topic: Best Time to Buy and Sell Stock
    Date: 17 Dec 2025
    1)Approach: Brute Force Approach
     1. Check all pairs of prices to calculate profit
     2. Keep track of maximum profit found
     3. Return maximum profit
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    2)Approach: Optimized Single Pass Approach
     1. Track the minimum price seen so far
     2. For each price, calculate potential profit
     3. Update maximum profit if current profit is higher
     4. Return maximum profit
    Time Complexity: O(n)
    Space Complexity: O(1) 
    
*/

class Solution {
  // Brute Force Approach
  maxProfitBruteForce = function (prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
      }
    }
    return maxProfit;
  };

  maxProfit = function (prices) {
    let maxProfit = 0;
    let currMin = prices[0];
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        maxProfit = Math.max(maxProfit, prices[i] - prices[currMin]);
      }
      currMin = Math.min(currMin, prices[i]);
    }
    return maxProfit;
  };
}

/* ================== MAIN / DRIVER CODE ================== */

const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 6, 4, 3, 1];

const solver = new Solution();

// const maxProfit = solver.maxProfitBruteForce(prices);
const maxProfit = solver.maxProfit(prices);

console.log(`Max Profit:`, maxProfit);
