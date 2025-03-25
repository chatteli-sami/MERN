import {connect} from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI
const dbName = 'booksDB'

async function dbConnect () {
    try {
        await connect(MONGODB_URI, {
            dbName
        })
        console.log(`you are connect successfully in you ${dbName}`)
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default dbConnect