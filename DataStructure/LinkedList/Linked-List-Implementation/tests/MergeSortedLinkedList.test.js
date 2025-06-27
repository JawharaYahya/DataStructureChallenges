const LinkedList= require("../linkedList");

test (' Test merging when one list empty ',() => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list2.add(2);
    list2.add(3);
    const result = list1.mergeSortedLists(list1.head,list2.head);
result.printList();
    expect(result.printList()).toBe("Head -> 2 -> 3 -> Null");
   
})

test (' Test merging when both lists are empty ',() => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const result = list1.mergeSortedLists(list1.head,list2.head);
result.printList();
   expect(result.printList()).toBe("Head -> Null (Empty List)");
})

test (' Test merging list1 and list2 ',() => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
   list1.add(5);
    list1.add(10);
    list1.add(15);
    list1.printList();
    list2.add(2);
    list2.add(3);
    list2.add(20);
    const result = list1.mergeSortedLists(list1.head,list2.head);
result.printList();
   expect(result.printList()).toBe("Head -> 2 -> 3 -> 5 -> 10 -> 15 -> 20 -> Null");
})