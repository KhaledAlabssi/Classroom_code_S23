// function f(e) {
//     console.log(e);
// }

// function s(e) {
//     e.preventDefault()
//     console.log(e.target.password.value);
//     console.log(e.target.email.value);
//     e.target.email.value = ''
    
// }


// function add(e) {

//     e.preventDefault()
    
//     const ul = document.getElementById('ul')
//     const v = e.target.todo.value
//     const li = document.createElement('li')
//     li.textContent = v
//     li.addEventListener('dblclick', dele)
//     ul.appendChild(li)
//     e.target.todo.value = ''
    
// }

// const bbb = document.getElementById('bbb')
// bbb.addEventListener('click', dele)

// function dele () {
//     this.remove()
// }

// const c = document.getElementsByTagName('p')
// console.log(c);


// selectores 

//getElementById: return one value
// querySelector: return one value
// querySelectorAll: return array
// getElementByClassName: return array
// getElementByTagName: return array

//

const p = document.createElement("p")
p.textContent = "I'mdfsajdafskl"
p.setAttribute('class', 'red')

// document.body.appendChild(p)

const sss = document.getElementById('sss')
document.body.replaceChild(p, sss)


