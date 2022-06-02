export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  if (preOrderTraversalValues.length === 0) return null;
  let i = 1;
  while (preOrderTraversalValues[0] > preOrderTraversalValues[i]) i++;
  const tree = new BST(
    preOrderTraversalValues[0],
    reconstructBst(preOrderTraversalValues.slice(1, i)),
    reconstructBst(preOrderTraversalValues.slice(i))
  );
  return tree;
}

// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(
    value: number,
    left: BST | null = null,
    right: BST | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
