const express = require("express")
const router = express.Router();
const businessController = require("../controllers/businessController")

router.get("/api/businesses", businessController.getAllBusinesses);
router.get("/api/businesses/:id", businessController.getBusinessById);
router.get("/api/businesses/userid", businessController.findBusinessByUserID);
router.post("/api/businesses", businessController.postBusiness);
router.put("/api/businesses", businessController.updateBusiness);
router.delete("/api/businesses", businessController.deleteBusiness);

module.exports = router;