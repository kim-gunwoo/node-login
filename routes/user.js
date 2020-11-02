const express = require("express");
const router = express.Router();
const passport = require("./passport");

router.post("/signin", (req, res, next) => {
  passport.authenticate("local-signin", (err, user, info) => {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(401).json(info.message);
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json(user);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  passport.authenticate("local-signup", (err, user, info) => {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(401).json(info.message);
    res.json({ user });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ success: "success logout" });
});

module.exports = router;
