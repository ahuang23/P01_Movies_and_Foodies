var input = "Action";
function movieCall(){
  var genre="";






}

function yelpCall(input){
  
 
  // const yelpHead = new Headers();
  // yelpHead.append({'Authorization:', 'Bearer SPNMpxXoVwWFRBSY8zqfCfCXLxqvHJ9XMZsyQW9uMP5mp7tQR-QMp3CVmg46fQIdTdZy78oZV6FThsPFPIHJ8azQxoe4jieedC7V_M5BEfZnctm4npIJ33W7oBf7YnYx'});

//var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/categories";


var food = {
  "Action" : "fast food",
  "Comedy" : ["sandwich","pizza", "ice cream"],
  "Horror" : "bbq",
  "Mystery": ["hot dog","Italian",""],
  "Romance" : "French"
}
var cuisine;
 


for (var prop in food){
  var rand = Math.floor(Math.random() * 3);
 if ((prop === input) && (prop === "Mystery")){
    cuisine = food.Mystery[rand];
 }
 else if ((prop === input) && (prop === "Comedy")){
    cuisine = food.Comedy[rand];
 }
  else if (prop === input){
    cuisine = food[prop];
  }
  
}

console.log(cuisine);

var randRest = Math.floor(Math.random() * 20);





var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+cuisine+"&latitude=33.787914&longitude=-117.853104";



  fetch(yelpURL, {
    method: 'GET',
    headers: new Headers({'Authorization':'Bearer Kgw9XiDAFyVaMDW0G_hv5b5VJqWZ1KMM4ARW4zQBbEd_hDVtGZqeRpuRGF9IXhwTJbC2IzabNk1lDpqhQtwe6XtjDsLfmvgJTUiDpucTb3-cUkcIgIWXGGUqHWL8YnYx', 
  'Content-Type':'application/json'})
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var pick = data.businesses[randRest];
      var restuarant = pick.name;
      var address = pick.location;
      var imgURL = pick.image_url;

      console.log(pick);
      console.log(restuarant);
      console.log(address);
      console.log(imgURL); 
    });


}


      // var iconForNow = new Image(getForIcon);
      // iconForNow.src = "https://openweathermap.org/img/wn/" + getForIcon + "@2x.png";
      // iconForNow.width = 100;



movieCall();
yelpCall(input);


var searchBtn = $(".searchBtn");
var selected = $("#select1").on("change", function(){
  console.log(this.value);
});
var input = selected.val();
console.log(input);
// var input = "Romance"; // Connect with html class

// searchBtn.click(movieCall());


function movieCall(){
  if (input = "Action") {
  movieSelection = 28;
  }
  else if (input == "Comedy") {
  movieSelection = 35;
  }
  else if (input == "Horror") {
  movieSelection = 27;
  }
  else if (input == "Mystery") {
  movieSelection = 9648;
  }
  else if (input == "Romance") {
  movieSelection = 10749;
  }

  var moviesList = "https://api.themoviedb.org/3/discover/movie?api_key=eea5a34dde91516aaed29972492b8943&language=en-US&with_genres=" + movieSelection;

  fetch (moviesList, {
  })
    .then(function (response){
      return response.json();
    })
    .then(function (data){
      console.log(data);

    var randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);

    var moviesSelected = {
      titles: data.results[randomNum].title,
      overview: data.results[randomNum].overview,
      poster: data.results[randomNum].poster_path
  }  

  console.log(moviesSelected.titles); // append to html class
  console.log(moviesSelected.overview); // append to html class
  console.log(moviesSelected.poster); // append to html class

  //link to poster
  // var imageLink = "image.tmdb.org/t/p/original/" + poster;
  // console.log(imageLink);


  // Save results to local storage
  var movieInfo = localStorage.getItem("movieInfo");
  if (movieInfo === null){

  // If no movieInfo, create a new array  
    movieInfo = [];

  // Parse movieInfo  
  } else {
    movieInfo = JSON.parse(movieInfo);
  }

  //Append moviesSelected object to movieInfo
  movieInfo.push(moviesSelected);

  // Stringify movieInfo and store into local storage
  var newMovie = JSON.stringify(movieInfo);
  localStorage.setItem("movieInfo", newMovie);


  });
}

