const BinaryTree=require("../BinaryTree");
const Node= require('../TNode');

test("Finding the 2nd maximum value in a binary tree", () => {
  const Btree = new BinaryTree();

  Btree.root = new Node(10);
  Btree.root.left = new Node(5);
  Btree.root.right = new Node(20);
  Btree.root.left.left = new Node(3);
  Btree.root.left.right = new Node(7);
  Btree.root.right.left = new Node(15);
  Btree.root.right.right = new Node(25);

  let  secondMax =Btree.FindSecondMax();
  expect(secondMax).toEqual(20);
});
test("Test a tree with only one node", () => {
  const Btree = new BinaryTree();
  Btree.root = new Node(10);
  let secondMax =Btree.FindSecondMax();
  expect(secondMax).toEqual(null);
});

test("Test with a tree having negative values", () => {
  const Btree = new BinaryTree();
  Btree.root = new Node(10);
   Btree.root.left = new Node(-5);
  Btree.root.right = new Node(15);
  Btree.root.left.left = new Node(3);
  Btree.root.left.right = new Node(7);
  let secondMax =Btree.FindSecondMax(-20);
  expect(secondMax).toEqual(10);
});