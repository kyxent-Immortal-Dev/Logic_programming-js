const fs = require("fs")

const mongoDB = "./mongo.json"

const createUser = (newUser) => {

    try {
        
        fs.readFile(mongoDB, "utf8", (error, data) => {

            if(error) throw new Error(`${error}`);
            

            const usersObj = JSON.parse(data)

            usersObj.users.push(newUser)
            

            fs.writeFile(mongoDB, JSON.stringify(usersObj, null, 2), (error) => {

                if(error) throw new Error(`${error}`);

                console.log("usuario creado exitosamente!");
                
                
            })

            


        })

    } catch (error) {
        throw new Error(`${error}`);
        
    }

}

module.exports = createUser