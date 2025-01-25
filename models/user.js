import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
  {
    cpr: {
      type: String,
      required: true,
      maxLength: 9, // Corrected the typo and changed to a number
    },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, default: "user" }, // Changed the default role to "user"
  },
  {
    timestamps: true, // Enabled timestamps
  }
)

const User = mongoose.model("User", userSchema)
export default User
