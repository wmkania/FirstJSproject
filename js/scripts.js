let pokemonList=[
{name: "bulbasaur", height: 7, type: ['grass', 'poison']},
{name: "squirtle", height: 4, type: 'water'},
{name: "jigglypuff", height: 2, type: ['fairy', 'normal']}
];

for (let i = 0; i < pokemonList.length; i++) {
        document.write(pokemonList[i].name);
    if(pokemonList[i].height >= 7){
      result = "This is the biggest pokemon";
      document.write("This is the biggest pokemon!");
    }
    document.write("<br/>");

}
