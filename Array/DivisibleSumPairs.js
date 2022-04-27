// Given an array of integers and a positive integer , determine the number of (i,j) pairs where i<j and  arr[i] + arr[j] is divisible by k.

function divisibleSumPairs(k, arr) {
	let res = [];
	let sum = 0;
	let j = 0;
	let i = 0;
	for (i = 1; i < arr.length; i++) {
		sum = arr[j] + arr[i];
		res.push(sum);
		if (i == arr.length - 1 && j <= arr.length - 2) {
			i = j + 1;
			j++;
		}
	}
	var count = 0;
	for (let i in res) {
		if (res[i] % k == 0) count++;
	}
	return count;
}

console.log(divisibleSumPairs(3, [1, 3, 2, 6, 1, 2]));
