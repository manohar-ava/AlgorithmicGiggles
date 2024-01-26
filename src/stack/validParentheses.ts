function isValid(s: string): boolean {
  let validPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack: string[] = [];
  for (const x of s) {
    if (validPairs[x]) {
      const item = stack.pop();
      if (item !== validPairs[x]) {
        return false;
      }
    } else {
      stack.push(x);
    }
  }
  return true;
}
console.log(isValid("["));
