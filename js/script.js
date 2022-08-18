


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

function yelpCall(selection){
  // const yelpHead = new Headers();
  // yelpHead.append({'Authorization:', 'Bearer SPNMpxXoVwWFRBSY8zqfCfCXLxqvHJ9XMZsyQW9uMP5mp7tQR-QMp3CVmg46fQIdTdZy78oZV6FThsPFPIHJ8azQxoe4jieedC7V_M5BEfZnctm4npIJ33W7oBf7YnYx'});

//var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/categories";
var foodArray = ["italian","french","bbq","fast food"];
var cuisine;
var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+cuisine+"&latitude=33.787914&longitude=-117.853104";
 
if (selection = movies[0]){
  
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
yelpCall();


