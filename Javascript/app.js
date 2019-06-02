
//need to add button id's to HTML
 
 var inputRecipe = ["tomato", "chicken", "green beans", "keto", "vegan"]

        console.log("working")
        var searchEdamam = function(chili) {
          //Link to Edamam API
     var queryURL = "https://api.edamam.com/search?q=" + inputRecipe + "&app_id=997d5b1e&app_key=742f4d94c84ebe56fad332789e47f512";

     $.ajax({
       url: queryURL,
       method: "GET"
     }).then(function(chili) {
       console.log(chili)
     });
     
   };
   $(".recipe-search").keyup(function(){
    var userRecipe = $("#recipe-input").val().trim();
    inputRecipe.push(userRecipe)
    //generate random recipe using keyword
   })
   $("#recipeButton").on("click", function(){
     if(1<2

      //  .recipe-search input does not exist
      ){
      //generate random recipe from full website
      //maybe pulling keyword from an array of random keywords we provide
     }
     else{
      //generate new random recipe using keyword user provided
     }
    //generate random recipe using key word, pulled from edamam
   })

   //need to connect
   searchEdamam();
        