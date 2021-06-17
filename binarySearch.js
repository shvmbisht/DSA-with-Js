let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function binarySearch(arr, elem) {
	let start = 0;
	let end = arr.length - 1;
	let mid = Math.floor((start + end) / 2);

	while (arr[mid] !== elem && start <= end) {
		console.log(start, mid, end);
		if (elem < arr[mid]) {
			end = mid - 1;
		}
		if (elem > arr[mid]) {
			start = mid + 1;
		}
		mid = Math.floor((start + end) / 2);
	}
	if (arr[mid] === elem) return mid;
	else retun - 1;
}
console.log(binarySearch(array, 3));
