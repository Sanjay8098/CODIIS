import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: Number,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isPlan:{
            type:Boolean,
            default:false
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isCuster:{
            type:Boolean,
            default:true
        }
    }
);

const User = mongoose.model("User", UserSchema);
export default User