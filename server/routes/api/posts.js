const express = require("express");
const router = express.Router();

// @route api/users
// @desc Test route
// @access PUBLIC
router.get("/", (req, res) => res.send("POSTS route"));

module.exports = router;
