const Queue=require("./queue");

test (' Test Enqueuing a node onto a queue ',() => {
    const queue = new Queue();
  queue.enqueue(10);
 queue.enqueue(20);
    expect(queue.printQueue()).toBe("Front ->10 -> 20");
});
test (' Test Dequeuing a node from the queue ',() => {
    const queue = new Queue();
     queue.enqueue(10);
 queue.enqueue(20);
  queue.dequeue();
    expect(queue.printQueue()).toBe("Front ->20");
});

test (' Test Checking if the queue is Empty',() => {
    const queue = new Queue();
  
    expect(queue.isEmpty()).toBe(true);
});