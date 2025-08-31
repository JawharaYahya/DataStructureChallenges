const BinaryTree=require("../BinaryTree");
const Node= require('../TNode');


test("Sum of all leaf nodes", () => {
  const BTree = new BinaryTree();
  BTree.root= new Node(9);
BTree.root.left= new Node(8);
BTree.root.right= new Node(12);
BTree.root.left.left= new Node(3);
BTree.root.left.right= new Node(7);
BTree.root.right.left= new Node(17);
BTree.root.right.right= new Node(23);
BTree.root.left.left.right= new Node(4);

let leafSum=BTree.LeafSum();
expect(leafSum).toEqual(51);
});
test("Sum of all leaf nodes with negative values", () => {
  const BTree = new BinaryTree();
  BTree.root= new Node(-9);
BTree.root.left= new Node(-8);
BTree.root.right= new Node(-12);
BTree.root.left.left= new Node(-3);
BTree.root.left.right= new Node(-7);
BTree.root.right.left= new Node(-17);
BTree.root.right.right= new Node(-23);
BTree.root.left.left.right= new Node(-4);

let leafSum=BTree.LeafSum();
expect(leafSum).toEqual(-51);
});