//TODO works but optimize this
function characterReplacement(s: string, k: number): number {
  let max: number = 0;
  let map: Map<string, number> = new Map();
  let windowStart: number = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    map.set(s[windowEnd], (map.get(s[windowEnd]) ?? 0) + 1);
    if (rem(map) <= k) {
      max = Math.max(max, windowEnd - windowStart + 1);
    } else if (rem(map) > k) {
      while (rem(map) > k) {
        let v = map.get(s[windowStart]) - 1;
        if (v === 0) map.delete(s[windowStart]);
        else map.set(s[windowStart], v);
        windowStart++;
      }
    }
  }
  function rem(map: Map<string, number>): number {
    let curMax = 0;
    let sum = 0;
    map.forEach((v) => {
      curMax = Math.max(curMax, v);
      sum += v;
    });
    return sum - curMax;
  }

  return max;
}
console.log(characterReplacement("ABABC", 2));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("AAAA", 2));
console.log(characterReplacement("ABAA", 0));
