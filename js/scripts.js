var pokemonRepository = (function () {
var pokemonList = [
{name: "bulbasaur", height: 7, type: ['grass', 'poison']},
{name: "squirtle", height: 4, type: 'water'},
{name: "jigglypuff", height: 2, type: ['fairy', 'normal']},
];


function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll () {
  return pokemonList;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button-class');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
}

return {
  add: add,
  addListItem: addListItem,
  getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.addListItem ({name: 'Eve'});
console.log(pokemonRepository.getAll());


pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);

});
