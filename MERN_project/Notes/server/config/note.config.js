import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const dbName = process.env.dbName;

async function dbConnect() {
  try {
    await connect(MONGODB_URI, {
      dbName: dbName,
    });
    console.log(`connect successfully to your db ${dbName}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default dbConnect;
