const MinStack =require("./MinStack");
test (' Test retrieving the minimum element in the stack ',() => {
    const minStack = new MinStack();
    minStack.push(15);
    minStack.push(7);
    minStack.push(12);
    minStack.push(3);

    expect(minStack.getMin()).toBe(3);
});

test ('verifying the minimum element after popping',() => {
    const minStack = new MinStack();
    minStack.push(15);
    minStack.push(7);
    minStack.push(12);
    minStack.push(3);
    minStack.pop();

    expect(minStack.getMin()).toBe(7);
});
test ('verifying the minimum element after pushing',() => {
    const minStack = new MinStack();
    minStack.push(15);
    minStack.push(7);
    minStack.push(12);
    minStack.push(3);
    minStack.pop();
    minStack.push(-3)

    expect(minStack.getMin()).toBe(-3);
});