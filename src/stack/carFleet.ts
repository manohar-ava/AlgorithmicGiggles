type item = {
  p: number;
  s: number;
  i: number;
};
function carFleet(target: number, position: number[], speed: number[]): number {
  return position
    .map((x, i) => [x, speed[i]])
    .sort((a, b) => b[0] - a[0])
    .reduce((acc, v) => {
      let vPos: number, vSpeed: number;
      [vPos, vSpeed] = v;
      const top = acc.length ? acc[acc.length - 1] : [];
      let tPos: number, tSpeed: number;
      [tPos, tSpeed] = top;
      if (top.length) {
        const itemTime = (target - vPos) / vSpeed;
        const topTime = (target - tPos) / tSpeed;
        if (itemTime > topTime) {
          acc.push(v);
        }
      } else {
        acc.push(v);
      }
      return acc;
    }, [] as number[][]).length;
}
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(10, [3], [3]));
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
console.log(carFleet(10, [8, 3, 7, 4, 6, 5], [4, 4, 4, 4, 4, 4]));
// console.log(carFleet(10, [6, 8], [3, 2]));
