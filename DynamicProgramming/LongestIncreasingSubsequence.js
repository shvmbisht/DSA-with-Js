// Write a function to find the length of the longest increasing subsequence in an array using
function longestIncreasingSubsequence(arr) {
	if (arr.length === 0) return 0;

	// Initialize an array to store the length of longest increasing subsequence ending at each index
	let dp = new Array(arr.length).fill(1);

	// Iterate over the array
	for (let i = 1; i < arr.length; i++) {
		// Check all previous elements to see if arr[i] can be appended to form an increasing subsequence
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
				// We update dp[i] to be the maximum of its current value and dp[j] + 1, where dp[j] represents the length of the longest increasing subsequence ending at index j plus one for adding the current element arr[i].
			}
		}
	}

	// Find the maximum value in dp, which represents the length of longest increasing subsequence
	return Math.max(...dp);
}

// Example usage:
const arr = [10, 22, 9, 33, 21, 50, 41, 60];
console.log(longestIncreasingSubsequence(arr)); // Output: 5 (for the sequence [10, 22, 33, 50, 60])
