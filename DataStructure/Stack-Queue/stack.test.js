const Stack=require("./stack");

test (' Test Pushing a node onto a stack ',() => {
    const stack = new Stack();
    stack.push(10);
     stack.push(20);
  stack.PrintStack();
    expect(stack.PrintStack()).toBe("Stack:Top ->20 -> 10");
});

test (' Test Poping a node from the stack ',() => {
    const stack = new Stack();
     stack.push(10);
     stack.push(20);
    stack.pop();
  stack.PrintStack();
    expect(stack.PrintStack()).toBe("Stack:Top ->10");
});

test (' Test checking if the stack is empty',() => {
    const stack = new Stack();
    
    expect(stack.isEmpty()).toBe(true);
});
