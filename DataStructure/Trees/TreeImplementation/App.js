const BinaryTree= require('./BinaryTree');

const tree = new BinaryTree(10);

tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);

console.log("preOrder Traversal: ");
tree.preOrder(tree.root);

console.log("InOrder Traversal: ");
tree.inOrder(tree.root);

console.log("PostOrder Traversal");
tree.postOrder(tree.root);

tree.printHierarchy();
