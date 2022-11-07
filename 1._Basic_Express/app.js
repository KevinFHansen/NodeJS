
//express = node bibliotek
const { query } = require("express");
const express = require("express");
const app = express();


app.get("/", (request, response) =>{
    response.send({date: new Date().toLocaleString()});
});

app.get("/monsters", (req, res) => {
    if (req.query.flashlight)
        res.send("You are safe")
    else {
        res.redirect("/lookunderbed");
    }
})

app.get("/lookunderbed", (req, res) => {
    res.send({messagage: "Go look"})
})

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//returns zulu time 
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(days[new Date().getDay()]);
console.log(new Date().getMonth());

app.listen(8080);