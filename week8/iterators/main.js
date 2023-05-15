// const a = ["a", "b", "c", "a", "b", "a"]


// function print(i){
//     console.log(i);
// }
// a.forEach(print)
// a.forEach(function() {})
// a.forEach(() => {})

// a.forEach(i => {console.log(i)})
// a.forEach((i) => {console.log(i)})

// const newArray = a.map(i=> {return i})

// const newArray2 = a.map(i=> {
//     i = i + "hi"
//     return i
// })

// console.log(newArray);
// console.log(newArray2);

// const students = [
//     {id: 1, fName: "Sarah", laptop: "Dell"},
//     {id: 2, fName: "Dave", laptop: "HP"},
//     {id: 3, fName: "Sam", laptop: "MS"},
//     {id: 4, fName: "Smith", laptop: "Samsung"},
//     {id: 5, fName: "Lolo", laptop: "Asus"},
// ]

// students.map(i => {return i})

//"Sarah using Dell laptop."


// const a = ["a", "b", "c", "a", "b", "a"]
// const ff = a.filter(i => {
//     return i == "a"
// })

// console.log(ff);
// const b = [11, 22, 543, 999, 1]
// console.log(b);
// const biggerThan100 = b.filter(i => {

//     i = i > 100
//     return i 
// })

// console.log(biggerThan100);

// const result = songs.filter(i => {
   
//     i = i.weeksAtNumberOne > 10

//     return i
// })

// console.log(result);
// const ul = document.getElementById('ul')
// const todos = ["Walk teh", "REadadfs", "eat the "]

// const ttt = todos.filter(i => {
//     i = i != "REadadfs"

//     return i
// })

// console.log(ttt);

// function removeEleFromArray (a, v) {

//     const result = a.filter(i => {
//         i = i != v
//         return i
//     })
//     console.log(result);

// }
// const toDelete = "REadadfs"
// removeEleFromArray(todos, toDelete)



// function listItems (array) {

//     for (let i = 0; i < array.length; i++) {
//         const li = document.createElement('li')
//         li.textContent = array[i]
//         ul.appendChild(li)
//     }

// }

// function getDurations (a) {
//     const result = a.map(i => {
//         return i.duration
//     })
//     console.log(result);
//     return result

// }

// getDurations(songs)


// filter: Write a function called getBigHits 
//which takes an array of songs and returns an array 
//of song objects which were number one for 10 or more weeks.
// function getBigHits (a) {

// }

// getBigHits(songs)


// const b = ["a", "b", "c", "a", "b", "a"]
// const a = [5, 3, 2, 11, 55]

// const result = a.find(i => {


//     return i == 3
// })

// console.log(result);

const students = [
    {id: 1, fName: "Sarah", laptop: "Dell", gender: "f", age: 22},
    {id: 2, fName: "Dave", laptop: "HP", gender: "m", age: 17},
    {id: 3, fName: "Sam", laptop: "MS", gender: "m", age:50},
    {id: 4, fName: "Smith", laptop: "Samsung", gender: "m", age: 32},
    {id: 5, fName: "Lolo", laptop: "Asus", gender: "f", age: 33},
]



// console.log(f_or_child);

// v1
function gender_age () {

    const f_or_child = students.filter(i => {

        i = i.gender == 'f' || i.age < 18
        return i
    })
    console.log(f_or_child);
    return f_or_child;
    
}
// gender_age()
// v2
function gender_age (a) {

    const f_or_child = a.filter(i => {

        i = i.gender == 'f' || i.age < 18
        return i
    })
    console.log(f_or_child);
    return f_or_child;

}
// gender_age(students)
// v3
function gender_age (array, g, a) {

    const f_or_child = array.filter(i => {

        i = i.gender == g || i.age < a
        return i
    })
    console.log(f_or_child);
    return f_or_child;

}
gender_age(students, "f", 18)

