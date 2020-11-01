const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("login router test");
});

router.post("/login", (req, res) => {
    res.send("login post");
});

module.exports = router;
