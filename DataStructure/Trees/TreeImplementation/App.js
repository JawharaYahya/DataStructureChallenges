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

const BTree= new BinaryTree();
const Node=require('./TNode');
BTree.root= new Node(10);
BTree.root.left= new Node(5);
BTree.root.right= new Node(20);
BTree.root.left.left= new Node(3);
BTree.root.left.right= new Node(7);
BTree.root.right.left= new Node(15);
BTree.root.right.right= new Node(25);

let SecondMax= BTree.FindSecondMax();
console.log(SecondMax);


BTree.root= new Node(9);
BTree.root.left= new Node(8);
BTree.root.right= new Node(12);
BTree.root.left.left= new Node(3);
BTree.root.left.right= new Node(7);
BTree.root.right.left= new Node(17);
BTree.root.right.right= new Node(23);
BTree.root.left.left.right= new Node(4);

let leafSum=BTree.LeafSum();
console.log(leafSum);




