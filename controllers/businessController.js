const Business = require("../models/businessModel");


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
        const business = await Business.findOneById(req.body.id)
    } catch (err) {
        res.send(err)
    }
}

const postBusiness = async (req, res) => {
    try {
        const business = await new Business({
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
    } catch (error) {
        res.send(error)
    }
}


const deleteBusiness = async (req, res) => {
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

const findBusinessByUserID = async (req, res) => {
    try {
        const businesses = await Business.find({ _id: req.body.id })
        res.json(businesses)
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    getAllBusinesses, getBusinessById, postBusiness, updateBusiness, deleteBusiness, findBusinessByUserID
}