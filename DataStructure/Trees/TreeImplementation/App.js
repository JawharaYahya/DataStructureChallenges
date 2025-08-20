const BinaryTree= require('./BinaryTree');
const BinarySearchTree=require('./BinarySearchTree');
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

const bst= new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(7);
console.log(bst.contains(7));

bst.remove(5);
console.log(bst.contains(5));



