// Problem 6.4 : Best time to buy and sell stock
function maxProfit(prices) {
  let buy = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    // Checking for lower buy value
    if (buy > prices[i]) {
      buy = prices[i];
    }
    // Checking for higher profit
    else if (prices[i] - buy > maxProfit) {
      maxProfit = prices[i] - buy;
    }
  }
  return maxProfit;
}

let prices = [0.5, 7, 1, 5, 6, 4];
let maxProfit = maxProfit(prices);
console.log(maxProfit);
