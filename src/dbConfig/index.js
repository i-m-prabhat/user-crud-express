import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>
{
    try
    {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

        console.log(`\nDatabase Connection Successfull! \nDB HOST: ${connectionInstance.connection.host} \nDB NAME: ${connectionInstance.connection.db.databaseName}\n`);
        // console.log(connectionInstance);

    } catch (error)
    {
        console.log("Database Connection failed!", error);
        process.exit(1);
    }
}


export default connectDB;