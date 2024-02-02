function maxArea(height: number[]): number {
  let max = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    const left = height[l];
    const right = height[r];
    const area = Math.min(left, right) * (r - l);
    max = Math.max(max, area);
    if (left < right) {
      l++;
    } else {
      r--;
    }
  }
  return max;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
