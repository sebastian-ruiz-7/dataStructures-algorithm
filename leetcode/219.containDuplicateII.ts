/**
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
    0 <= k <= 105

 */

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (k === 0) return false;

  const mySet = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) return true;

    mySet.add(nums[i]);
  }

  return false;
}

// console.log(containsNearbyDuplicate([99, 99], 2));
// console.log(containsNearbyDuplicate([99, 99, 1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
