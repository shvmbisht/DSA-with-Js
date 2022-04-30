// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

const maxProfit = function (prices) {
	let profit = 0;
	for (let price in prices) {
		if (prices[price] > prices[price - 1]) {
			profit += prices[price] - prices[price - 1];
		}
	}
	return profit;
};

const prices = [7, 1, 5, 3, 6, 4];
