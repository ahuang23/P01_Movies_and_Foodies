var home = $(".home");
var clear = $(".clear");
var section = $(".section");

// Buttons

// Return to Index
home.click(function(){
  window.location.replace("./index.html");
})

// Clear local storage
clear.click(function(){
  localStorage.removeItem("movieInfo");
  localStorage.removeItem("foodInfo");
  location.reload();
})

// Retrieve past movies
var movieHistory = localStorage.getItem("movieInfo");
movieStorage = JSON.parse(movieHistory);

// Retrieve past restaurants
var foodHistory = localStorage.getItem("foodInfo");
foodStorage = JSON.parse(foodHistory);

// Append retrieved items to page
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