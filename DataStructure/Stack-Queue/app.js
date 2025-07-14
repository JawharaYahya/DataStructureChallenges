const Stack=require("./stack");
const Queue=require("./queue");

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.PrintStack());

stack.pop();
console.log(stack.PrintStack());

console.log(stack.peek());

console.log(stack.isEmpty());


const queue= new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.printQueue());
queue.dequeue();
console.log(queue.printQueue());

console.log("Peek:",queue.peek());

console.log("Is Empty:",queue.isEmpty());



