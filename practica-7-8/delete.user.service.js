const fs = require("fs");

const mongo = "./mongo.json"

const deleteUserById = (id) => {


    try {
        
        fs.readFile(mongo, "utf-8", (error, data) => {

            if (error) throw new Error(`${error}`);

            const deleteUser = JSON.parse(data)


            const userDel = deleteUser.users.filter(user => user.id !== id)
            
            if (userDel => 1) {

                
            }
            
            const newData = {
                users:userDel
            }

            console.log(newData);
            

            fs.writeFile(mongo, JSON.stringify(newData, null, 2), (error) => {
                if(error) throw new Error(`${error}`);
                
            })
            
        })

    } catch (error) {
        throw new Error(`${error}`);
        
    }

}


module.exports = deleteUserById