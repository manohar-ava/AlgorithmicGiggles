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
function twoSum(nums: number[], target: number): number[] {
  let map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (map.has(val)) {
      return [map.get(val), i];
    } else {
      map.set(target - val, i);
    }
  }
  return [];
}
function groupAnagrams(strs: string[]): string[][] {
  if (strs.length <= 1) return [[strs[0]]];
  let map: Map<string, string[]> = new Map();
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, [strs[i]]);
    } else {
      map.set(key, [...(map.get(key) || []), strs[i]]);
    }
  }
  return Array.from(map.values());
}
// console.log(concatenate([1, 2, 1]));
// console.log(buildArrFromPerm([0, 2, 1, 5, 3, 4]));
// console.log(prefixOr([5, 2, 0, 3, 1]));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
