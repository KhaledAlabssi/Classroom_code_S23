// function isRight(a, y) {
//     let sum = Number(a) + Number(y)
//     let result;
//     if(sum == 2023) {
//          result = "You are right about your age"
//     }else {
//         result = "You are wrong about your age."
//     }
//     console.log(result);
//     return result;
// }

// const age = prompt("How old are you?")
// const year = prompt("What year have you born in?")

// isRight(age, year)


let b = ["MD", "Buger King","KFC", "5 G"]

// let c = new Array("Dama", "Lama", "Bama", "Cama")
// console.log(b);
// console.log(b.sort());



let students = ["Shawarma", "Burger", "Kebab"]
// students.push("George")

function food (a) {
    console.log("I love to eat ", a);

}

// students.forEach(food)

// const arrayInString = students.toString()
// console.log(arrayInString);

// console.log(students);

// console.log(students);
// students.push("George")
// let newStudnet = "Blabla"
// console.log(students.push(newStudnet));
// console.log(students);



// function arrayLength(a) {
    //     let result = a.length
    //     console.log(result);
    
    // }
    // arrayLength(array)
    let array = [3, "car", "bar", false]

function removeFirstE (a) {
    a.shift()
    console.log(a);

}

// removeFirstE(array)

function addingEle (a, e) {
    a.push(e)
    console.log(a);
}

// addingEle(array, "Khaled")

function loging (a) {
    console.log("I'm a,", a);
}

array.forEach(loging)