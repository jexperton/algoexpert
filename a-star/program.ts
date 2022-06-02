import { Comparable, MinHeap } from "../utils";

export function aStarAlgorithm(
  startRow: number,
  startCol: number,
  endRow: number,
  endCol: number,
  graph: number[][]
): number[][] {
  const heap = new MinHeap<Node>();
  const end = new Node(endRow, endCol);
  let current = new Node(startRow, startCol);
  let solved = false;
  const nodes: Record<string, Node> = { [current.id]: current };

  heap.insert(current);

  while (!heap.isEmpty()) {
    current = heap.remove()!;

    if (!current || current.is(end)) {
      solved = true;
      break;
    }

    [
      [current.row, current.col + 1],
      [current.row, current.col - 1],
      [current.row - 1, current.col],
      [current.row + 1, current.col],
    ]
      .filter((p) => {
        return p[0] in graph && p[1] in graph[p[0]] && graph[p[0]][p[1]] === 0;
      })
      .forEach((p) => {
        const node = new Node(
          p[0],
          p[1],
          current.moves + 1,
          end.distTo(p[0], p[1]),
          current
        );
        if (!(node.id in nodes)) {
          nodes[node.id] = node;
          heap.insert(node);
        } else if (nodes[node.id].score() > node.score()) {
          nodes[node.id].cameFrom = node.cameFrom;
          nodes[node.id].moves = node.moves;
        }
      });
  }

  return solved ? current.path() : [];
}

class Node implements Comparable<Node> {
  cameFrom: Node | null;
  moves: number;
  manhattan: number;
  row: number;
  col: number;
  id: string;

  constructor(
    row: number,
    col: number,
    moves = 0,
    manhattan = 0,
    from: Node | null = null
  ) {
    this.row = row;
    this.col = col;
    this.id = `${row}-${col}`;
    this.moves = moves;
    this.manhattan = manhattan;
    this.cameFrom = from;
  }

  score() {
    return this.moves + this.manhattan;
  }

  compareTo(other: Node) {
    if (this.score() === other.score()) return 0;
    else return this.score() < other.score() ? -1 : 1;
  }

  is(other: Node) {
    return this.row === other.row && this.col === other.col;
  }

  distTo(row: number, col: number) {
    return Math.abs(this.col - col) + Math.abs(this.row - row);
  }

  path(): number[][] {
    return this.cameFrom
      ? this.cameFrom.path().concat([[this.row, this.col]])
      : [[this.row, this.col]];
  }
}
