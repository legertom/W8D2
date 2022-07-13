Array.prototype.bubblesort = function() {
    let sorted = false;

    while (sorted === false) {
    sorted = true;
        for (let i =0 ; i < this.length-1; i++ ){
            let j = i + 1;
            if (this[i] > this[j]) {
                let temp = this[i]
                this[i]=this[j]
                this[j]=temp
                sorted = false
            }
        }
    }
    return console.log(this);
}

arr = [1, 3, 2, 23, 4, 5, 4, 3, 2, 3, 4, 1, 5, 6, 7, 8, 23, 42, 9, 12, 23, 3, 4, 8, 65, 65, 65]

// console.log(arr.bubblesort())

// myString = "fdhakwebfovnwoenfsoebflsod"
myString2 = "abcd"

String.prototype.mySubStrings = function() {
    let new_arr = [];
    for (i=0; i< this.length; i++ ) {
        for (j = 0; j <= this.length; j++) {
            if (i<j){
                new_arr.push(this.slice(i,j));
            }
        }
    }

    return new_arr
}


// console.log(myString.mySubStrings())
console.log(myString2.mySubStrings())