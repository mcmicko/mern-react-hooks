const express = require("express");
const router = express.Router();

// @route api/users
// @desc Test route
// @access PUBLIC
router.get("/", (req, res) => res.send("User route"));

module.exports = router;
