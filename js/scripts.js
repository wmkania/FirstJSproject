let pokemonList=[
  {name: "bulbasaur", height: 7, type: ['grass', 'poison']},
  {name: "squirtle", height: 4, type: 'water'},
  {name: "jigglypuff", height: 2, type: ['fairy', 'normal']}
];


for (let i = 0; i < pokemonList.length; i++) {
    if(i == 0){
    document.write(pokemonList[i].name)
   console.log(pokemonList[i].name + pokemonList[i].height);
 }

 let height = 3;
 let result;
 if (height < 3) {
   result = 'This is the smallest pokemon';
   console.log('This is the smallest pokemon!');
 }
