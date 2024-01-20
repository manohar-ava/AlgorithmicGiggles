function numIdenticalPairs(nums: number[]): number {
  let map = {} as number;
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] ?? 0) + 1;
  }
  return Object.values(map).reduce(
    (acc: number, v: number) => (acc += Math.floor((v * (v - 1)) / 2)),
    0 as number,
  );
}
function numJewelsInStones(jewels: string, stones: string): number {
  let noOfJewels: number = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      noOfJewels++;
    }
  }
  return noOfJewels;
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numJewelsInStones("aA", "aAAbbbbb"));
