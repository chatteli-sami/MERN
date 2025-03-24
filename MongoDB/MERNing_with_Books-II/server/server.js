import express from 'express'
import dotenv  from 'dotenv'
import cors from 'cors'
import dbConnect from './config/book.config.js'
import BookRoutes from './routes/book.route.js'


const app = express()
app.use(express.json(), cors())
app.use("/api", BookRoutes)

dotenv.config()
const PORT = process.env.PORT

dbConnect()

app.listen(PORT, () => {
    console.log(`listening on port : ${PORT}`)
})