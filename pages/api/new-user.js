import connectMongo from "../../utils/database";
import { addNewUserToCollection } from "../../utils/helpers/users";
export default async function handler(req, res) {
    await connectMongo()
    if (req.method === 'POST') {
        // Process a POST request
        const { user } = req.body
        // console.log({ user })
        let result = await addNewUserToCollection(user)
        res.status(200).json({ result })
    } else {
        // Handle any other HTTP method
        res.status(404).json({ message: 'bad request' })
    }
}