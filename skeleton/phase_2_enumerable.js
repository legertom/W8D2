Array.prototype.myEach = function(callback) {
    for (i = 0; i < this.length; i++) {
        this[i] = callback(this[i])
    }
    return this
}

function myCallback(n) {
    let total = n * 42
    return total
}


let arr=[1,2,3,4]
let arr1 = [2,4,6,8]
// console.log(arr.myEach(myCallback))

Array.prototype.myMap = function(callback) {
    let new_arr = []
    console.log(arr)
    for (i = 0; i < this.length; i++) {
        new_arr.push(callback(this[i]))
    }
    return new_arr
}
console.log(arr1.myMap(myCallback))

Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue
    for (i = 0; i < this.length; i++) {
        acc += callback(this[i])
    }

    return acc

}

console.log(arr1.myReduce(myCallback, 0))