fetch("/pokemon")
.then(response => response.json())
.then(result => console.log(result));


//const pokemonDiv = document.querySelector("#pokemon"); Samme formål som sidste. Kun brug query hvis der er et formål
const pokemonDiv = document.getElementById("pokemon")

fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => response.json())
.then(result => {
    result.results.forEach(pokemon => {
        const pokemonIndividualDiv = document.createElement("div");
        const pokemonNameP = document.createElement("p");
        pokemonNameP.innerHTML = pokemon.name;

        pokemonIndividualDiv.appendChild(pokemonNameP)
        pokemonDiv.appendChild(pokemonIndividualDiv)
        
    });
});