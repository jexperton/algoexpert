import * as program from "./program";
import * as chai from "chai";

interface Node {
  id: number;
  left: number | null;
  right: number | null;
  value: number;
}

function getDfsOrder(node: program.BST | null, values: Node[]): Node[] {
  if (node === null) return;
  values.push({
    id: node.value,
    left: node.left?.value ?? null,
    right: node.right?.value ?? null,
    value: node.value,
  });
  getDfsOrder(node.right, values);
  getDfsOrder(node.left, values);
  return values;
}

it("Test Case #1", function () {
  const preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18];
  const actual = program.reconstructBst(preOrderTraversalValues);
  console.log(actual);
  const expected: Node[] = [
    { id: 10, left: 4, right: 17, value: 10 },
    { id: 17, left: null, right: 19, value: 17 },
    { id: 19, left: 18, right: null, value: 19 },
    { id: 18, left: null, right: null, value: 18 },
    { id: 4, left: 2, right: 5, value: 4 },
    { id: 5, left: null, right: null, value: 5 },
    { id: 2, left: 1, right: null, value: 2 },
    { id: 1, left: null, right: null, value: 1 },
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #2", function () {
  const preOrderTraversalValues = [100];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [{ id: 100, left: null, right: null, value: 100 }];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #3", function () {
  const preOrderTraversalValues = [10, 9, 8, 7, 6, 5];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [
    { id: 10, left: 9, right: null, value: 10 },
    { id: 9, left: 8, right: null, value: 9 },
    { id: 8, left: 7, right: null, value: 8 },
    { id: 7, left: 6, right: null, value: 7 },
    { id: 6, left: 5, right: null, value: 6 },
    { id: 5, left: null, right: null, value: 5 },
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #4", function () {
  const preOrderTraversalValues = [5, 6, 7, 8];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [
    { id: 5, left: null, right: 6, value: 5 },
    { id: 6, left: null, right: 7, value: 6 },
    { id: 7, left: null, right: 8, value: 7 },
    { id: 8, left: null, right: null, value: 8 },
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #5", function () {
  const preOrderTraversalValues = [5, -10, -5, 6, 9, 7];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [
    { id: 5, left: -10, right: 6, value: 5 },
    { id: 6, left: null, right: 9, value: 6 },
    { id: 9, left: 7, right: null, value: 9 },
    { id: 7, left: null, right: null, value: 7 },
    { id: -10, left: null, right: -5, value: -10 },
    { id: -5, left: null, right: null, value: -5 },
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #6", function () {
  const preOrderTraversalValues = [10, 4, 2, 1, 3, 5, 6, 9, 7, 17, 19, 18];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [
    { id: 10, left: 4, right: 17, value: 10 },
    { id: 17, left: null, right: 19, value: 17 },
    { id: 19, left: 18, right: null, value: 19 },
    { id: 18, left: null, right: null, value: 18 },
    { id: 4, left: 2, right: 5, value: 4 },
    { id: 5, left: null, right: 6, value: 5 },
    { id: 6, left: null, right: 9, value: 6 },
    { id: 9, left: 7, right: null, value: 9 },
    { id: 7, left: null, right: null, value: 7 },
    { id: 2, left: 1, right: 3, value: 2 },
    { id: 3, left: null, right: null, value: 3 },
    { id: 1, left: null, right: null, value: 1 },
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #7", function () {
  const preOrderTraversalValues = [1, 0, 2];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [
    { id: 1, left: 0, right: 2, value: 1 },
    { id: 2, left: null, right: null, value: 2 },
    { id: 0, left: null, right: null, value: 0 },
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #8", function () {
  const preOrderTraversalValues = [2, 0, 1, 4, 3];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [
    { id: 2, left: 0, right: 4, value: 2 },
    { id: 4, left: 3, right: null, value: 4 },
    { id: 3, left: null, right: null, value: 3 },
    { id: 0, left: null, right: 1, value: 0 },
    { id: 1, left: null, right: null, value: 1 },
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #9", function () {
  const preOrderTraversalValues = [2, 0, 1, 4, 3];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [
    { id: 2, left: 0, right: 4, value: 2 },
    { id: 4, left: 3, right: null, value: 4 },
    { id: 3, left: null, right: null, value: 3 },
    { id: 0, left: null, right: 1, value: 0 },
    { id: 1, left: null, right: null, value: 1 },
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #10", function () {
  const preOrderTraversalValues = [2, 0, 1, 4, 3, 3];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [
    { id: 2, left: 0, right: 4, value: 2 },
    { id: 4, left: 3, right: null, value: 4 },
    { id: 3, left: null, right: 3, value: 3 },
    { id: 3, left: null, right: null, value: 3 },
    { id: 0, left: null, right: 1, value: 0 },
    { id: 1, left: null, right: null, value: 1 },
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #11", function () {
  const preOrderTraversalValues = [2, 0, 1, 3, 4, 3];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [
    { id: 2, left: 0, right: 3, value: 2 },
    { id: 3, left: null, right: 4, value: 3 },
    { id: 4, left: 3, right: null, value: 4 },
    { id: 3, left: null, right: null, value: 3 },
    { id: 0, left: null, right: 1, value: 0 },
    { id: 1, left: null, right: null, value: 1 },
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});

it("Test Case #12", function () {
  const preOrderTraversalValues = [
    10, 4, 2, 1, 3, 5, 5, 6, 5, 5, 9, 7, 17, 19, 18, 18, 19,
  ];
  const actual = program.reconstructBst(preOrderTraversalValues);
  const expected: Node[] = [
    {id: 10, left: 4, right: 17, value: 10},
    {id: 17, left: null, right: 19, value: 17},
    {id: 19, left: 18, right: 19, value: 19},
    {id: 19, left: null, right: null, value: 19},
    {id: 18, left: null, right: 18, value: 18},
    {id: 18, left: null, right: null, value: 18},
    {id: 4, left: 2, right: 5, value: 4},
    {id: 5, left: null, right: 5, value: 5},
    {id: 5, left: null, right: 6, value: 5},
    {id: 6, left: 5, right: 9, value: 6},
    {id: 9, left: 7, right: null, value: 9},
    {id: 7, left: null, right: null, value: 7},
    {id: 5, left: null, right: 5, value: 5},
    {id: 5, left: null, right: null, value: 5},
    {id: 2, left: 1, right: 3, value: 2},
    {id: 3, left: null, right: null, value: 3},
    {id: 1, left: null, right: null, value: 1}
  ];
  chai.expect(getDfsOrder(actual, [])).to.deep.equal(expected);
});
