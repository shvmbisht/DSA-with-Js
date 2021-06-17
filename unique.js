let array = [1, 2, 3, 1, 8, 4, 9, 3, 4, 5, 6, 7, 8, 9];
function getUniqueValArr(arr) {
	return [...new Set(arr)];
}
console.log(getUniqueValArr(array));
