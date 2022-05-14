import express from "express"
import path from "path"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/userRoutes.js"

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db")
  })
  .catch((err) => {
    console.log(err.message)
  })

const app = express() //creating express app

app.use(express.json()) //
app.use(express.urlencoded({ extended: true }))

app.use("/api/users", userRouter)
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, "/frontend/build")))
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
)

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 5001 //define a port number

app.listen(port, () => {
  //server starts and on PORT
  console.log(`Backend served at http://localhost:${port}`) //callback function runs when started
})
