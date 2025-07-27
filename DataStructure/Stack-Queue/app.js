// const Stack=require("./stack");
// const Queue=require("./queue");
// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.PrintStack());

// stack.pop();
// console.log(stack.PrintStack());

// console.log(stack.peek());

// console.log(stack.isEmpty());


// const queue= new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.printQueue());
// queue.dequeue();
// console.log(queue.printQueue());

// console.log("Peek:",queue.peek());

// console.log("Is Empty:",queue.isEmpty());
// const stackDeleteMiddle=require("./DeleteMiddleElement/DeleteMiddleElement");

// const stackWithDelete= new stackDeleteMiddle();
// stackWithDelete.push(7);
// stackWithDelete.push(14);
// stackWithDelete.push(3);
// stackWithDelete.push(8);
// stackWithDelete.push(5);
// console.log(stackWithDelete.PrintStack());
// stackWithDelete.deleteMiddle();
// console.log(stackWithDelete.PrintStack());

const MinStack=require("./MinStack/MinStack");
const minStack=new MinStack();
minStack.push(15);
minStack.push(7);
minStack.push(12);
minStack.push(3);
console.log(minStack.printStack());
let min = minStack.getMin();
console.log("Current Minimum: ",min);
minStack.pop();
min = minStack.getMin();
console.log("new minimum after pop",min);
console.log(minStack.printStack());
let peeked= minStack.peek();
console.log("Peek is :" ,peeked);
minStack.push(2);
console.log(minStack.printStack());
min= minStack.getMin();
console.log("new minimum after push",min);
console.log(minStack.isEmpty());
minStack.push(-3);
min= minStack.getMin();
console.log("new minimum after push",min);

