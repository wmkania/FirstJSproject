var pokemonRepository = (function () {
var pokemonList = [
{name: "bulbasaur", height: 7, type: ['grass', 'poison']},
{name: "squirtle", height: 4, type: 'water'},
{name: "jigglypuff", height: 2, type: ['fairy', 'normal']},
{name: "Pikachu", height: 1, type: ['electricity']},
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
  button.addEventListener("click", function (showDetails) {
  console.log(pokemon.name);
  });

}

function showDetails(pokemon) {
  console.log(pokemon.name);
}

return {
  add: add,
  addListItem: addListItem,
  getAll: getAll,

  };

})();




pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);


});
