const LinkedList= require("../linkedList");

test ('test rotating by k=0 (the list should remain unchanged) ',() => {
    const list =new LinkedList();
    list.add(1); 
    list.add(2); 
    list.add(3);
    list.rotateLinkedList(0);
    expect(list.printList()).toBe("Head -> 1 -> 2 -> 3 -> Null");
   
});

test ('test rotating by a value greater than the list length (k=7) ',() => {
    const list =new LinkedList();
    list.add(1); 
    list.add(2); 
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    list.rotateLinkedList(7);
    expect(list.printList()).toBe("Head -> 2 -> 3 -> 4 -> 5 -> 6 -> 1 -> Null");
   
});