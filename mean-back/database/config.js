const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log("DB online")
    } catch (error) {
        console.log("Error al conectar la bd")
        throw new Error("Error al conectar la bd")
    }


   

}

module.exports = {
    dbConnection: dbConnection
}