// let name = "Ezequiel"; //String --- cadena de texto 

// let age = 21.5 //Number puede ser que sea un dato numerico o un dato float (DECIMAL)


// let number = 22.22  // float o double 



// // en linea o no esta en linea

// let isActive = true // true o false 

// isActive = false



// const siEstaActivo = () => {
//     if(isActive == true){
//         return 'en linea'
//     }else {
//         return 'ultima vez 02 PM'
//     }
// }

// console.log(siEstaActivo());


const fruits = [
    "apple",
    "pear",
    "uva",
    1 
]


fruits.forEach(element => {
    console.log(element);
    
});


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);



const UserInfo = {
    name : "Ezequiel",
    age  : 21,
    isActive : true,
    favoriteColor : ["blue", "verde"]
}

const {name, age, isActive, favoriteColor} = UserInfo

console.log(name);
console.log(age);
console.log(isActive);

favoriteColor.forEach(element => {
    console.log(element);
    
});


