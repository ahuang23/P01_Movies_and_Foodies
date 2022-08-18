var input = "Mystery";
function movieCall(){
  var genre="";
  // var tmdbURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=eea5a34dde91516aaed29972492b8943"; 
  // var tmdbURL = "https://api.themoviedb.org/3/genre/movie/discover?api_key=eea5a34dde91516aaed29972492b8943";
//   var tmdbURL = "https://api.themoviedb.org/3/movie/550?api_key=eea5a34dde91516aaed29972492b8943";


// fetch(tmdbURL, {
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });







}

function yelpCall(input){
  
 
  // const yelpHead = new Headers();
  // yelpHead.append({'Authorization:', 'Bearer SPNMpxXoVwWFRBSY8zqfCfCXLxqvHJ9XMZsyQW9uMP5mp7tQR-QMp3CVmg46fQIdTdZy78oZV6FThsPFPIHJ8azQxoe4jieedC7V_M5BEfZnctm4npIJ33W7oBf7YnYx'});

//var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/categories";
var movieArray = ["Action","Comedy","Horror","Mystery","Romance"];
var foodArray = ["italian","french","bbq","fast food"];
var food = {
  "Action" : "fast food",
  "Comedy" : ["prank1","prank2","prank3"],
  "Horror" : "bbq",
  "Mystery": ["one","two","three"],
  "Romance" : "italian"
}
var cuisine;
var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+cuisine+"&latitude=33.787914&longitude=-117.853104";
 
for (const [key,value] of Object.entries(food)){
  if (key === input){
    // console.log(food.Comedy);
    if (input === food.Comedy){
      rand = Math.floor(Math.random() * 3);
      cuisine = food.Comedy[1];
      console.log(cuisine);

    }
    else if (input === food.Mystery){
      rand = Math.floor(Math.random() * 3);
      cuisine = food.Mystery[1];
      console.log(cuisine);
    }
    cuisine = key;
  }
}

  fetch(yelpURL, {
    method: 'GET',
    headers: new Headers({'Authorization':'Bearer Kgw9XiDAFyVaMDW0G_hv5b5VJqWZ1KMM4ARW4zQBbEd_hDVtGZqeRpuRGF9IXhwTJbC2IzabNk1lDpqhQtwe6XtjDsLfmvgJTUiDpucTb3-cUkcIgIWXGGUqHWL8YnYx', 
  'Content-Type':'application/json'})
  })
  // ,'Access-Control-Allow-Origin':'*'

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });


}

movieCall();
yelpCall(input);


