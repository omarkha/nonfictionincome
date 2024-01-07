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

const getUserByFirebaseId = async (req, res) => {
    try {
        console.log(req.params.fid)
        const user = await User.find({ user_firebase_id: req.params.fid })
        res.send(user)
    } catch (err) {
        res.send(err)
    }
}

const getUserByPayPalSessionId = async (req, res) => {
    try {
        const user = await User.findOne({ paypal_session_id: req.params.sid })
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

const addUser = (req, res) => {
    try {
        console.log(req.body)
        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            paypal_session_id: req.body.paypal_session_id,
            membership_sign_up_date: req.body.membership_sign_up_date,
            user_firebase_id: req.body.user_firebase_id,
            membership_expiration_date: req.body.membership_expiration_date,
        });
        user.save()
        res.send(user)
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
        User.deleteOne({ id: req.params.userid })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
const deleteAllUsers = (req, res) => {
    try {
        console.log("delete all")
        User.deleteOne({ _id: "65959b476f87115f7a09eb7d" })

    } catch (error) {
        console.log("ERRRRRROR" + error)
    }
}

module.exports = { getUserByFirebaseId, deleteAllUsers, addUser, getAllUsers, getUserByEmail, getUserById, deleteUser, updateUser, getUserByPayPalSessionId }