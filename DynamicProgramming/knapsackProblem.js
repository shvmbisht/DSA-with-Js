// 0–1 knapsack problem, we can either include an item in our knapsack or exclude it, but not include a fraction of it, or include it multiple times.
let val = [0, 60, 100, 120];
let wt = [0, 10, 20, 30];
let c = 50;
function KnapsackRecursionNaive(n, c) {
	if (n === 0 || c === 0) {
		return 0;
	} else if (wt[n] > c) {
		// If weight of the nth item is
		// more than Knapsack capacity W,
		// then this item cannot be
		// included in the optimal solution
		return KnapsackSolution(n - 1, c);
	} else {
		let temp1 = KnapsackSolution(n - 1, c);
		let temp2 = val[n] + KnapsackSolution(n - 1, c - wt[n]);
		console.log(n, c, wt[n], val[n]);
		return Math.max(temp1, temp2);
	}
}
let arr = [...Array(val.length - 1)].map((e) => Array(c + 1).fill(undefined));
// Solution with DP memoization (Reducing complexity from 2^n to W * N)
function KnapsackDPSol(n, c) {
	// console.log(n, c);
	if (n != 0 && arr[n - 1][c] != undefined) return arr[n - 1][c];
	if (n === 0 || c === 0) {
		return 0;
	} else if (wt[n] > c) {
		// If weight of the nth item is
		// more than Knapsack capacity W,
		// then this item cannot be
		// included in the optimal solution
		return KnapsackDPSol(n - 1, c);
	} else {
		let temp1 = KnapsackDPSol(n - 1, c);
		let temp2 = val[n] + KnapsackDPSol(n - 1, c - wt[n]);
		console.log(n, c, wt[n], val[n]);
		arr[n - 1][c] = Math.max(temp1, temp2);
		return Math.max(temp1, temp2);
	}
}
console.log(KnapsackDPSol(3, 50));

// STEPS TO SOLVE
// STEP 1: we create a 2-dimensional array (i.e. a table) of n + 1 rows and w + 1 columns.
// A row number i represents the set of all the items from rows 1— i. For instance, the values in row 3 assumes that we only have items 1, 2, and 3.
// A column number j represents the weight capacity of our knapsack. Therefore, the values in column 5, for example, assumes that our knapsack can hold 5 weight units.
// Putting everything together, an entry in row i, column j represents the maximum value that can be obtained with items 1, 2, 3 … i, in a knapsack that can hold j weight units.
// There are 2 options at this point: we can either include item i or not. Therefore, we need to compare the maximum value that we can obtain with and without item i.
// The maximum value that we can obtain without item i can be found at row i-1, column j.

// ⚠️ To calculate the maximum value that we can obtain with item i, we first need to compare the weight of item i with the knapsack’s weight capacity.
// Obviously, if item i weighs more than what the knapsack can hold, we can’t include it, so it does not make sense to perform the calculation.
// In that case, the solution to this problem is simply the maximum value that we can obtain without item i (i.e. the value in the row above, at the same column).

const W = 10,
	N = 4,
	VAL = [10, 40, 30, 50],
	WT = [5, 4, 6, 3];

function KnapSackSolMatrix(W, N, VAL, WT) {
	let matrix = [...Array(N + 1)].map((e) => Array(W + 1).fill(0));
	console.log(matrix);
	for (let item = 1; item <= N; item++) {
		for (let capacity = 1; capacity <= W; capacity++) {
			let maxValWithoutCurr = matrix[item - 1][capacity]; // This is guaranteed to exist
			let maxValWithCurr = 0; // We initialize this value to 0
			let weightOfCurr = WT[item - 1]; // We use item -1 to account for the extra row at the top

			if (capacity >= weightOfCurr) {
				// We check if the knapsack can fit the current item
				maxValWithCurr = VAL[item - 1]; // If so, maxValWithCurr is at least the value of the current item

				let remainingCapacity = capacity - weightOfCurr; // remainingCapacity must be at least 0
				maxValWithCurr += matrix[item - 1][remainingCapacity]; // Add the maximum value obtainable with the remaining capacity
			}
			matrix[item][capacity] = Math.max(maxValWithoutCurr, maxValWithCurr); // Pick the larger of the two
		}
	}
	return matrix;
}
// console.log(KnapSackSolMatrix(W, N, VAL, WT));
