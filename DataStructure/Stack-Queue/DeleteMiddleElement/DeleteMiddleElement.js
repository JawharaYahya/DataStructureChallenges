const Node= require("../nodeClass");

class StackWithDeleteMiddle {
    constructor() {
        this.top= null;
        this.size=0;
    }

    push(data){
        const newNode= new Node(data);
       newNode.next=this.top; //link the new node to the top
       this.top=newNode; //move top to point to the new node
       this.size++; // increase the size
    }
     pop(){
       if(!this.top) return "can't pop_Stack is empty";
       const popedData= this.top.data;  //store the data before moving
        this.top= this.top.next; //move the top of the next data
        this.size--;
        return popedData;
    }

 deleteMiddle(){
    //step 1: handle edge cases if stack is empty nothing to delete, if there's only one item pop it
    if(!this.top) return"can't delete middle - empty stack";
    if (this.size === 1) {
     return this.pop();
    }
    //step 2: find the index of the middle element
    let middleIndex;
    if(this.size%2 === 0){
        middleIndex=(this.size/2)-1; // for even take the lowest
    }
    else{
     middleIndex=Math.floor(this.size/2); 
    }
    //step 3: create a temporary stack to hold elements exept the middle one
    let tempStack= new StackWithDeleteMiddle();
  const originalSize = this.size; // store the original size  as size will change once we start poping
    //step 4: pop all elements , push them into tempStack except the middle one
  for (let i = 0; i < originalSize; i++) {
      if (middleIndex !== i)tempStack.push(this.pop());
      else this.pop(); // skip the middle element
    }
    //step 5: restore elements from tempstack back to the main stack    
    //reverse the order to match the main stack before

  while(tempStack.top !== null){ 
    this.push(tempStack.pop())
  }
   } 
   PrintStack(){
        let current = this.top;
        let result ="Stack:Top ->";
        while(current){
            result+=current.data;
            if(current.next){
                 result+=" -> ";
            }
            current=current.next
        }
        return result;
        
    }
}
module.exports=StackWithDeleteMiddle;
