const LinkedList= require("../linkedList");

test (' reversing a non-empty list ',() => {
    const list =new LinkedList();
    list.add(1); 
    list.add(2); 
    list.add(3);

    list.reverse();
    expect(list.printList()).toBe("Head -> 3 -> 2 -> 1 -> Null");
   
});

test ('Single node list remains unchanged',()=>{

    const list =new LinkedList();
    list.add(1); 
   let beforeReverse= list.printList();
    list.reverse();
    let afterReverse=  list.printList();

    expect(beforeReverse).toBe(afterReverse);
});

test ('reverse() throws error on empty list',()=>{

    const list =new LinkedList();
    
expect(() => list.reverse()).toThrow("Cannot reverse an empty list");
});

test('reverse() works with duplicate values', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);
    
    list.reverse();
    
    expect(list.printList()).toBe("Head -> 3 -> 2 -> 2 -> 1 -> Null");
});