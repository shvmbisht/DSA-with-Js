// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = function (prices) {
	let minSoFar = prices[0];
	let maxProfit = 0;
	for (let price in prices) {
		minSoFar = Math.min(minSoFar, prices[price]);
		maxProfit = Math.max(maxProfit, prices[price] - minSoFar);
	}
	return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
