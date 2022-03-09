const counter = document.getElementById('count-el')
const increment = document.getElementById('increment-btn')
const saveBtn = document.getElementById('save-btn')
const saveEl = document.getElementById('save-el')

//set count to 0
let count = 0
//listen for clicks on btn
increment.addEventListener('click', () =>{
    //increment the count when it is clicked
    count++
    //change the count
    counter.innerHTML = count
})

saveBtn.addEventListener('click', () => {
    //log out the count
    let dash = count + ' - '
    saveEl.innerHTML += ' ' + dash 
    counter.innerHTML = 0;
    count = 0
})
