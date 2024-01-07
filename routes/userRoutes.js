const express = require("express")
const router = express.Router();
const userController = require("../controllers/userController")

router.get("/api/users", userController.getAllUsers);

router.get("/api/users/userid/:userid", userController.getUserById);
router.get("/api/users/email/", userController.getUserByEmail);
router.get("/api/users/session/:pid", userController.getUserByPayPalSessionId);
router.get("/api/users/firebase/", userController.getUserByFirebaseId);
router.post("/api/users", userController.addUser);
router.put("/api/users", userController.updateUser);
router.delete("/api/users/userid/:userid", userController.deleteUser);
router.delete("/api/users/all", userController.deleteAllUsers);

module.exports = router; 