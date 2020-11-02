/*
express 기본 설정
 */
const express = require("express");
const app = express();
const PORT = 8000;

/*
경로, 압축, 로그, 크로스도메인 처리
*/
const path = require("path");
const compression = require("compression");
const logger = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(logger("dev"));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

/*
express 세션 설정
 */
const session = require("express-session");
app.use(
  session({
    secret: "key",
    resave: false,
    saveUninitialized: true,
  })
);

/**
 passport 처리 설정
 */
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

/*
서버 확인
 */
app.get("/", (req, res) => {
  res.json({ run: "Run Server" });
});

/* 
유저
 */
app.use("/user", require("./routes/user"));

/*
404
*/
app.use((req, res, next) => {
  res.status(404).json("not found");
});

/*
500
*/
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.json({ error: err.message || "internal server error" });
});

/**
서버 시작
 */
app.listen(PORT, () => console.log(`server is running localhost:${PORT}`));
