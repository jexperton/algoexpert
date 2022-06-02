export interface Comparable<T> {
  compareTo(x: T): -1 | 0 | 1;
  is(x: T): boolean;
}
