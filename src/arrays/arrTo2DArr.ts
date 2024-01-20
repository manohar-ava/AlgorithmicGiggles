function findMatrix(nums: number[]): number[][] {
  let rem: number[][] = [];
  let numCount = {};
  for (let i = 0; i < nums.length; i++) {
    numCount[nums[i]] = (numCount[nums[i]] ?? 0) + 1;
  }
  let keys: string[] = Object.keys(numCount);
  while (keys.length) {
    let temp: number[] = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      temp.push(parseInt(key));
      numCount[key]--;
      if (numCount[key] == 0) {
        delete numCount[keys[i]];
      }
    }
    keys = Object.keys(numCount);
    rem.push(temp);
  }
  return rem;
}

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
