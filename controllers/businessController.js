const Business = require("../models/businessModel");
const User = require("../models/userModel")

const getAllBusinesses = async (req, res) => {
    try {
        const busineeses = await Business.find()
        res.status(200).json(busineeses);
    } catch (error) {
        res.send(error)
    }
}


const getBusinessById = async (req, res) => {
    try {
        const business = await Business.findOne({ _id: req.params.bid })
        res.send(business)
    } catch (err) {
        res.send(err)
    }
}


const getBusinessesByOwner = async (req, res) => {
    try {
        const businesses = await Business.find({ owner_id: req.params.owner_id })
        res.send(businesses)
    } catch (err) {
        res.send(err)
    }
}

const postBusiness = async (req, res) => {
    try {
        console.log(req.body.owner_id)
        const business = new Business({
            owner_id: req.body.owner_id,
            project_name: req.body.project_name,
            final_customer: req.body.final_customer,
            final_product: req.body.final_product,
            final_usp: req.body.final_usp,
            final_mission_statement: req.body.final_mission_statement,
            interests: req.body.interests,
            customers: req.body.customers,
            motivations: req.body.motivations,
            struggles: req.body.struggles,
            values: req.body.values,
            specifications: req.body.specifications,
            products: req.body.products,

        });
        business.save()
        const user = await User.findByIdAndUpdate(req.body.owner_id, { $push: { business_projects: { id: business.id, customer: business.final_customer, usp: business.final_usp } } })
        console.log(user)
    } catch (error) {
        res.send(error)
    }
}


const deleteBusinessById = async (req, res) => {
    try {
        const res = await Business.findOneByIdAndDelete(req.body.id)
        res.send({ msg: "business deleted" })
    } catch (err) {
        res.send(err)
    }
}

const updateBusiness = async (req, res) => {
    try {
        const business = await Business.findByIdAndUpdate({ _id: req.body.id }, req.body)
        res.send({ msg: "business updates" })
    } catch (err) {
        res.send(err)
    }

}

module.exports = {
    getBusinessesByOwner, getAllBusinesses, getBusinessById, postBusiness, updateBusiness, deleteBusinessById
}