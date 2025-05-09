
const ListPersons = [
    {
        name : "Ezequiel",
        age : 22
    },
    {
        name : "Alexa",
        age : 22
    },
    {
        name : "john doe",
        age : 22
    },

    {
        name : "goku",
        age : 22
    }
]

let app = document.getElementById("app")

ListPersons.forEach(person => {
    const persona = document.createElement("div")

    persona.innerHTML=`
        <p>${person.name}</p>
        <p>${person.age}</p>
    `

    app.appendChild(persona)


} )










// let parrafo = document.createElement("p")
// parrafo.textContent = "Hola soy un parrafo subNodo del div con el id app"

// app.appendChild(parrafo)