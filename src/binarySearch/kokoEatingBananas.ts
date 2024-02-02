function minEatingSpeed(piles: number[], h: number): number {
  let min: number = Infinity;
  let l: number = 1;
  let r: number = Math.max(...piles);
  let mid: number;
  while (r >= l) {
    mid = Math.floor((l + r) / 2);
    let res: number = piles.reduce((acc, v) => (acc += Math.ceil(v / mid)), 0);
    if (res <= h) {
      min = Math.min(min,mid);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return min;
}
console.log(minEatingSpeed([3, 6, 7, 11], 8));
