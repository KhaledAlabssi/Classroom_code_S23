// const n = prompt("Hello, type your name")
// const a = prompt("How old are you?")
// const g = prompt("And your gender is:")

// function greeting (name, age, gender) {
//     const message = `Welcome ${name}, who has age of ${age} and a ${gender}`
//     console.log(message);
// }

// greeting(n, a, g)

// function recArea (l, w) {
//     // const l = 23
//     // const w = 9
//     const result = l * w
//     return result
// }

// const myResult = recArea(23, 13)
// console.log(myResult);

// function add (a, b) {
//     let result = a + b
//     console.log("the result of add is:", result);
//     return result

// }

// function mul2 (a) {
//     let result = a * 2
//     console.log("the result of mul2 is:", result);

//     return result
// }

// const addresult = add(5, 6)

// const mul2Result = mul2(addresult)

// console.log(mul2Result);

// console.log("start of the program");

// let age = 21
// let isCriminal = false

// if(age >= 18 && isCriminal != true) {
//     console.log("You are allowed to drive!");

// }

// if(age < 18 || isCriminal == true) {
//     console.log("You are not allowed to drive, and we are not sorry!");
// }

// console.log("End of the program");

// age = undefined;

// if(age >= 18 && isCriminal != true) {
//     console.log("You are allowed to drive!");
// } else if (isCriminal == true || age < 18) {
//     console.log("You are not allowed to drive, and we are not sorry!")

// } else {
//     console.log("We can't deal with you. do not drive in ");
// }

// ======== if statement with functions:

// function isTen(a, c) {
//   if (a >= 18 && a < 100 && c != true) {
//     console.log("You are allowed to drive!");
//   } else if (c == true || a < 18) {
//     console.log("You are not allowed to drive, and we are not sorry!");
//   } else {
//     console.log("We can't deal with you. do not drive in ");
//   }
// }

// isTen(100, false);


// function isEven (n) {

//     if(n % 2 == 0){
//         console.log("Your number is even", true);

//     } else {
//         console.log("YOur number is odd", false);
//     }

// }

// isEven(5)

// function isEqual (n1, n2) {
//     if(n1 === n2) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }

// }

// function comp (s1, s2) {
//     if(s1.length == s2.length) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// comp("ka", "lab")

// function serveDrink (a, b) {
//     if(a > 17 && b == false){
//         console.log("We can serve", true);
//     } else {
//         console.log("We can't serve", false);
//     }
// }

// serveDrink(21, false)


// function longesTime (h, m, s) {
    
//     const minutesIntoHours = m / 60
//     const secondesIntoHours = s / 3600

//     if(h > minutesIntoHours && h > secondesIntoHours) {
//         console.log("hours is the longes");
//     } else if (minutesIntoHours > h && minutesIntoHours > secondesIntoHours) {
//         console.log("Minuts is the longest");
//     }else if (secondesIntoHours > h && secondesIntoHours > minutesIntoHours) {
//         console.log("Seconds are the greatest here")
//     } else {
//         console.log("Couldn't find the biggest");
//     }

// }

// longesTime(10, 66, 3600)

// function animals (a, b, c) {
//     let result = (a * 2) + (b + c ) *4
//     console.log(result);
// }
// animals(3, 1, 2)

function high (a, b, c) {
    let h = a

    if(h < b){
        h = b

    }
    if (h < c) {
        h = c
    }
    return h

}

function low (a, b, c) {
    let l = a

    if(l > b) {
        l = b
    }

    if (l > c) {
        l = c
    }

    return l

}

function diff(a, b, c) {

    const lowResult = low(a, b, c)
    const highResult = high(a, b, c)
    let result = highResult - lowResult

    console.log(result);


}

diff(10, 13, 5)



