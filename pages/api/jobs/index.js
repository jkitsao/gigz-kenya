import connectMongo from "../../../utils/database";
import { addNewJob, getAvailableJobs } from "../../../utils/helpers/jobs";
export default async function handler(req, res) {
    await connectMongo()
    if (req.method === 'POST') {
        // Process a POST request
        // console.log(req.body)
        const values = req.body
        if (!values) return res.status(400).json('bad request')
        let result = await addNewJob(values)
        res.status(200).json({ result })
    } else {
        // Handle any other HTTP method
        const result = await getAvailableJobs()
        res.status(200).json({ result })
    }
}