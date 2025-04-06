const consoleInterface = require("./console.service");
const createDatabase = require("./create.db.service");
const createUser = require("./create.user.service");
const { v4: uuid} = require("uuid");
const updateUsers = require("./update.user.service");
const deleteUserById = require("./delete.user.service");
const showUsers = require("./show.users.service");



const main = () => {

    try {
        
        consoleInterface.question("porfavor ingrese una opción\n1-crear base de datos\n2-crear un usuario\n3-actualizar usuario mediante su id\n4-eliminar un usuario por su id\n5-ver todos los usuarios\n", (option) => {

            switch (parseInt(option)) {
                case 1:

                
                createDatabase()
                
                setTimeout(() => {

                    main()

                }, 3000)
                    
                    break;
                case 2:

                
                    consoleInterface.question("porfavor ingresa tu nombre : ", (nombre) => {

                        consoleInterface.question("porfavor ingrese su apellido : ", (apellido) => {

                            consoleInterface.question("porfavor ingrese su dui : ", (dui) => {

                                consoleInterface.question("porfavor ingrese su correo electronico :" ,(correo) => {

                                    const newUser = {
                                        id : uuid(),
                                        name : nombre,
                                        lastname : apellido,
                                        dui : dui,
                                        correo : correo

                                    }

                                    createUser(newUser)
                                    
                                    setTimeout(() => {
                                        
                                        main()
                
                                    }, 3000)
                                } )
                            })
                        })
                    })
                
                
                    

                break;

                case 3:

                    consoleInterface.question("Porfavor ingrese el id del usuario a actualizar", (id) => {

                        consoleInterface.question("porfavor ingresa el nombre ", (nombre) =>{

                            consoleInterface.question("porfavor ingresa el apellido", (apellido) => {


                                consoleInterface.question("porfavor ingresa tu dui ", (dui) => {

                                    consoleInterface.question("porfavor ingresa tu correo " ,(correo) => {


                                        const newData = {
                                            name : nombre,
                                            lastname : apellido,
                                            dui : dui,
                                            correo : correo
    
                                        }

                                        updateUsers(id, newData)

                                        setTimeout(() => {
                                            main()
                                        }, 3000)

                                    })
                                })

                            })
                        })

                    })
                break

                case 4:
                    consoleInterface.question("porfavor ingrese el id del user quiere borrar", (id) => {

                        deleteUserById(id)

                        setTimeout(() => {
                            main()
                        },3000)

                    })
                break

            case 5:

                    showUsers()

                    setTimeout(() => {
                        main()
                    }, 3000);

            break
            
                default:
                    break;
            }

        })

    } catch (error) {

        throw new Error(`${error}`);
        
    }
}


main()