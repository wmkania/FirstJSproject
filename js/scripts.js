var pokemonRepository = (function () {
var pokemonList=[
{name: "bulbasaur", height: 7, type: ['grass', 'poison']},
{name: "squirtle", height: 4, type: 'water'},
{name: "jigglypuff", height: 2, type: ['fairy', 'normal']}
];

function getAll () {
  return pokemonList;
}

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Eve' });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  let pokemonlist = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = 'placeholder';
  button.classList.add('button-class');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);

});



pokemonRepository.getAll().forEach(function(pokemon) {
  console.log('This is' + ' ' + pokemon.name + ' and its type is ' + pokemon.type + '.');
});
