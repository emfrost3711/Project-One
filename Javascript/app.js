//Link to Edamam API
 src="https://code.jquery.com/jquery-3.4.1.min.js"
 integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
 crossorigin="anonymous">

        console.log("working")
        var searchEdamam = function(recipe) {
     var queryURL = "https://api.edamam.com/search?q=italian&app_id=997d5b1e&app_key=742f4d94c84ebe56fad332789e47f512";

     $.ajax({
       url: queryURL,
       method: "GET"
     }).then(function(response) {
       console.log(response)
     });
     
   };

searchOMDB();
        