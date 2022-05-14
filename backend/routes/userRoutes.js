import express from "express"
import bcrypt from "bcryptjs"
import expressAsyncHandler from "express-async-handler"
import Message from "../models/messageModel.js"

const userRouter = express.Router()

userRouter.post(
  "/message",
  expressAsyncHandler(async (req, res) => {
    const newMessage = new Message({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      location: req.body.location,
      message: req.body.message,
    })
    const message = await newMessage.save()
    res.send({ name: "Done" })
  })
)

export default userRouter
