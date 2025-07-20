const stackDeleteMiddle=require("./DeleteMiddleElement");

test (' Deleting middle when stack with odd numbers of elements ',() => {
  const stackWithDelete= new stackDeleteMiddle();
stackWithDelete.push(7);
stackWithDelete.push(14);
stackWithDelete.push(3);
stackWithDelete.deleteMiddle();
    expect(stackWithDelete.PrintStack()).toBe("Stack:Top ->3 -> 7");
});

test (' Deleting middle when stack with even numbers of elements ',() => {
  const stackWithDelete= new stackDeleteMiddle();
stackWithDelete.push(7);
stackWithDelete.push(14);
stackWithDelete.push(3);
stackWithDelete.push(8);
stackWithDelete.deleteMiddle();

    expect(stackWithDelete.PrintStack()).toBe("Stack:Top ->8 -> 14 -> 7");
});

test (' Deleting from an empty stack',() => {
  const stackWithDelete= new stackDeleteMiddle();
     const result = stackWithDelete.deleteMiddle();

    expect(result).toBe("can't delete middle - empty stack");
});

test (' Deleting from a stack with one element',() => {
  const stackWithDelete= new stackDeleteMiddle();
     stackWithDelete.push(7);
    stackWithDelete.deleteMiddle();
    expect(stackWithDelete.PrintStack()).toBe("Stack:Top ->");
});