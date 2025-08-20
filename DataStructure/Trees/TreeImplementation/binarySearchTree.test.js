const BinarySearchTree=require("./BinarySearchTree");
const Node= require('./TNode');

test("adding a node", () => {
  const tree = new BinarySearchTree(10);
  tree.add(5);
  tree.add(15);
expect(tree.root.value).toBe(10);
expect(tree.root.left.value).toBe(5);
expect(tree.root.right.value).toBe(15);

});
test("contains a node", () => {
  const tree = new BinarySearchTree(10);
  tree.add(5);
  tree.add(15);

expect(tree.contains(5)).toBe(true);
expect(tree.contains(7)).toBe(false);

});
test("remove a  child node", () => {
  const tree = new BinarySearchTree(10);
  tree.add(5);
  tree.add(15);
  tree.remove(15);
expect(tree.root.value).toBe(10);
expect(tree.root.left.value).toBe(5);
expect(tree.root.right).toBe(null);
});

test("remove a node with one child", () => {
  const tree = new BinarySearchTree(10);
  tree.add(5);
  tree.add(15);
  tree.add(12); // child of 15
tree.remove(15);
expect(tree.root.right.value).toBe(12);
});

test("remove a node with two children", () => {
  const tree = new BinarySearchTree(10);
  tree.add(5);
  tree.add(15);
  tree.add(12); 
  tree.add(17);
tree.remove(15);
expect(tree.root.right.value).toBe(17);
});