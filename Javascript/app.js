var inputRecipe;
var movie;


$("#recipeButton").on("click", function () {
  $("#recipe-card").empty();
  $("#movie-card").empty();

var movie = $("#search").val().trim()
console.log ("movie " + movie)
// var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    
    // do the ajax call to OMBD
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
     
      console.log(response.Genre);
      console.log(response.Title);
      console.log(response.Plot);
  //set variables to dig into the response
  var title = response.Title;
  var poster = response.Poster;
  var plot = response.Plot; 
  var genre = response.Genre;
  // var genres = [""];
  
  //create a movie div and put it in the movie card
  //add title to the movie div
  var movieDiv = $("<p>").text(title);
  $(movieDiv).addClass("movieTitleText");
  $("#movie-card").append(movieDiv);

  // //create an element to hold the image then add image to the movie div
  var image = $("<img>").attr("src", poster);
  $("#movie-card").append(image)

  //create a new p for the plot then add plot to the movie div
  var plotPara = $("<p>").text("Plot: " + plot);
  $("#movie-card").append(plotPara);
  
  // pull the genre array and set to var genre 
  // var genre = genres.push(response.Genre[i])
      

  
    if(genre.includes("Action")){
          inputRecipe = "hamburger";
        }
        else if(genre.includes("Adventure")){
          inputRecipe = "pie";
        }
        else if(genre.includes("Drama")){
          inputRecipe = "southern"
        }
        else if(genre.includes("Romance")){
          inputRecipe = "french"
        }
        else if(genre.includes("Crime")){
          inputRecipe = "italian"
        }
        else if(genre.includes("Musical")){
          inputRecipe = "austrian"
        }
        else if(genre.includes("Fantasy")){
          inputRecipe = "cake"
        }
        else if(genre.includes("Comedy")){
          inputRecipe = "chinese"
        }
        else if(genre.includes("Animation")){
          inputRecipe = "japanese"
        }
        else if(genre.includes("Family")){
          inputRecipe = "pizza"
        }
        else if(genre.includes("Horror")){
          inputRecipe = "thai"
        }
        else if(genre.includes("Mystery")){
          inputRecipe = "mediterranean"
        }
        else if(genre.includes("Thriller")){
          inputRecipe = "middle eastern"
        }
        else{
          inputRecipe = "salad"
        }
        console.log(inputRecipe);

        $.ajax({
          url: "https://api.edamam.com/search?q=" + inputRecipe + "&app_id=997d5b1e&app_key=742f4d94c84ebe56fad332789e47f512", //"chicken" will be replaced with inputRecipe
          method: "GET"
        }).then(function (response) {
          console.log(response);
      
          var randomRecipe = Math.floor(Math.random() * 10);
          var recipeArray = response.hits[randomRecipe].recipe;
      
          var recipePhoto = recipeArray.image;
          var ingredient = recipeArray.ingredientLines;
          var recipeTitle = recipeArray.label;
          var directions = recipeArray.url;
      
          //need to create if/else statement to set inputRecipe = variables based on genre of movie inputed
      
          //puts recipe Title onto the page
          var recipeTitleText = $("<p>").text(recipeTitle);
          $(recipeTitleText).addClass("recipeTitle");
          $("#recipe-card").append(recipeTitleText);
      
          //puts recipe image onto the page
          var image = $("<img>").attr("src", recipePhoto);
          $("#recipe-card").append(image);
      
      
          var ingredientText = $("<p>").text(ingredient);
          //puts ingredient list onto the page
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
});


// displayMovieInfo();

