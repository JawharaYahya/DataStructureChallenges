const Node =require("./classNode");
class LinkedList {
constructor (){
    this.head=null;
    this.size=0;
}

add(data){
    if (data === undefined || data === null){
        throw new Error("Data can not be an undefind or null");
      
    }
     if (typeof data === "string"){
        throw new Error("This list only accepts numbers");
        
     }
const newNode =new Node(data);
if (this.head === null){
this.head = newNode;
} else {
    let current=this.head;
    while(current.next !== null){
        current=current.next;
    }
    current.next=newNode;
    }
this.size++;
    }
remove(data){
     if (typeof data !== "number") {
    throw new Error("Only numbers allowed");
  }
    if (this.head===null){
     throw new Error("List is empty");
    }
     if (this.head.data === data){
        this.head= this.head.next;
        this.size--;
        return;
     }
    let current=this.head;
    while (current.next !== null){
        if (current.next.data === data){
        current.next=current.next.next;
        this.size--;
        return;
        }
        current=current.next;
        }
        throw new Error("The Value not found");
    }

    printList(){
        if (this.head === null) {
  console.log("Head -> Null (Empty List)");
  return "Head -> Null (Empty List)";
}
        let current=this.head;
        let result ='Head -> ';
        while (current !== null) {
            result+= current.data + ' -> ';
            current= current.next;
        }
        result+= 'Null';
        console.log(result);
        return result;
        }

    includes(data){
        if(this.head === null){
            console.log("Empty list");
            return false;
        }
         
        let current= this.head;
        while(current !== null) {
            if (current.data === data) {
                console.log(`This list has ${current.data}`);
                
                return true;
            }
            current= current.next;
        }
        console.log("Data not found");
        
        return false;
    }
    insertAt(data, index){
        if (index < 0 || index > this.size){
            throw new Error("Invalid index");
        }
         const newNode =new Node(data);
        if (index === 0){
            newNode.next=this.head;
            this.head= newNode;

        } else {
            let current=this.head;
            let previous=null;
            let i=0;
            while(i < index){
                previous=current;
                current=current.next;
                i++;
            }
            newNode.next=current
            previous.next=newNode;
        }
        this.size++;

    }  
    mergeSortedLists(list1,list2){
      const merged = new LinkedList;
      let current1 = list1;
         let current2 = list2;
         while (current1 !== null && current2 !== null) {
            
            if (current1.data < current2.data) {
               merged.add(current1.data);
              current1= current1.next;
            } 
            else {
             merged.add(current2.data);
             current2= current2.next;
            }

              }
         //append the remaining parts
         while (current1 !== null) {
            merged.add(current1.data);
            current1 = current1.next;
         } 
 while (current2 !== null) {
            merged.add(current2.data);
            current2 = current2.next;
         } 
            return merged;
            }
  }
 module.exports= LinkedList;
