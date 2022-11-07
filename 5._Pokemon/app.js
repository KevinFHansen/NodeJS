import express, { response } from "express";

const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"));
})

app.get("/battle", (req, res) => {
    res.sendFile(path.resolve("public/battle.html"))
});

app.get("/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(result => res.send({data: result})
)});

app.listen(8080, ()=>{
    console.log("Server is running on port", 8080);
})


//npm run testscript --> Run scripts fra package.json filen. I dette tilfælde runner den testscript