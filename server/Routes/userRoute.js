const express = require("express");
const { registerUsers } = require("../Controllers/userController");

const router = express.Router();

router.get("/register", registerUsers)

module.exports = router;