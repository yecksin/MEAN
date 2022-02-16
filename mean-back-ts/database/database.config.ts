import { connect } from "mongoose";
import { DB_CNN } from "../global/enviroment";
const dbConnection = ()=>{
    connect(DB_CNN).then(resp=>{
        console.log("Db online")
    })
}

export default dbConnection;