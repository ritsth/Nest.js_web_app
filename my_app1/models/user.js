import mongoose,{ Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: String,
    },
    {
        timestamps:true,
    }
);

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;