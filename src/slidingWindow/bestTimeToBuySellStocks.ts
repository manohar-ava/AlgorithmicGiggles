function maxProfit(prices: number[]): number {
  let max = Number.MIN_SAFE_INTEGER;
  let buy = Number.MAX_SAFE_INTEGER;
  let sell = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    buy = Math.min(prices[i], buy);
    if (buy === prices[i]) {
      sell = prices[i];
    } else {
      sell = Math.max(prices[i], sell);
    }
    max = Math.max(max, sell - buy);
  }
  return max;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
