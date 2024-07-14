import { students } from "../db/app.js"

// popap start 
const btnOpen = document.querySelector(".main__btn")
const btnClose = document.querySelector(".btn__close")
const popap = document.querySelector(".popap")
const overlay = document.querySelector(".overlay")

btnOpen.addEventListener("click", ()=>{
    popapState("flex")
})

btnClose.addEventListener("click", ()=>{
    popapState("none")
})

overlay.addEventListener("click", ()=>{
    popapState("none")
})  

function popapState(state) {
    popap.style.display = state
}

// popap end

// model start
const model = document.querySelector(".model")
const modelFirstName = document.querySelector(".model__first__name")
const modelLastName = document.querySelector(".model__last__name")
const modelUsername = document.querySelector(".model__username")
const modelage = document.querySelector(".model__age")
const modelscore = document.querySelector(".score")

model.addEventListener("submit", (event) => {
    event.preventDefault()
    let firstName = modelFirstName.value
    let lastName = modelLastName.value
    let username = modelUsername.value
    let age = modelage.value
    let score = modelscore.value

    let existstudents = students.findIndex(student => student.username === username)
    if (existstudents >= 0) {
        return alert("bu username avval ro'yxatdan o'tgan")
        
        console.log(existstudents);
    }
        let newStudent = {
            id : new Date().getTime(),
        firstName,
        lastName,
        age,
        score,
    }
    students.push(newStudent);
    console.log(newStudent);
    model.reset()
    popapState("none")
    createTable(students)
})
// model end


// table create start 
const tbody = document.querySelector(".tbody")

function createTable(data) {
    while (tbody.firstChild) {
        tbody.firstChild.remove()
    }
    data.forEach(human => {
        let tr = document.createElement("tr")
        tr.classList.add("main__tbody__tr")
        tr.innerHTML =
            `
            <td>${ human.id }</td>
            <td>${ human.firstName }</td>
            <td>${ human.lastName }</td>
            <td>${ human.username }</td>
            <td>${ human.age }</td>
            <td>${ human.score }</td>
            `
            tbody.appendChild(tr)
            console.log(tr);
        }
    );
}
createTable(students)
// table create end


