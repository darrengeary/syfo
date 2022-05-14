import mongoose from "mongoose"

const messageSchema = new mongoose.Schema(
  {
    name: { type: String },
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    location: { type: String },
    message: { type: String },
  },
  {
    timestamps: true,
  }
)

const Message = mongoose.model("Message", messageSchema)
export default Message
