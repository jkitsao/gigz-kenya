import { Schema, model, models } from 'mongoose';
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    uid: {
        type: String,
        required: true
    },
    photo: String,
    role: {
        type: String,
        required: true
    }
});

const User = models.User || model('User', userSchema);

export default User;
