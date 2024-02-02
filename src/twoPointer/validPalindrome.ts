function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  if (!s.length) return true;
  const mid = Math.floor(s.length / 2);
  let l = s.length % 2 === 0 ? mid - 1 : mid;
  let r = mid;
  while (l >= 0) {
    if (s[l] != s[r]) return false;
    l--;
    r++;
  }
  return true;
}

console.log(isPalindrome("333ix333"));
