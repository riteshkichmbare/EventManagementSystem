const express = require("express");
const router = express.Router();
const { checkRole } = require("../middleware/authMiddleware");
const { createRegistration, getAllRegistrations, getMyRegistrations } = require("../controller/registrationController");

router.post("/", checkRole("user"), createRegistration);
router.get("/", checkRole("admin"), getAllRegistrations);
router.get("/my/:userId", checkRole("user"), getMyRegistrations);

module.exports = router;
