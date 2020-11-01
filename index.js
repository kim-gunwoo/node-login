const express = require("express");
const app = express();
const PORT = 8000;

/*

*/
const path = require("path");

/*

*/
const logger = require("morgan");
const cors = require("cors");

/*

*/
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

/*

 */
app.get("/", (req, res) => {
    res.json({ run: "Run Server" });
});

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

 */
app.listen(PORT, () => console.log(`server is running localhost:${PORT}`));
