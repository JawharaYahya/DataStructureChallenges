const LinkedList = require("./linkedList");

const list = new LinkedList();

const list1 = new LinkedList();
const list2 = new LinkedList();
const emptyList1 = new LinkedList();
const emptyList2 = new LinkedList();

list1.add(5);
list1.add(10);
list1.add(15);
list1.printList();
list2.add(2);
list2.add(3);
list2.add(20);
list2.printList();
const result = list1.mergeSortedLists(list1.head,list2.head);
result.printList();
const result1 =list1.mergeSortedLists(emptyList1.head,list2.head);
result1.printList();
const result2 = list1.mergeSortedLists(emptyList1.head,emptyList2.head)
result2.printList();


list.add(5);
list.add(10);
list.add(20);
list.add(30);
list.includes(10)

list.printList();

list.remove(10);
list.printList();

console.log(list.includes(20));
console.log(list.includes(10));

list.insertAt(15,2);
list.printList();
