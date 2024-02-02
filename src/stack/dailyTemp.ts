function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let res: number[] = Array.from(nums1);
  let stk: number[] = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    let l = stk.length - 1;
    let val = -1;
    while (l >= 0) {
      let top = stk[l];
      if (top > nums2[i]) {
        val = top;
        break;
      }
      stk.pop();
      l--;
    }
    let idx = nums1.findIndex((x) => x === nums2[i]);
    if (idx != -1) {
      res[idx] = val;
    }
    stk.push(nums2[i]);
  }
  return res;
}

function dailyTemperatures(temperatures: number[]): number[] {
  let stk: number[] = [];
  const len: number = temperatures.length;
  let res: number[] = Array.from(temperatures);
  for (let i = len - 1; i >= 0; --i) {
    while (stk.length && temperatures[i] > temperatures[stk[stk.length - 1]]) {
      stk.pop();
    }
    res[i] = stk.length ? stk[stk.length - 1] - i : 0;
    stk.push(i);
  }
  return res;
}
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
