function search(nums: number[], target: number): number {
  if (nums.length === 1 && nums[0] === target) return 0;
  let left: number = 0;
  let right: number = nums.length - 1;
  let mid: number;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(search([2, 5], 5));
console.log(search([-1, 0, 3, 5, 9, 12], 0));
console.log(search([-1, 0, 3, 5, 9, 12], 9));
