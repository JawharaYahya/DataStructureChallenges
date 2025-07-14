const Node= require("./nodeClass");

class Queue {
    constructor() {
        this.front=null;
        this.rear=null;
    }
    enqueue(data){
        const newNode= new Node(data);
        if(!this.rear) {
            this.front=this.rear=newNode; //if queue is empty new node for both front and raer
}
    else{
        //attach new node to the end and move rear
        this.rear.next=newNode;
        this.rear=newNode;
    }}
    dequeue(){
    if (!this.front) return"Can't dequeue — the queue is empty"; //queue is empty
    const data =this.front.data; // to store the deleted data
    this.front=this.front.next;
    
    if(!this.front){ //update rare if queue becomes empty after removal
        this.rear=null;
    }
    return data;
    }

    peek(){
        return this.front?this.front.data:null;
    }

    isEmpty(){
        return this.front === null; //return boolean
    }

    printQueue(){
        let current= this.front;
        let result= "Front ->";
        while(current){
            result+= current.data;
          if(current.next){
                 result+=" -> ";
            }
            //move to the next node
            current=current.next
        }
        return result;
        }
    
}

    module.exports=Queue;