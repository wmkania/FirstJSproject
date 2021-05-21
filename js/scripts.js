let pokemonList=[
{name: "bulbasaur", height: 7, type: ['grass', 'poison']},
{name: "squirtle", height: 4, type: 'water'},
{name: "jigglypuff", height: 2, type: ['fairy', 'normal']}
];

for (let i = 0; i < pokemonList.length; i++) {
  if(i === 0){
      console.log(pokemonList[0].name + pokemonList[0].height);
  }
  if(i === 0){
      document.write(pokemonList[0].name);
  }
}

let height = 7;
let result;
if (height >= 7) {
 result = 'This is the biggest pokemon';
 console.log('This is the biggest pokemon');
}
