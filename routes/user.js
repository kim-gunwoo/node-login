const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("routes /uesr test");
});

router.post("/login", (req, res) => {});

module.exports = router;
