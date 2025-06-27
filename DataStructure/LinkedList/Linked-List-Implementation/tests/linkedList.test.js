const LinkedList= require("../linkedList");

test ('printList() on empty list returns "Head -> Null"',() => {
    const list =new LinkedList();
    expect(list.printList()).toBe("Head -> Null (Empty List)");
   
})

test ('remove()from an empty list will throw an error',()=>{
    const list =new LinkedList();
    expect(() => list.remove(10)).toThrow("List is empty");
   
});

test ('insertAt() for index > size of the linked list ',()=>{
    const list = new LinkedList();
    list.add(10);
 expect(()=> list.insertAt(20,2)).toThrow("Invalid index");
});

test('add() properly',()=>{
    const list = new LinkedList();
    list.add(5);
     list.add(10);
     expect(list.head.data).toBe(5);
    expect(list.head.next.data).toBe(10);
});

test('test if includes() works',() =>{
    const list = new LinkedList();
    list.add(10);
    expect(list.includes(10)).toBe(true);
    expect(list.includes(20)).toBe(false);

});