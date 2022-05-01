// leetcode 42. Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let trapRainwater = (arr) => {
	let ans = [];
	let left = [];
	let right = [];
	left[0] = arr[0];
	for (let idx = 1; idx < arr.length; idx++) {
		left[idx] = Math.max(left[idx - 1], arr[idx]);
	}
	right[arr.length - 1] = arr[arr.length - 1];
	for (let idx = arr.length - 2; idx >= 0; idx--) {
		right[idx] = Math.max(right[idx + 1], arr[idx]);
	}
	for (let idx = 1; idx < arr.length; idx++) {
		ans = Number(ans) + Number(Math.min(left[idx], right[idx]) - arr[idx]);
	}
	return ans;
};
console.log(trapRainwater([3, 1, 2, 4, 0, 1, 3, 2]));
