// const pathVariables = location.pathname.split("/");
// const pokemonName = pathVariables.pop();

// console.log(pokemonName);

// todo start the battle against this pokemon
// fetch data about this specific pokemon
// once the battle is over then post the result to my backend 


fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(result => 
        res.send({ data: result }));