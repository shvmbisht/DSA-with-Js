function reverseArray(arr, start, end) {
	while (start < end) {
		temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
	return arr;
}
