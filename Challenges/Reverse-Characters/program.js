
function  ReverseCharacters(inputSt){
       let ReversedString="";
for (let i=inputSt.length-1; i>=0; i--){
 
ReversedString += inputSt[i];


}
return ReversedString;}

console.log(ReverseCharacters("STYLE"));