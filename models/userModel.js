const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        user_firebase_id: { type: String },
        paypal_session_id: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        membership_sign_up_date: { type: String, required: true },
        membership_expiration_date: { type: String, required: true },
        business_projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'businesses' }],
    },
    { timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User