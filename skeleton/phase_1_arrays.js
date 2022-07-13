// Array.prototype.uniq = function() {
//     let new_arr = [];
    
    
//     for (let i = 0; i < this.length; i++) {
//        if (!new_arr.includes(this[i])){  
//         new_arr.push(this[i]);
//        }

//     }
//     return new_arr;
// }

// const arr=[1,3,2,23,4,5,4,3,2,3,4,1,5,6,7,8,23,42,9, 12, 23, 3, 4,8, 65, 65, 65]


// console.log(arr.uniq())

// Array.prototype.twoSum = function(target) {
//     let new_arr = [];
//     for (let i = 0; i < this.length; i++){ 
//         for (let j = 0; j < this.length; j++) {
//             if(this[[i]] + this[j] === target && i<j){
//                 new_arr.push([i, j])
//             }
//         }
//     }      
//     return new_arr;
// }

// arr_2 = [-3,-2,-1,0,1,2,3,4,5]
// output [ [ 0, 6 ], [ 1, 5 ], [ 2, 4 ] ]
// console.log(arr_2.twoSum(0))



Array.prototype.transpose = function() {
    let col = this.length;
    let row = this[0].length;
    let new_arr = new Array(row);
    let self = this
    
    for (let i = 0; i<row; i++){
        for (let j = 0; j < col; j++) {
            new_arr[j].push(self[j][i])
        }
    }

    return new_arr;
}

let arr_3 = [[1, 2, 3], [4, 5, 6]]
// [[1,a], [2,b] [3,c]]

console.log(arr_3.transpose());
