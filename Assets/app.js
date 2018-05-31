
var arrayStr = ["Tupac", "Destiny Child", "Biggie", "Ice Cube", "Ashanti", "Dr. Dre", "Method Man", "Eazy-e"];

// function displayGifButtons(){

  // var artist = $(this).attr("data-name");
  // var queryURL = `https://api.giphy.com/v1/gifs/search?q=${x}&api_key=Quev2SlgEST8etZgwB68Ng5VnbwW9ry8&limit=10`

  function Giphy() {

  }
  function renderButtons() {

    $("#button-view").empty();
 
    for (var i = 0; i < arrayStr.length; i++) {
 
        var a = $("<button>");
 
        a.addClass("gif");
 
        a.attr("data-name", arrayStr[i]);
 
        a.text(arrayStr[i]);
 
        $("#buttons-view").append(a);
    }
 }
 
 $("input[type='submit']").on("click",  function (event) {
    event.preventDefault();
 
    var newGif = $("input[type='text']").val().trim();
    var a = $("<button>");
 
        a.addClass("gif");
 
        a.attr("data-search", newGif);
 
        a.text(newGif);
 
        $("#buttons-view").append(a);
 

 });


  $("#buttons-view").on("click", 'button', function() {

    var x= $(this).attr('data-search');
    console.log(x);
    console.log($(this))

    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${x}&api_key=Quev2SlgEST8etZgwB68Ng5VnbwW9ry8&limit=10` 

    console.log(queryURL);


    $.ajax({url: queryURL, method: "GET"})

      .done(function(response){
        console.log(response);
            for (var i = 0; i < response.data.length; i++) {

              var Div= $("<div>")
              var p= $("<p>").prepend("<p> Rating:" + response.data[i].rating+ "</p>");

              var giphyURL = response.data[i].images.fixed_height.url;
              var newImg = $("<img>");
              newImg.attr("src", giphyURL);
             
              Div.prepend(p);
              Div.prepend(newImg);
              $("#gifs-appear-here").prepend(Div);
            }
      })

});

