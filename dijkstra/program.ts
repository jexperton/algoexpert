import { Comparable, MinHeap } from "../utils";

type AdjacencyList = DirectedEdge[][];

interface DirectedEdge {
  from: number;
  destination: number;
  distance: number;
}

export function dijkstrasAlgorithm(
  start: number,
  edges: number[][][]
): number[] {
  const adj: AdjacencyList = edges.map((vertex, from) =>
    vertex.map(([destination, distance]) => ({ from, destination, distance }))
  );

  const distTo: number[] = new Array(adj.length).fill(Infinity);
  const pathTo: DirectedEdge[] = new Array(adj.length).fill(null);
  const minHeap = new MinHeap<Index>();

  function relax(edge: DirectedEdge) {
    const { from, destination, distance } = edge;
    if (distTo[destination] > distTo[from] + distance) {
      distTo[edge.destination] = distTo[from] + distance;
      pathTo[edge.destination] = edge;
      const index = new Index(edge.destination, edge.distance);
      if (minHeap.contains(index)) minHeap.update(index);
      else minHeap.insert(index);
    }
  }

  distTo[start] = 0;
  minHeap.insert(new Index(start, 0));

  while (!minHeap.isEmpty()) {
    const current = minHeap.remove()!;
    for (const edge of adj[current.id]) relax(edge);
  }

  return distTo.map((d) => (d === Infinity ? -1 : d));
}

class Index implements Comparable<Index> {
  id: number;
  value: number;

  constructor(id: number, value: number) {
    this.id = id;
    this.value = value;
  }

  compareTo(x: Index): -1 | 0 | 1 {
    if (this.value === x.value) return 0;
    return this.value < x.value ? -1 : 1;
  }

  is(x: Index): boolean {
    return this.id === x.id;
  }
}
