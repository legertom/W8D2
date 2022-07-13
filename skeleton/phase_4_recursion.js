// function myRange(start, end){
//     if (start === end){
//         return [end];
//     }
//     let myRange_array = new Array;
//     // myRange_array += start 
//     return myRange_array += myRange(start+1, end);
  

// }

// 0,1 => [0,1,2]

console.log(myRange2(0,2))

function myRange2(start, end) {
    if (start === end) {
        return [end];
    }
    return start
   return [start] += myRange(start + 1, end);


}