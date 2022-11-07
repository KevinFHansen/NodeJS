import express from "express";
const app = express();
app.use(express.json());

let currentId = 2;

let weaponsList = [
    {
        id: 1,
        name: "AK-47",
        rounds: "30"
    },
    {
        id: 2,
        name: "Knife",
        rounds: "0"
    },
    {
        id: 3,
        name: "Pistol",
        rounds: "12"
    }
]

app.get("/weapons", (req, res) => {
    res.send({data: weaponsList});
})

app.get("/weapons/:id", (req, res) => {
    const foundWeapon = weaponsList.find(weapon => weapon.id === Number(req.params.id)); 
    console.log(typeof foundWeapon)
    console.log(foundWeapon)
    res.send({data: foundWeapon})
})

app.post("/weapons/:id", (req, res) => {
    const weapon = req.body; 
    //Håndter ID --> ++ foran currentID betyder at den inkrmentere først
    weapon.id = ++currentId
    weaponsList.push(weapon);
    res.send({data: weapon});
})


//Splice modificere det oprindelige array - Slice returnere et nyt array
//Vi parser vores string id til et Number
app.delete("/weapons/:id", (req, res) => {
    const foundIndex = weaponsList.findIndex(weapon => weapon.id === Number(req.params.id));
    if (foundIndex !== -1){
        //hvorfor [0]
        const deletedWeapons = weaponsList.splice(foundIndex, 1)[0];
        console.log(deletedWeapons)
        res.send({data: deletedWeapons});
        
    } else{
        //sender en statuskode, hvis ikke den kan finde det eksisterende ID
        res.status(404).send({data: undefined, message: `No weapon found by id: ${req.params.id}`});
    }
    res.send()
})

app.patch("/weapons/:id", (req, res) => {
    const foundIndex = weaponsList.findIndex(weapon => weapon.id === Number(req.params.id));
    if (foundIndex !== -1){
        const foundWeapon = weaponsList[foundIndex];

        //Den her linje forstår jeg ikke helt 
        const weaponToUpdate = {...foundWeapon, ...req.body, id: Number(req.params.id)}
        weaponsList[foundIndex] = weaponToUpdate;
        res.send({data: weaponToUpdate})
    
    } else{
        res.status(404).send({data: undefined, message: `No weapon found by id: ${req.params.id}`});
    }
});

app.listen(8080, () => { 
    console.log("Server is running on port", 8080)
});