const BinaryTree=require("./BinaryTree");
const Node= require('./TNode');

test("preorder traversal", () => {
  const tree = new BinaryTree();
  tree.root = new Node(10);
  tree.root.left = new Node(20);
  tree.root.right = new Node(30);
  tree.root.left.left = new Node(40);
     tree.root.left.right = new Node(50);
    tree.root.right.left = new Node(60);

  const result = tree.preOrder(tree.root);
  expect(result).toEqual([10, 20, 40,50,30 ,60]);
});
test("inOrder traversal", () => {
  const tree = new BinaryTree();
  tree.root = new Node(10);
  tree.root.left = new Node(20);
  tree.root.right = new Node(30);
  tree.root.left.left = new Node(40);
     tree.root.left.right = new Node(50);
    tree.root.right.left = new Node(60);

  const result = tree.inOrder(tree.root);
  expect(result).toEqual([40, 20, 50,10,60 ,30]);
});
test("postOrder traversal", () => {
  const tree = new BinaryTree();
  tree.root = new Node(10);
  tree.root.left = new Node(20);
  tree.root.right = new Node(30);
  tree.root.left.left = new Node(40);
     tree.root.left.right = new Node(50);
    tree.root.right.left = new Node(60);

  const result = tree.postOrder(tree.root);
  expect(result).toEqual([40, 50, 20,60,30 ,10]);
});