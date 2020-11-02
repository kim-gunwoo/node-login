const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "passwd",
      passReqToCallback: true,
    },
    (req, email, passwd, done) => {
      console.log(`로그인 처리 로직`);
      console.log(req.body);

      if (true) {
        console.log(`true user exist`);
        return done(null, { id: email });
      } else {
        console.log(`false user not exist`);
        return done(null, false, { message: "user no exist" });
      }
    }
  )
);

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "passwd",
      passReqToCallback: true,
    },
    (req, email, passwd, done) => {
      console.log(`회원가입 처리 로직`);
      console.log(req.body);

      if (true) {
        return done(null, false, { message: "id exsist" });
      } else {
        if (true) {
          return done(null, { id: email });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("serializeUser ", user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("deserializeUser ", id);
  done(null, id);
});

router.post("/signin", (req, res, next) => {
  passport.authenticate("local-signin", (err, user, info) => {
    console.log(`로그인 처리 부분 후 로직`);

    console.log(user);
    console.log(info);

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
    console.log(`회원가입 처리 부분 후 로직`);
    console.log(user);
    console.log(info);
    res.json({});
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ success: "success logout" });
});

module.exports = router;
