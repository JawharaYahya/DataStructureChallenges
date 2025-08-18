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
preOrder(node, result=[]){
if (!node) return;
  result.push(node.value);
this.preOrder(node.left,result);

this.preOrder(node.right,result);
return result;
}
//InOrder Traversal Left - Root -Right
inOrder(node,result=[]){
if (!node) return;
this.inOrder(node.left,result);
  result.push(node.value);
this.inOrder(node.right,result);
return result;

}
//PostOrder Traversal Left-Right-Root
postOrder(node,result=[]){
if (!node) return;
this.postOrder(node.left,result);
this.postOrder(node.right,result);
result.push(node.value);
return result;
}
printHierarchy() {
  if (!this.root) {
    console.log("Empty tree");
    return;
  }
  const levels = this.buildLevels();
  const totalLevels = levels.length;
  for (let i = 0; i < totalLevels; i++) {
    const level = levels[i];
    const spacesBefore = Math.pow(2, totalLevels - i - 1) - 1;
    const spacesBetween = Math.pow(2, totalLevels - i) - 1;
    let line = ' '.repeat(spacesBefore * 3); // spacing before first node
    line += level.join(' '.repeat(spacesBetween * 3)); // spacing between nodes
    console.log(line);
  }
}
buildLevels() {
  if (!this.root) return [];
  let levels = [];
  let current = [this.root]; // start with root inside array
  while (current.some(n => n !== null)) { 
    // store values
    levels.push(current.map(n => n ? n.value : ' '));
    const next = [];
    for (let i = 0; i < current.length; i++) {
      let node = current[i];
      if (node) {
        next.push(node.left);
        next.push(node.right);
      } else {
        next.push(null, null);
      }
    }
    current = next;
  }

  return levels;
}
}
module.exports=BinaryTree;