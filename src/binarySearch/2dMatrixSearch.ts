function sreachFunc(
  arr: number[] | number[][],
  target: number,
  fn: any,
): number {
  let idx: number = -1;
  let l: number = 0;
  let r: number = arr.length - 1;
  let m: number;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    const val: number = fn(target, arr[m]);

    if (val == 0) {
      idx = m;
      break;
    } else if (val == 1) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return idx;
}
function searchMatrix(matrix: number[][], target: number): boolean {
  const idx: number = sreachFunc(
    matrix,
    target,
    (target: number, item: number[]) => {
      if (target >= item[0] && target <= item[item.length - 1]) return 0;
      if (target > item[0]) return 1;
      return -1;
    },
  );
  if (idx === -1) return false;
  const newidx: number = sreachFunc(
    matrix[idx],
    target,
    (target: number, item: number) => {
      if (target === item) return 0;
      if (target > item) return 1;
      return -1;
    },
  );
  if(newidx === -1) return false
  return true
}
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    16,
  ),
);
