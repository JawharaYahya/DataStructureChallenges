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
//insert new Values to the tree
    insert(value){
        if(!this.root){    //handle empty tree new node becomes root
        this.root= new TNode(value);
        return;
        }
this.insertNodeHelper(this.root,value);
}
//recursive function to find the right place to the added value
insertNodeHelper(node,value){
    if(value<node.value){
        if(node.left=== null){
node.left= new TNode(value);
        }
        else{
            this.insertNodeHelper(node.left, value);
        }

    }else{
        if(node.right=== null){
node.right= new TNode(value);
        } else{
this.insertNodeHelper(node.right,value);
        }

    }
}

}
module.exports=BinarySearchTree;