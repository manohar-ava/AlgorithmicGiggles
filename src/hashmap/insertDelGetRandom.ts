class RandomizedSet {
  map: Map<number, number>;
  arr: number[];
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;
    const idx: number = this.map.get(val);
    const lastIdx = this.arr.length - 1;
    const lastVal = this.arr[lastIdx];
    [this.arr[idx], this.arr[lastIdx]] = [this.arr[lastIdx], this.arr[idx]];
    this.map.set(lastVal, idx);
    this.arr.pop();
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }
}

var obj = new RandomizedSet();
console.log(obj.insert(0));
console.log(obj.insert(1));
console.log(obj.remove(0));
console.log(obj.insert(2));
console.log(obj.remove(1));
console.log(obj.getRandom());
