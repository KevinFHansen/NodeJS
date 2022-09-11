//express = node bibliotek
const express = require("express");
const app = express();


const weaponsList = [
    {
        name: "AK-47",
        rounds: 30
    },
    {
        name: "Knife",
        rounds: 0
    },
    {
        name: "Pistol",
        rounds: 12
    }
]

app.get("/", (request, response) =>{
    response.send({
        message : "Connection"
    })
});

app.get("/weapons", (req, res) => {
    res.send(weaponsList)
})

app.get("/weapons/:id", (req, res) => {
    res.send(weaponsList[req.params.id])
})

app.listen(8080, () => {
    console.log("Listening on port", 8080)
});




// Har eksperimenteret med query string, men kunne ikke få det helt til at virke. 

// for(let i = 0; i < weaponlist.length; i++){
//     if ("Pistol" === weaponlist[i].name){
//         console.log(weaponlist[i])
//     }
//     else {
//         console.log("MINUSRESPKET")
//     }
// }



// app.get("/weapons", (req, res) => {
//     const newArray= [];
//     for(let i = 0; i < weaponlist.length; i++){
//         if (req.query.name === weaponlist[i].name){
//             newArray.push(weaponlist[i])
//         }
//         else {
//         }
//     }
//     res.send(newArray)
// }
// )

