//help with users
import mongoose from 'mongoose';
import User from '../models/User'
//function to add new user to collection
export async function addNewUserToCollection(user) {
    const { name, email, uid, photo, role } = user
    //check if user exists first
    let isUserPresent = await User.findOne({ uid }).exec()
    console.log({ isUserPresent })
    //if user doesnt exist create one
    if (!isUserPresent) {
        const newUser = await User.create({
            name, email, uid, photo, role
        })
        return newUser;
    }
    return;
}