const router = require("express").Router();

const { addJob, getJobs } = require("../controllers/jobControllers");

const authMiddleware = require("../middleware/authMiddleware");


router.post("/add", authMiddleware, addJob);

router.get("/", getJobs);


module.exports = router;