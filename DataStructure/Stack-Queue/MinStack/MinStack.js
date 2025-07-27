const Node= require("../nodeClass");

class MinStack {
    constructor() {
        this.top=null; 
    }
    push(data){
        let newMin= this.top? Math.min(data,this.top.min) : data;
        const newNode = new Node(data, newMin);
        newNode.next= this.top; // link the next of the created newnode to the current top
        this.top= newNode; // updated the top with the new node
    }
    pop(){
    if(!this.top) return "can't pop stack is empty";
    const poped= this.top.data;
    this.top=this.top.next; // move pointer of the current top to the next top
    return poped;
}
    peek(){ 
    return this.top?  this.top.data:null; 
    }
    isEmpty(){
    return this.top === null;
    }
    getMin(){
    return this.top? this.top.min:null;
    }
    printStack(){
        let current=this.top;
        let result ="Top ->";
        while(current){
        result+=current.data;
        if(current.next) result+="->";
        current= current.next;  
    }
    return result;
}
}
module.exports=MinStack;