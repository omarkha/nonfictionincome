const express = require("express")
const router = express.Router();
const businessController = require("../controllers/businessController")

router.get("/api/businesses", businessController.getAllBusinesses);
router.get("/api/businesses/byid/:bid", businessController.getBusinessById);
router.get("/api/businesses/owner/:owner_id", businessController.getBusinessesByOwner);
router.post("/api/businesses", businessController.postBusiness);
router.put("/api/businesses", businessController.updateBusiness);
router.delete("/api/businesses/byid/", businessController.deleteBusinessById);
module.exports = router;