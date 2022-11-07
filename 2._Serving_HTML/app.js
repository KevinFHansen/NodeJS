const express = require("express");
const app = express();

app.use(express.static("public"));

console.log(__dirname)
console.log(require("./package-lock.json"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage.html")
});

app.listen(8080, () =>  console.log("Server is runnning on port", 8080));