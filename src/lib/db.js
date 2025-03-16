import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

if (!global.mongoose) {
    global.mongoose = { connection: null, promise: null };
}

export async function connectToDatabase() {
    if (global.mongoose.connection) return global.mongoose.connection;

    if (!global.mongoose.promise) {
        global.mongoose.promise = mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongooseInstance) => {
            global.mongoose.connection = mongooseInstance.connection;
            console.log("Connected to MongoDB successfully!");
            return mongooseInstance;
        }).catch((error) => {
            console.error("MongoDB connection error:", error);
            throw error;
        });
    }

    global.mongoose.connection = await global.mongoose.promise;
    return global.mongoose.connection;
}
