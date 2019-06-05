var inputRecipe;



$("#recipeButton").on("click", function () {
  $("#recipe-card").empty();

  $.ajax({
    url: "https://api.edamam.com/search?q=" + "chicken" + "&app_id=997d5b1e&app_key=742f4d94c84ebe56fad332789e47f512", //"chicken" will be replaced with inputRecipe
    method: "GET"
  }).then(function (response) {
    console.log(response);

    var randomRecipe = Math.floor((Math.random() * 10) + 1);
    var recipeArray = response.hits[randomRecipe].recipe

    var recipePhoto = recipeArray.image;
    var ingredient = recipeArray.ingredientLines;
    var recipeTitle = recipeArray.label;
    var directions = recipeArray.url;

    //need to create if/else statement to set inputRecipe = variables based on genre of movie inputed

    //puts recipe Title onto the page
    var recipeTitleText = $("<p>").text(recipeTitle);
    $("#recipe-card").append(recipeTitleText);

    //puts recipe image onto the page
    var image = $("<img>").attr("src", recipePhoto);
    $("#recipe-card").append(image);

    //puts ingredient list onto the page
    var ingredientText = $("<p>").text(ingredient);
    $("#recipe-card").append(ingredientText);

    //creates link to the original recipe source, giving directions
    var directionText = $("<a>").attr({
      "href": directions,
      "target": "_blank"
    });
    $(directionText).text("Like this recipe?")
    $("#recipe-card").append(directionText);



  });

});
