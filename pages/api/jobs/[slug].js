import connectMongo from "../../../utils/database";
import { getJobBySlug } from "../../../utils/helpers/jobs";
export default async function handler(req, res) {
    await connectMongo()
    if (req.method === 'GET') {
        // Process a POST request
        // console.log(req.body)
        const { slug } = req.query
        let result = await getJobBySlug(slug)
        res.status(200).json({ result })
    } else {
        // Handle any other HTTP method
        res.status(404).json({ message: 'bad request' })
    }
}