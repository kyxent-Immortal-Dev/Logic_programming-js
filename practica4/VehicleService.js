


const vehicleOnCreate = (model, color, year, isFuncional, brand) => {


    if(!model || !color || !year || !isFuncional || !brand) throw new Error("TIenes que enviarme todos los argumentos para poder ejecutar correctamente la funcion")

    return {
        modelo      : model,
        color       : color,
        anio        : year,
        esFuncional : isFuncional,
        marca       : brand
    }

}


module.exports = vehicleOnCreate