let pokemonList=[
{name: "bulbasaur", height: 7, type: ['grass', 'poison']},
{name: "squirtle", height: 4, type: 'water'},
{name: "jigglypuff", height: 2, type: ['fairy', 'normal']}
];

pokemonList.forEach(function(pokemon) {
  document.write("<p>"+ "This is " + " " + pokemon.name + " " + "and its type is "+ " " + pokemon.type + "." + "</p>");
});

pokemonList.forEach(function(pokemon) {
  console.log('This is' + ' ' + pokemon.name + ' and its type is ' + pokemon.type + '.');
});
