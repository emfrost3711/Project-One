
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
   $("#recipe-search").keyup(function(){
    var userRecipe = $("#recipe-search").val().trim();
    inputRecipe.push(userRecipe)
    //generate random recipe using keyword
   })
   $("#recipeButton").on("click", function(){
     //
     var userRecipe = $("#recipe-search").val().trim();
    //  needs to generate a random recipe using the array we provide
    if(userRecipe === ""){
      
    for(var i = 0; i < inputRecipe.length; i++){
      //show the picture and the recipe
      alert("YES IT WORKS " + inputRecipe[i]);
      
      

      }
    }
    else{
      inputRecipe = userRecipe;
      alert("DOES IT STILL WORK? " + inputRecipe);
    }
  });
    
      //  .recipe-search input does not exist
    
      //generate random recipe from full website
      //maybe pulling keyword from an array of random keywords we provide
   
      //generate new random recipe using keyword user provided
     
    //generate random recipe using key word, pulled from edamam
  
  

   //need to connect
   searchEdamam();

   //Don't need both the check boxes and the separate recipe and movie generators.
        