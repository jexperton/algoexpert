// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function reverseLinkedList(
  head: LinkedList,
  prev?: LinkedList
): LinkedList {
  const { next } = head;
  head.next = prev ?? null;
  return next ? reverseLinkedList(next, head) : head;
}
