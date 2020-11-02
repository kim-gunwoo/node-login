const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const user = {
  email: "test@test",
  passwd: "test",
};

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "passwd",
      passReqToCallback: true,
    },
    (req, email, passwd, done) => {
      if (email === user.email && passwd === user.passwd) {
        return done(null, { id: email });
      } else if (email !== user.email) {
        return done(null, false, { message: "user no exist" });
      } else if (email === user.email && passwd !== user.passwd) {
        return done(null, false, { message: "passwd check" });
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
      if (email === user.email) {
        return done(null, false, { message: "user is exsist" });
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

module.exports = passport;
