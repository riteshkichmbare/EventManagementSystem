const express = require("express");
const router = express.Router();

const { registerUser, loginUser, loginAdmin } = require("../controller/authController");

router.post("/register", registerUser);
router.post("/login/user", loginUser);
router.post("/login/admin", loginAdmin);

module.exports = router;
