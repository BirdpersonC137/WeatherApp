console.log('Starting app');

setTimeout(()=>{
    console.log('Inside of callback')
}, 2000);

setTimeout(()=>{
    console.log('Another one')
}, 0)
console.log('Finishing up');

let x = 1

let y = x + 9

console.log(`y is ${y}`)

let add = (a, b) => {
    let total = a + b;
    return total;
}

let res = add(3,8)
console.log(res)