function concatenate(nums: number[]): number[] {
  nums.push(...nums);
  return nums;
}
function buildArrFromPerm(nums: number[]): number[] {
  return nums.map((_, i) => nums[nums[i]]);
}
function prefixOr(nums: number[]): number[] {
  let res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(i == 0 ? nums[i] : nums[i - 1] ^ nums[i]);
  }
  return res;
}
console.log(concatenate([1, 2, 1]));
console.log(buildArrFromPerm([0, 2, 1, 5, 3, 4]));
console.log(prefixOr([5, 2, 0, 3, 1]));
