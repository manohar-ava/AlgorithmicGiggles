function twoSum(numbers: number[], target: number): number[] {
  let map: Map<number, number> = new Map();
  let res: number[] = [];
  for (let i = 0; i < numbers.length; ++i) {
    let val: number = target - numbers[i];
    if (map.has(numbers[i])) {
      res = [map.get(numbers[i]), i + 1];
    }
    map.set(val, i + 1);
    if (res.length == 2) break;
  }
  return res;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
