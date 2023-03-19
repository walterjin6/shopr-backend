import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
export const connectDB = async () => {
  try {
    // creating a connection to the database
    const connection = await mongoose.connect(
      'mongodb+srv://qqfhzk:Good01bye@cluster0.cuhdzgy.mongodb.net/ecommerce2023?retryWrites=true&w=majority'
    )

    console.log(`MongoDB connected : ${connection.connection.host}`);
  } catch (err: unknown) {
    console.log(`error : ${err}`);
    process.exit(1);
  }
};
