const sumar = require("./sumar");
const readline = require("readline")

const InterfazConsola = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

InterfazConsola.question("porfavor ingrese el primer numero ", (num1) => {

    InterfazConsola.question("porfavor ingrese el segundo numero " , (num2) => {

        let numero1 = parseFloat(num1)
        let numero2 = parseFloat(num2)

        console.log(`Su suma es : ${sumar(numero1, numero2)}`);
        


    })

})
