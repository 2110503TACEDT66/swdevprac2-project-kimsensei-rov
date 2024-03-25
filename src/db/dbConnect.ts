import mongoose from "mongoose";

let isConnected = false;
export const dbConnect = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        return;
    }
    const MONGODB_URI = process.env.MONGODB_URI
    if (!MONGODB_URI) {
        throw new Error(
            'Please define the MONGODB_URI environment variable inside .env.local'
        )
    }
    try {
        await mongoose.connect(MONGODB_URI, {bufferCommands: false});
        isConnected = true;
        console.log("Connected to MongoDB")
        
    } catch (error) {
        console.log(error)
    }
}