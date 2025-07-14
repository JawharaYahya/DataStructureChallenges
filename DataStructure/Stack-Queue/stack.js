const Node= require("./nodeClass");

class Stack {
    constructor() {
    this.top=null; 
    }
//stack operations push to add new element
    push(data){
    const newNode =new Node(data);// create new node with the givin data
    newNode.next =this.top; //to start with it link the new node with the current top
    this.top=newNode; //update the top to the new node
    }
    //to remove the last element
    pop(){
       if(!this.top) return "can't pop_Stack is empty";    //check if the stack is empty
        this.top= this.top.next; ////move the top of the next data
    }

    peek(){
        // ternary operateor
    return this.top?this.top.data:null; 
    }
    isEmpty(){
        //if this.top === null return true else return false
        return this.top === null;
    }

    PrintStack(){
        let current = this.top;
        let result ="Stack:Top ->";
        while(current){
            //push data inside result
            result+=current.data;
            if(current.next){
                 result+=" -> ";
            }
            //move to the next node
            current=current.next
        }
        return result;
        
    }
}
    module.exports = Stack;