import { Schema, Model, model, models } from 'mongoose'

export interface IUser extends Document {
    _id: string;
    email: string;
    password: string;
    name: string;
}

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    name: {
        type: String,
    },
}, { timestamps: true })

export const User: Model<IUser> = models.User || model<IUser>("User", UserSchema)