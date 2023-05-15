const amount = document.querySelector('h2')
const payFrom = document.getElementById('payForm')
const receiveFrom = document.getElementById('receiveForm')
const record = document.getElementById('ul')
let balance = 0

receiveFrom.addEventListener('submit', (e) => {

    e.preventDefault()
    balance = balance + Number(e.target.money.value)
    amount.textContent = balance
    const li = document.createElement('li')
    li.textContent = `${e.target.money.value}: ${e.target.desc.value}`
    li.classList.add('receive')
    record.appendChild(li)
    e.target.money.value = ''

})

payFrom.addEventListener('submit', (e) => {
    e.preventDefault()
    balance = balance - Number(e.target.money.value)
    amount.textContent = balance
    const li = document.createElement('li')
    li.textContent = `${e.target.money.value}: ${e.target.desc.value}`
    li.classList.add('pay')
    record.appendChild(li)
    e.target.money.value = ''

})