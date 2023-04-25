// Boolean variables

// const b1 = true
// const b2 = 20 > 2
// const b3 = 3 == '3'
// const b4 = 3 == '3' && 4 === '4'
// const b5 = true && false
// const b6 = 5 === '5' || 3 == '3'
// const b7 = false || true


// console.log(b1);
// console.log(b2);
// console.log(b3);
// console.log(b4);
// console.log(b5);
// console.log(b6);
// console.log(b7);

// Arrays:

// const a = ["Khaled", 37, true]
// console.log(a.length);
// console.log(a[0]);
//==================================================

// Objects: 

// const o = {
//     name: "Khaled",
//     age: 37,
//     moreThan3: true
// }

// console.log(o.name) // the most used case
// console.log(o["name"])

// let result = typeof(o.age)

// console.log(result)
//===========================================

// Typeof:

// let x = "KHaled"
// console.log(typeof(x));
// let converted = Number(x)
// console.log(converted);

// let n = 4
// console.log(String(n));

// let xx = true
// let xxx = Number(xx)
// console.log(xxx);
//============================================

// Functions:


let fName = "Sarah"
let lName = "Smith"


function greeting () {
    console.log(`Welcome back to our platform dear ${fName} ${lName}`)
    
}
greeting()

function g2 (p1, p2) {
    console.log(`Welcome back to our platform dear ${p1} ${p2}`)
}

g2("Daria", "Smith")

function add (a, b) {
    let result = a + b
    console.log(result);

}

add(5, 6)

function odd_even(n) {
    console.log(n % 2);
    
}
odd_even(24)

function fToC (f) {
    console.log("Temp in C is:", (f - 32) * 5/9);
}
fToC(100)