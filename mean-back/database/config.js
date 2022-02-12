const mongoose = require('mongoose');
const dbConnection = async () => {

    try {
        await mongoose.connect('mongodb+srv://yecksin:mixmega15@cluster-mean.9vyzt.mongodb.net/hospitaldb');
        console.log("DB online")
    } catch (error) {
        console.log("Error al conectar la bd")
        throw new Error("Error al conectar la bd")
    }


   

}

module.exports = {
    dbConnection: dbConnection
}