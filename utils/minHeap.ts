import { Comparable } from "./comparable";

export class MinHeap<T extends Comparable<T>> {
  heap: T[] = [];

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  swap(a: number, b: number) {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }

  siftDown(current: number): void {
    const left = 2 * current + 1;
    if (typeof this.heap[left] === "undefined") return;
    const right = left + 1;
    const smallest =
      this.heap[right] && this.heap[right].compareTo(this.heap[left]) <= 0
        ? right
        : left;
    if (this.heap[current].compareTo(this.heap[smallest]) <= 0) return;
    this.swap(current, smallest);
    this.siftDown(smallest);
  }

  siftUp(current: number): void {
    const parent = Math.floor((current - 1) / 2);
    if (
      typeof this.heap[parent] === "undefined" ||
      this.heap[current].compareTo(this.heap[parent]) >= 0
    )
      return;
    this.swap(current, parent);
    this.siftUp(parent);
  }

  remove(): T | null {
    if (this.isEmpty()) return null;
    const element = this.heap[0];
    if (this.heap.length === 1) {
      this.heap = [];
    } else {
      this.swap(0, this.heap.length - 1);
      this.heap.pop();
      this.siftDown(0);
    }
    return element;
  }

  insert(element: T): void {
    this.heap.push(element);
    this.siftUp(this.heap.length - 1);
  }

  findIndex(element: T): number {
    return this.heap.findIndex((existing) => element.is(existing));
  }

  contains(element: T): boolean {
    return this.findIndex(element) > -1;
  }

  update(element: T): void {
    const i = this.findIndex(element);
    if (i === -1) return;
    this.heap[i] = element;
    if (element.compareTo(this.heap[i]) < 0) this.siftUp(i);
    else this.siftDown(i);
  }
}
