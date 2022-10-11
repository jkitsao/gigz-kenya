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
        lowercase: true,
    },
    description: {
        type: String,
        required: true
    },
    company: {
        // type: SchemaTypes.ObjectId,
        // ref: 'Company'
        type: Object,
        required: true
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
    apply_url: {
        type: String,
        required: true
    },
    apply_email: {
        type: String,
    },
    keywords: {
        type: Array
    },
    invoice_email: {
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