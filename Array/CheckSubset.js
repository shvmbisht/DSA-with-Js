// Check an array is a subset of another array

const isArraySubset = (arr1, arr2) => {
	let isSubset = true;
	const hash = {};
	for (const element in arr1) {
		if (hash.hasOwnProperty(arr1[element])) {
			hash[arr1[element]] += 1;
		} else {
			hash[arr1[element]] = 1;
		}
	}

	// NOW CHECK IF ALL ELEMENTS IN ARR2 ARE PRESENT IN HASH CREATED

	for (const elem in arr2) {
		if (!hash.hasOwnProperty(arr2[elem])) {
			isSubset = false;
			break;
		}
	}
	return isSubset;
};
const arr1 = [2, 8, 12, 6, 10, 11];
const arr2 = [8, 2, 6, 11];
console.log(isArraySubset(arr1, arr2));
