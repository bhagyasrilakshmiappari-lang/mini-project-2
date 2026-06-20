const router = require("express").Router();

const { register } = require("../controllers/authControllers");

router.post("/register", register);

module.exports = router;