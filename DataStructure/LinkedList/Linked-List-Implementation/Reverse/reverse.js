//included here only reverse method.

reverse(){
if (this.head === null ){
throw new Error("Cannot reverse an empty list");


}
if (this.head.next=== null){
    return;
}
let previous=null;
let current= this.head;

while(current !== null){
let next= current.next;
current.next=previous;
previous=current;
current=next;
}
this.head=previous;

    }