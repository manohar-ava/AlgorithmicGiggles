type item = {
  v: number;
  min: number;
};
class MinStack {
  stk: item[];
  min: number;
  constructor() {
    this.stk = [];
    this.min = Infinity;
  }

  push(val: number): void {
    this.stk.push({ v: val, min: this.min });
    this.min = Math.min(this.min, val);
  }

  pop(): void {
    const removed = this.stk.pop();
    this.min = removed.min;
  }

  top(): number {
    return this.stk[this.stk.length - 1]?.v;
  }

  getMin(): number {
    return this.min;
  }
}

let ms = new MinStack();
ms.push(1);
ms.push(2);
ms.push(0);
console.log(ms.getMin());
ms.pop();
ms.pop();
console.log(ms.getMin());
