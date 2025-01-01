const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3100, () => console.log("Server ready on port 3100."));

module.exports = app;
