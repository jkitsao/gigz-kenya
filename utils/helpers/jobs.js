//help with users
import Job from '../models/Job'
import { nanoid } from 'nanoid'
//function to add new user to collection
export async function addNewJob(job) {
    const { position, apply_url, company, category, keywords, description, apply_email, location, invoive_email } = job
    //function to create slug from position
    //i.e frontend-developer-v4pl8-f or frontend-developer-k3omu0x
    const slugify = str =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '') + '-' + nanoid(7);
    const newJob = await Job.create({
        position, apply_url, company, category, keywords, description, apply_email, location, invoive_email, slug: slugify(position)
    })
    return newJob
}
//Get all available jobs
export async function getAvailableJobs() {
    let all_jobs = await Job.find({}).exec()
    // if (!job_from_slug) return { message: 'Could not find job' }
    return all_jobs
}
//get job via slug
export async function getJobBySlug(slug) {
    let job_from_slug = await Job.findOne({ slug }).exec()
    if (!job_from_slug) return { message: 'Could not find job' }
    return job_from_slug
}