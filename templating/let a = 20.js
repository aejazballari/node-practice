let a = 20 
function remame () {
    a = 40
}
remame()
console.log(a);
let b = 3
b = 'aejaz'
console.log(b);

var obj={ name:'abcd' }
var obj2=obj
console.log(obj === obj2);

let arr = [1,0,3,0,4,0,2]
let newarr = []
console.log(newarr);
for(let i =0; i<arr.length; i++) {
    if(arr[i] == 0) {
        newarr.push(arr[i])
    } else {
        newarr.unshift(arr[i])
    }
}

console.log(newarr);