const User = require("../models/userModel");


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users);
    } catch (error) {
        res.send({ msg: error })
    }
}


const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.body.id)
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.body
        const user = await User.find({ email })
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

const getUserByStripeId = async (req, res) => {
    try {
        const user = await User.find({ stripe_session_id: req.params.sid })
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

const addUser = (req, res) => {
    try {
        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            stripe_session_id: req.body.stripe_session_id,
            membership_sign_up_date: req.body.membership_sign_up_date,
            user_firebase_id: req.body.user_firebase_id,
            membership_expiration_date: req.body.membership_expiration_date,
        });
        user.save()
    } catch (error) {
        res.send(error)
    }
}


const updateUser = async (req, res) => {
    try {
        const res = await User.findByIdAndUpdate({ _id: req.body.id }, req.body)
        res.send({ msg: "business updates" })
    } catch (err) {
        res.send(err)
    }
}

const deleteUser = (req, res) => {
    try {
        console.log(req.params.userid)
        User.findByIdAndDelete(req.params.userid)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
const deleteAllUsers = (req, res) => {
    try {

        User.deleteMany()

    } catch (error) {
        console.log("ERRRRRROR" + error)
    }
}

module.exports = { deleteAllUsers, addUser, getAllUsers, getUserByEmail, getUserById, deleteUser, updateUser, getUserByStripeId }