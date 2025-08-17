const TNode =require('./TNode');
class BinaryTree {
    constructor(root) {
       this.root=new TNode(root);
}

insert(value){
const newNode= new TNode(value);
if(!this.root){
this.root= new TNode(value);
return;
}
const queue= [this.root];
while(queue.length>0){
const current = queue.shift();
if(!current.left){
current.left=newNode;
return;
}else{
queue.push(current.left);
}
if(!current.right){
current.right=newNode;
return;
}else{
    queue.push(current.right)
}

}
}
//PreOrder Traversal Root - Left -Right
preOrder(node){
if (!node) return;

console.log(node.value);

this.preOrder(node.left);

this.preOrder(node.right);

}
//InOrder Traversal Left - Root -Right
inOrder(node){
if (!node) return;
this.inOrder(node.left);
console.log(node.value);
this.inOrder(node.right);

}

//PostOrder Traversal Left-Right-Root
postOrder(node){
if (!node) return;
this.postOrder(node.left);
this.postOrder(node.right);
console.log(node.value);

}
}
module.exports=BinaryTree;