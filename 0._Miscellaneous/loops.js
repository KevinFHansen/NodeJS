const barbieMoive = [ 
    {name: "Swan lake", year: 2001,
    name: "Princess and the pauper", year: 2008, 
    name: "Fairies", year: 2014},
 ];

//forEach
//map, reduce, filter
//

const ratedBarbieMOvies = barbieMoive.map((movie) =>{
    movie.rating = 10;
    return movie;
    
});

const filteredMovies = barbieMoive.filter((movie)=>{
    return movie.year > 2005;
})
console.log(ratedBarbieMOvies)
