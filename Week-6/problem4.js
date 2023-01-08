// Problem 6.4 : Best time to buy and sell stock
function maxProfit(prices, n) {
  let buy = prices[0], max_profit = 0;
  for (let i = 1; i < n; i++) {
    // Checking for lower buy value
    if (buy > prices[i]) {
        buy = prices[i];
    }    
    // Checking for higher profit
    else if (prices[i] - buy > max_profit) {
        max_profit = prices[i] - buy;
    }
  }
  return max_profit;
}

let prices = [0.5,7, 1, 5, 6, 4];
let max_profit = maxProfit(prices, prices.length);
console.log(max_profit);
