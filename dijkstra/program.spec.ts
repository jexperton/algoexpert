import * as program from "./program";
import * as chai from "chai";

it("Test Case #1", function () {
  const start = 0;
  const edges = [
    [[1, 7]],
    [
      [2, 6],
      [3, 20],
      [4, 3],
    ],
    [[3, 14]],
    [[4, 2]],
    [],
    [],
  ];
  const expected = [0, 7, 13, 27, 10, -1];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it("Test Case #2", function () {
  const start = 1;
  const edges: any = [[], [], [], []];
  const expected = [-1, 0, -1, -1];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it("Test Case #3", function () {
  const start = 7;
  const edges = [
    [
      [1, 1],
      [3, 1],
    ],
    [[2, 1]],
    [[6, 1]],
    [
      [1, 3],
      [2, 4],
      [4, 2],
      [5, 3],
      [6, 5],
    ],
    [[5, 1]],
    [[4, 1]],
    [[5, 2]],
    [[0, 7]],
  ];
  const expected = [7, 8, 9, 8, 10, 11, 10, 0];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it("Test Case #4", function () {
  const start = 4;
  const edges = [
    [
      [1, 3],
      [2, 2],
    ],
    [[3, 7]],
    [
      [1, 2],
      [3, 4],
      [4, 1],
    ],
    [],
    [
      [0, 2],
      [1, 8],
      [3, 1],
    ],
  ];
  const expected = [2, 5, 4, 1, 0];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it("Test Case #5", function () {
  const start = 1;
  const edges = [[[1, 2]], [[0, 1]], [[3, 1]], [[2, 2]]];
  const expected = [1, 0, -1, -1];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it("Test Case #6", function () {
  const start = 0;
  const edges = [
    [
      [1, 1],
      [7, 8],
    ],
    [[2, 1]],
    [[3, 1]],
    [[4, 1]],
    [[5, 1]],
    [[6, 1]],
    [[7, 1]],
    [],
  ];
  const expected = [0, 1, 2, 3, 4, 5, 6, 7];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it("Test Case #7", function () {
  const start = 3;
  const edges = [
    [
      [1, 2],
      [3, 3],
      [4, 2],
    ],
    [
      [0, 1],
      [6, 3],
    ],
    [[3, 9]],
    [
      [0, 3],
      [1, 4],
      [4, 4],
      [8, 7],
    ],
    [
      [0, 1],
      [10, 3],
    ],
    [
      [7, 1],
      [8, 4],
    ],
    [[8, 1]],
    [],
    [[7, 1]],
    [[10, 2]],
    [],
  ];
  const expected = [3, 4, -1, 0, 4, -1, 7, 8, 7, -1, 7];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it("Test Case #8", function () {
  const start = 8;
  const edges = [
    [
      [1, 4],
      [7, 11],
    ],
    [
      [0, 4],
      [2, 11],
      [7, 14],
    ],
    [
      [1, 11],
      [3, 10],
      [5, 7],
      [8, 5],
    ],
    [
      [2, 10],
      [4, 12],
      [5, 17],
    ],
    [
      [3, 12],
      [5, 13],
      [6, 3],
    ],
    [
      [2, 7],
      [3, 17],
      [4, 13],
      [6, 5],
    ],
    [
      [4, 3],
      [5, 6],
      [7, 4],
      [9, 8],
    ],
    [
      [0, 11],
      [1, 14],
      [6, 4],
      [8, 10],
    ],
    [
      [2, 5],
      [6, 9],
      [7, 10],
    ],
    [],
  ];
  const expected = [20, 16, 5, 15, 12, 12, 9, 10, 0, 17];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});

it("Test Case #9", function () {
  const start = 3;
  const edges = [
    [[2, 4]],
    [[0, 2]],
    [
      [1, 1],
      [3, 2],
    ],
    [[0, 3]],
  ];
  const expected = [3, 8, 7, 0];
  const actual = program.dijkstrasAlgorithm(start, edges);
  chai.expect(actual).to.deep.equal(expected);
});
