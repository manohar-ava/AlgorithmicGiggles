function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) return 1;
  let set: Set<string> = new Set();
  let l: number = 0;
  let r: number = 0;
  let max: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      while (true) {
        console.log(s[l]);
        set.delete(s[l]);
        l++;
        if (s[l - 1] == s[i]) {
          set.add(s[i]);
          break;
        }
      }
    } else {
      set.add(s[i]);
      r++;
      max = Math.max(max, set.size);
    }
  }
  return max;
}
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("au"));
// console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aabaab!bb"));
