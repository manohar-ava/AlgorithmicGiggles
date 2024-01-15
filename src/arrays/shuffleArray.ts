function shuffle(nums: number[], n: number): number[] {
  let res: number[] = [];
  for (let i = 0; i < nums.length - n; i++) {
    res.push(nums[i]);
    res.push(nums[i + n]);
  }
  return res;
}
console.log(shuffle([1, 1, 2, 2], 2));
