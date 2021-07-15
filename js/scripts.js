let pokemonRepository = (function () {
  let pokedexPokemonList = document.querySelector('.pokemon-list');
  let modal = document.query('#modal-container');
  let pokemonName = document.createElement('h1');
});


function add(pokemon) {
  typeof pokemon == 'object' && 'name' in pokemon ? pokemonList.push(pokemon) : console.log('pokemon not found')
  };


function addListItem(pokemon) {
  let pokemonItem = document.createElement('li');
      pokemonItem.classList.add('group-list-item');
  let pokemonButton = document.createElement('button');
      pokemonButton.innerHTML = pokemon.name();
      pokemonButton.type = 'button';
  pokedexPokemonList.appendChild(pokemonItem);
  pokemonItem.appendChild(pokemonButton);
  pokemonButton.addEventListener('click', function () {
    showDetails(pokemon);
  });
}



function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    pokemonName.innerHTML = pokemon.name;
    pokemonHeight.innerHTML = 'Height: ' + pokemon.height;
    pokemonType.innerHTML = 'Type: ' + pokemon.types;
    pokeImage.src = pokemon.imageUrl;
    });
}


function loadList() {
const loading = document.createElement('p');
loading.innerText = "loading"
document.querySelector(".pokemon-list").append(loading);

return fetch(apiUrl).then(function (response) {
  return response.json();
}).then(function (json) {
  json.results.forEach(function (item) {
    let pokemon = {
      name: item.name,
      detailsUrl: item.url,
    };
      add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
}

function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types[0].type.name;
    }).catch(function (e) {
      console.error(e);

    });

}

     function search() {
      let searchInput = document.querySelector('#search-bar');

      searchInput.addEventListener('input', function() {
        // Adds a Bootstrap class.
        let pokemonList = document.querySelectorAll('.group-list-item');
        let searchText = searchInput.value.toLowerCase();

        pokemonList.forEach(function(pokemon) {
          if (pokemon.innerText.toLowerCase().indexOf(searchText) > -1) {
            pokemon.style.display = '';
          } else {
            pokemon.style.display = 'none';
          }
        });
      });
    }



modal.appendChild(pokemonName);
modal.appendChild(pokeHeight);
modal.appendChild(pokeType);
modal.appendChild(imageContainer);
imageContainer.appendChild(pokeImage);



    return {
    add: add,
    addListItem: addListItem,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showLoadingMessage: showLoadingMessage
    };


})();


pokemonRepository.loadList().then (function(){
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });

});
