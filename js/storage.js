var home = $(".home");
var clear = $(".clear");
var section = $(".section");

home.click(function(){
  window.location.replace("./index.html");
})
clear.click(function(){
  localStorage.removeItem("movieInfo");
  localStorage.removeItem("foodInfo");
  location.reload();
})

var movieHistory = localStorage.getItem("movieInfo");
movieStorage = JSON.parse(movieHistory);


var foodHistory = localStorage.getItem("foodInfo");
foodStorage = JSON.parse(foodHistory);


function retrieveStorage() {
  if (movieStorage !== null) {
    for (var i = 0; i < movieStorage.length; i++) {
      var newList = "Movie: " + movieStorage[i] + " & Restaurant: " + foodStorage[i];
      section.append(newList + "<br>");
    }
  } else {
    section.append("<p>" + "<br>" + "No History to Show");
  }
}

retrieveStorage();