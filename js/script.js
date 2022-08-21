var submit = $(".submit");
var reset = $(".reset");
var section = $(".section");
var section2 = $(".section2");
var modal = $("#errorModal");
var closeit = $("#closeModal");
var movieSelection;
var input;
var price;

var selectedNew = $("#select1").on("change", function(){
  input = this.value;
});
var selecedPrice = $("#select2").on("change", function(){
  price = this.value;
  console.log(price);
});

submit.click(function(){
  yelpCall();  
  movieCall();
 });

closeit.click(function(){
  $(modal).removeClass("is-active");
}); 

reset.click(function(){
  location.reload();
})

function yelpCall(){
  if (input == undefined) {
    $(modal).addClass("is-active");
    return;
  }
 
var food = {
  "Action" : "fast food",
  "Comedy" : ["sandwich","pizza", "ice cream"],
  "Horror" : "bbq",
  "Mystery": ["hot dog","wings","diner"],
  "Romance" : "french"
}
var cuisine;
var rand = Math.floor(Math.random() * 2);
var randRest = Math.floor(Math.random() * 5);

if(!price){
  price = 1;
}

for (var prop in food){
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

var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+cuisine+"&price="+price+"&latitude=33.787914&longitude=-117.853104&limit=10";
 
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
      var imgURL = pick.image_url;
      var address = {
        "address1" : pick.location.address1,
        "address2" : pick.location.address2,
        "city" : pick.location.city,
        "state" : pick.location.state,
        "zip" : pick.location.zip_code,
        "phone" : pick.phone
      };
    

      section2.empty();
      var pickImg = new Image();
      pickImg.src = imgURL
      pickImg.style = "height: 400px";


      var phoneFormat = address.phone.slice(-10);
      
      section2.append(pickImg);
      section2.append("<br>")
      section2.append('<span style="font-weight:bold;font-size:30px">' + restuarant + '</span>')
      section2.append("<br>")
      section2.append(address.address1);
      section2.append("<br>")
      if (address.address2){
      section2.append(address.address2);
      section2.append("<br>")
      }
      section2.append(address.city+", "+address.state+" "+address.zip);
      section2.append("<br>")
      section2.append(phoneFormat);
      
    });
}

function movieCall(){
  if (input == undefined) {
    $(modal).addClass("is-active");
    return;
  }
  else if (input === "Action") {
  movieSelection = 28;
  }
  else if (input === "Comedy") {
  movieSelection = 35;
  }
  else if (input === "Horror") {
  movieSelection = 27;
  }
  else if (input === "Mystery") {
  movieSelection = 9648;
  }
  else if (input === "Romance") {
  movieSelection = 10749;
  } 
  
  var moviesList = "https://api.themoviedb.org/3/discover/movie?api_key=eea5a34dde91516aaed29972492b8943&language=en-US&with_genres=" + movieSelection;
  // console.log(moviesList);
  fetch (moviesList, {
  })
    .then(function (response){
      return response.json();
    })
    .then(function (data){
      // console.log(data);
    var randomNum = Math.floor(Math.random() * 10);
    // console.log(randomNum);
    var moviesSelected = {
      titles: data.results[randomNum].title,
      overview: data.results[randomNum].overview,
      poster: data.results[randomNum].poster_path
  }  
  section.empty();
  section.append(`<img src="https://image.tmdb.org/t/p/original/${moviesSelected.poster}" alt="movie poster" style="height:400px">`)
  section.append("<br>")
  section.append('<span style="font-weight:bold;font-size:30px">' + moviesSelected.titles + '</span>')
  section.append("<br>")
  section.append(moviesSelected.overview);
  
  // console.log(moviesSelected.titles); // append to html class
  // console.log(moviesSelected.overview); // append to html class
  // console.log(moviesSelected.poster); // append to html class
  // var imageLink = 
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
  
