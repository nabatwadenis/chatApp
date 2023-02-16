const express = require("express");
const { registerUsers, loginUsers, findUser, findAllUsers } = require("../Controllers/userController");

const router = express.Router();

router.post("/register", registerUsers);
router.post("/login", loginUsers);
router.get("/find/:userId", findUser);
router.get("/", findAllUsers);

module.exports = router;