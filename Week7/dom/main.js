// const title = document.getElementById('title')
// const txt  = document.getElementById("text")


// const titleColor = prompt("Type the color for title: ")
// const txtColor = prompt("Insert the color for text: ")


// title.style.color = titleColor
// txt.style.color = txtColor




// const toDelete = document.getElementById("trash")
// body.removeChild(toDelete)

// const n = prompt("How many paragraphs do you want?")

// for (let i = 0; i < Number(n); i ++) {

//     const p = document.createElement("p")
//     p.textContent = `I'm paragraph of i n: ${i}`
//     // console.log(p);
    
//     const body = document.body
    
//     body.appendChild(p)
// }

// const btn = document.getElementById('btn')


// function  addP () {
// const p = document.createElement('p')
// p.textContent = "I'm created by click event"
// document.body.appendChild(p)
// }

// btn.addEventListener('click', addP)

// const amount = document.getElementById("amount")
// let currentNumber = 0
// amount.textContent = currentNumber

// add event listener to btn
// create function for that listener
// inside that function didplay the updated number

// const btn = document.getElementById('btn')
// btn.addEventListener("click", inc)

// function inc () {
//     console.log("Hi");
//     const amount = document.getElementById("amount")
//     currentNumber = currentNumber + 1
//     console.log(currentNumber);
//     amount.textContent = currentNumber
    

// }



const btn = document.getElementById("btn")
btn.addEventListener('click', mode)
function mode() {

    const amount = document.getElementById("amount")
    if(amount.classList.contains('dark')){
        amount.classList.remove('dark')
        
    } else {
        amount.classList.add('dark')
    }
    
    
}