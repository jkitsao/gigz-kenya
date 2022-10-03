import { Schema, model, models, SchemaTypes, trusted } from 'mongoose';
const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    // company: SchemaTypes.ObjectId,

});

const Company = models.Company || model('Company', companySchema);

export default Company;