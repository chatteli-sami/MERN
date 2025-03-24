import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const dbName = "Book";

async function dbConnect() {
  try {
    await connect(MONGODB_URI, {
      dbName,
    });
    console.log(
      `Pinged your deployment . You successfully connect to ${dbName}!`
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default dbConnect;
