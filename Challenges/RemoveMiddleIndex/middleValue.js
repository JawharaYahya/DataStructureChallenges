 //use single function to return the middle value from an array
// function RemoveMiddleValue(arr){
// let newArr=[];
// let length= arr.length;
// let middle= (length % 2 === 0? length/2-1:(length-1)/2);
// for (let i=0;i<arr.length;i++){
//    if (middle !== i){
// newArr[newArr.length]=arr[i];
//    }
// }
// return newArr;
// }

// let arr=[1,2,3,4,5];
// let updatedArr=RemoveMiddleValue(arr);
// console.log(updatedArr);

// using mulitiple small function to return the middle value from an array
const findMiddleIndex = ((length) => {
return (length % 2 === 0) ? (length/2-1 ):((length-1)/2);
});

const removeMiddleIndex =((arr,indexToRemove)=>{
    let newArr=[];
for (let i=0;i<arr.length;i++){
   if (indexToRemove !== i){
newArr[newArr.length]=arr[i];
   }
}
return newArr;
});
const RemoveMiddleValue = (arr) =>{
    let middleIndex = findMiddleIndex(arr.length);
    return removeMiddleIndex(arr,middleIndex);
}
//test
let arr =[1,2,3,4,5];
console.log(RemoveMiddleValue(arr));