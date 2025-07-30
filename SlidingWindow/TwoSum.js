// Given a sorted array of integers nums, determine if there exists a pair of numbers that sum to a given target.
// Example:
// Input: nums = [1,3,4,6,8,10,13], target = 13
// Output: True (3 + 10 = 13)
// Input: nums = [1,3,4,6,8,10,13], target = 6
// Output: False

function twoSum(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        const currentSum = nums[left] + nums[right];
        if (currentSum === target) {
            return true;
        }

        if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return false;
}