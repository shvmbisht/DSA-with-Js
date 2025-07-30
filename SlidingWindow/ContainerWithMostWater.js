// Given an integer input array heights representing the heights of vertical lines, write a function that returns the maximum area of water that can be contained by two of the lines (and the x-axis). The function should take in an array of integers and return an integer.
// heights = [3,4,1,2,2,4,1,3,2]
// output = 21

function maxArea(heights) {
    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;
    while (left < right) {
        const height = Math.min(heights[left], heights[right]);
        const width = right - left;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}