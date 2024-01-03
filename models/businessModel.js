const mongoose = require('mongoose')

const BusinessSchema = new mongoose.Schema(
    {
        project_name: { type: String, required: false },
        final_customer: { type: String, required: false },
        final_mission_statement: { type: String, required: false },
        final_usp: { type: String, required: false },
        final_product: { type: String, required: false },
        interests: { type: Array, required: false },
        customers: { type: Array, required: false },
        motivations: { type: Array, required: false },
        struggles: { type: Array, required: false },
        values: { type: Array, required: false },
        specifications: { type: Array, required: false },
        products: { type: Array, required: false },
        owner_id: { type: String }
    },
    { timestamps: true }
)

const Business = mongoose.model('Business', BusinessSchema)

module.exports = Business