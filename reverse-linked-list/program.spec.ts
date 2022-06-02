import * as program from "./program";
import * as chai from "chai";

type LinkedList = program.LinkedList;
const { LinkedList } = program;

it("Test Case #1", function () {
  const test = addMany(new LinkedList(0), [1, 2, 3, 4, 5]);
  const result = getNodesInArray(program.reverseLinkedList(test));
  const expected = getNodesInArray(addMany(new LinkedList(5), [4, 3, 2, 1, 0]));
  chai.expect(result).to.deep.equal(expected);
});

it("Test Case #2", function () {
  const test = new LinkedList(0);
  const result = getNodesInArray(program.reverseLinkedList(test));
  const expected = getNodesInArray(new LinkedList(0));
  chai.expect(result).to.deep.equal(expected);
});

it("Test Case #3", function () {
  const test = addMany(new LinkedList(0), [1]);
  const result = getNodesInArray(program.reverseLinkedList(test));
  const expected = getNodesInArray(addMany(new LinkedList(1), [0]));
  chai.expect(result).to.deep.equal(expected);
  chai.expect(result).to.deep.equal(expected);
});

it("Test Case #4", function () {
  const test = addMany(new LinkedList(0), [1, 2]);
  const result = getNodesInArray(program.reverseLinkedList(test));
  const expected = getNodesInArray(addMany(new LinkedList(2), [1, 0]));
  chai.expect(result).to.deep.equal(expected);
  chai.expect(result).to.deep.equal(expected);
});

it("Test Case #5", function () {
  const test = addMany(new LinkedList(0), [1, 2, 3]);
  const result = getNodesInArray(program.reverseLinkedList(test));
  const expected = getNodesInArray(addMany(new LinkedList(3), [2, 1, 0]));
  chai.expect(result).to.deep.equal(expected);
  chai.expect(result).to.deep.equal(expected);
});

it("Test Case #6", function () {
  const test = addMany(new LinkedList(0), [1, 2, 3, 4, 5]);
  const result = getNodesInArray(program.reverseLinkedList(test));
  const expected = getNodesInArray(addMany(new LinkedList(5), [4, 3, 2, 1, 0]));
  chai.expect(result).to.deep.equal(expected);
  chai.expect(result).to.deep.equal(expected);
});

it("Test Case #7", function () {
  const test = addMany(
    new LinkedList(0),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  );
  const result = getNodesInArray(program.reverseLinkedList(test));
  const expected = getNodesInArray(
    addMany(new LinkedList(12), [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
  );
  chai.expect(result).to.deep.equal(expected);
  chai.expect(result).to.deep.equal(expected);
});

function addMany(linkedList: LinkedList, values: number[]) {
  let current = linkedList;
  while (current.next !== null) {
    current = current.next;
  }
  for (const value of values) {
    current.next = new LinkedList(value);
    current = current.next;
  }
  return linkedList;
}

function getNodesInArray(linkedList: LinkedList) {
  const nodes: number[] = [];
  let current: LinkedList | null = linkedList;
  while (current !== null) {
    nodes.push(current.value);
    current = current.next;
  }
  return nodes;
}
