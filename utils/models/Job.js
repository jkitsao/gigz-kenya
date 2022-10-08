import { Schema, model, models, SchemaTypes, trusted } from 'mongoose';
const jobSchema = new Schema({
    position: {
        type: String,
        required: true
    }, // String is shorthand for {type: String}
    author: { type: SchemaTypes.ObjectId, ref: 'User' },
    slug: {
        type: String,
        required: true,
        lowercase: trusted,
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: SchemaTypes.ObjectId,
        ref: 'Company'
    },
    location: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    salary: {
        type: String
    },
    published: {
        default: false,
        type: Boolean,
        required: true
    }


});

const Job = models.Job || model('Job', jobSchema);

export default Job;