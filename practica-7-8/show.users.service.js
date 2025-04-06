const fs = require("fs");


const mongo = "./mongo.json"

const showUsers = () => {

    try {

        fs.readFile(mongo, "utf-8", (error, data) => {

            if(error) throw new Error(`${error}`);
            
            console.log(`todos los usuarios \n ${data}`);
            

        })
        
    } catch (error) {
        throw new Error(`${error}`);
        
    }

}


module.exports = showUsers