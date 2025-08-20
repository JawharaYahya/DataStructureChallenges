const TNode =require('./TNode');
class BinarySearchTree {
    constructor(root) {
        if(root === null || root === undefined) {
         this.root = null;
        }
        else {
       this.root=new TNode(root);
    }
}
    add(value){
        if(!this.root){    //handle empty tree new node becomes root
        this.root= new TNode(value);
        return;
        }
this.addNodeHelper(this.root,value);
}
//recursive function to find the right place to the added value
addNodeHelper(node,value){
    if(value<node.value){
        if(node.left=== null){
node.left= new TNode(value);
        }
        else{
            this.addNodeHelper(node.left, value);
        }
    }else{
        if(node.right=== null){
node.right= new TNode(value);
        } else{
this.addNodeHelper(node.right,value);
        }
    }
}
contains(value){
let current=this.root;
while(current){
    if(value === current.value){
return true;
    } else if(value<current.value){
       current=current.left;
    }
      else {
      current=current.right;
    }
    }
     return false;
}
remove(value) {
    this.root = this.removeNodeHelper(this.root, value);
}
removeNodeHelper(node, value) {
    if (!node) return null; 

    if (value < node.value) {
        node.left = this.removeNodeHelper(node.left, value);
    } else if (value > node.value) {
        node.right = this.removeNodeHelper(node.right, value);
    } else {
        if (!node.left && !node.right) {
            return null;
        } else if (!node.left || !node.right) {
            return node.left || node.right;
        } else {
            let successor = this.findMin(node.right);
            node.value = successor.value;
            node.right = this.removeNodeHelper(node.right, successor.value);
        }
    }
    return node;
}
findMin(node) {
    while (node.left) node = node.left;
    return node;
}
}
module.exports=BinarySearchTree;