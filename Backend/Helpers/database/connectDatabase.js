const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        console.log('DATABASE_URL:', process.env.MONGO_URL);

        // Ensure the MONGO_URL is defined
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined in environment variables");
        }

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB Connection Successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDatabase;
