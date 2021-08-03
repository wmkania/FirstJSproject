var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("Add a new pokemon.");
    }
  }
  function getAll() {
    return pokemonList;
  }


  function addListItem(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {

      var $row = $(".row");
      var $card = $('<div class="card" style="width:200px"></div>');
      var $image = $(
        '<img class="card-img-top" alt="Card image" style="width:100%" />'
      );
      $image.attr("src", pokemon.imageUrlFront);
      var $cardBody = $('<div class="card-body"></div>');
      var $cardTitle = $("<h4 class='card-title' >" + pokemon.name + "</h4>");
      var $seeProfile = $(
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">See detals</button>'
      );

      $row.append($card);
      $card.append($cardBody);
      $cardBody.append($cardTitle);
      $cardBody.append($image);
      $cardBody.append($seeProfile);
      $seeProfile.on("click", function (event) {
        showDetails(pokemon);
      });
    });
  }


  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
      showModal(item);
    });
  }

  function loadList() {
    return $.ajax(apiUrl)
      .then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return $.ajax(url)
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrlFront = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        //loop for each ofthe pokemon types.
        //Also changing the background color depend on each pokemon type.
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
        item.types = [];
        details.types.forEach(function (i) {
        item.types.push(i.type.name);
        });
        if (item.types.includes("grass")) {
          $(".modal-header").css("color", "green");
          // $listItem.css("color", "lightgreen");
          // $(this).css('color', 'red');
        } else if (item.types.includes("fire")) {
          $(".modal-header").css("color", "red");
        } else if (item.types.includes("psychic")) {
          $(".modal-header").css("color", "#FF69B4");
        } else if (item.types.includes("poison")) {
          $(".modal-header").css("color", "purple");
        } else if (item.types.includes("water")) {
          $(".modal-header").css("color", "blue");
        } else if (item.types.includes("bug")) {
          $(".modal-header").css("color", "#3f000f");
        } else if (item.types.includes("rock")) {
          $(".modal-header").css("color", "#BC8F8F");
        } else if (item.types.includes("flying")) {
          $(".modal-header").css("color", "#2F4F4F");
        } else if (item.types.includes("electric")) {
          $(".modal-header").css("color", "gold");
        } else if (item.types.includes("ice")) {
          $(".modal-header").css("color", "#4169E1");
        } else if (item.types.includes("ghost")) {
          $(".modal-header").css("color", "#8B008B");
        } else if (item.types.includes("ground")) {
          $(".modal-header").css("color", "#D2B48C");
        } else if (item.types.includes("fairy")) {
          $(".modal-header").css("color", "#EE82EE");
        } else if (item.types.includes("steel")) {
          $(".modal-header").css("color", "#708090");
        }
        //loop to get the abilities of a selected pokemon
        item.abilities = [];
        for (var i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }

        item.weight = details.weight;
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  // show the modal content
  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");
    $modalContainer = $("#modal-container");
    //clear existing content of the model
    //modalHeader.empty();
    //modalTitle.empty();
    //modalBody.empty();

    //creating element for name in modal content
    let nameElement = $("<h1>" + item.name + "</h1>");
    // // creating img in modal content
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", item.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr("src", item.imageUrlBack);
    // //creating element for height in modal content
    let heightElement = $("<p>" + "height : " + item.height + "</p>");
    // //creating element for weight in modal content
    let weightElement = $("<p>" + "weight : " + item.weight + "</p>");
    // //creating element for type in modal content
    let typesElement = $("<p>" + "types : " + item.types + "</p>");
    // //creating element for abilities in modal content
    let abilitiesElement = $("<p>" + "abilities : " + item.abilities + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
  };
})();
pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
