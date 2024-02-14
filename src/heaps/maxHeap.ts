//rearrage
//if leaf
//i >l && i>r
class MaxHeap<T> {
  heap: T[];
  constructor(val) {
    this.heap = val;
  }
  heapify(i: number = 0) {
    if (i >= Math.floor(this.heap.length / 2)) return;
    const cur: T = this.heap[i];
    const rightIdx = 2 * i + 2;
    const leftIdx = 2 * i + 1;
    const leftVal: T = this.heap[leftIdx] || Number.MIN_SAFE_INTEGER;
    const rightVal: T = this.heap[rightIdx] || Number.MIN_SAFE_INTEGER;
    if (cur > leftVal && cur > rightVal) return;
    const max: T = Math.max(cur, leftVal, rightVal);
    const nextIdx = max == leftVal ? leftIdx : rightIdx;
    let temp = this.heap[i];
    this.heap[i] = this.heap[nextIdx];
    this.heap[nextIdx] = temp;
    this.heapify(nextIdx);
  }
  build() {
    const len = Math.floor(this.heap.length / 2) - 1;
    for (let i = len; i >= 0; --i) {
      this.heapify(i);
    }
  }
  extractMax() {
    if (this.heap.length == 0) return null;
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.splice(this.heap.length - 1, 1);
    this.heapify();
    return max;
  }
  increaseKey(index: number, value: T) {
    if (this.heap.length == 0 || value < this.heap[index]) return;
    this.heap[index] = value;
    let parentIdx = Math.floor(index / 2);
    while (index > 0 && this.heap[parentIdx] < this.heap[index]) {
      const temp = this.heap[parentIdx];
      this.heap[parentIdx] = this.heap[index];
      this.heap[index] = temp;
      index = parentIdx;
      parentIdx = Math.floor(index / 2);
    }
  }
  decreaseKey(index: number, value: T) {
    if (this.heap.length == 0 || value > this.heap[index]) return;
    this.heap[index] = value;
    this.heapify(index);
  }
  insert(value: T) {
    this.heap.push(value);
    let index = this.heap.length - 1;
    let parentIdx = Math.floor(index / 2);
    while (index > 0 && this.heap[parentIdx] < this.heap[index]) {
      const temp = this.heap[parentIdx];
      this.heap[parentIdx] = this.heap[index];
      this.heap[index] = temp;
      index = parentIdx;
      parentIdx = Math.floor(index / 2);
    }
  }
}
const l = new MaxHeap([8, 7, 9, 1, 5, 6, 3]);
l.build();
console.log(l.heap);
console.log(l.extractMax(), "extractMax");
console.log(l.heap);
l.increaseKey(5, 50);
console.log(l.heap, "increaseKey");
l.decreaseKey(0, 3);
console.log(l.heap, "decreasekey");
l.insert(9);
console.log(l.heap,"insert")

