//express = node bibliotek
import express from "express";
const app = express();
app.use(express.json());

const weaponsList = [
    {
        id: "1",
        name: "AK-47",
        rounds: "30"
    },
    {
        id: "2",
        name: "Knife",
        rounds: "0"
    },
    {
        id: "3",
        name: "Pistol",
        rounds: "12"
    }
]

app.get("/", (request, response) =>{
    response.send({
        message : "Connection"
    })
});

//Get full weapon list or query string 
app.get("/weapons", (req, res) => {
    if(req.query.name){
        const filteredList = weaponsList.filter(f => f.name === req.query.name)
        res.send(filteredList)
    }
    else{
    res.send(weaponsList)
}
})

//Get weapon on id - Brug find() i stedet for. Filter tjekker hele listen
app.get("/weapons/:id", (req, res) => {
    const filteredWeaponListID = weaponsList.filter(i => i.id === req.params.id)
    res.send(filteredWeaponListID)
})

//Post
app.post("/weapons", (req, res) => {
    const weapon = req.body
    weaponsList.push(weapon)
    res.send("Posted")
});

//Delete - Problemer med at finde id'et på objektet. Finder pt på array index
app.delete("/weapons/:id", (req, res) =>{
    const idToDelete = weaponsList.filter(i => i.id === req.params.id)
    weaponsList.splice([idToDelete] , 1)
    res.send("Deleted")
})

//Put
app.put("/weapons/:id", (req, res) => {
    const idPut = req.params.id
    const {id, name, rounds} = req.body
    const weaponToBeUpdated = weaponsList.find((weapon) => weapon.id === idPut)
    weaponToBeUpdated.id = id
    weaponToBeUpdated.name = name
    weaponToBeUpdated.rounds = rounds
    res.send("Updated")
})


//Patch - Burde kunne lave noget mere generisk. Har ikke knækket koden til ikke at skulle generere en masse if statements endnu
app.patch("/weapons/:id", (req, res) => {
    const idPatch = req.params.id
    const {id, name, rounds} = req.body
    const weaponToBeUpdated = weaponsList.find((weapon) => weapon.id === idPatch)
    console.log(weaponToBeUpdated)
    if (id){
        weaponToBeUpdated.id = id
    }
    if(name){
        weaponToBeUpdated.name = name
    }
    if(rounds){
        weaponToBeUpdated.rounds = rounds
    }
    res.send("Updated")
})

app.listen(8080, () => {
    console.log("Listening on port", 8080)
});





