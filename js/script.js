

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

function groceryCall(){
  var yelpURL = "https://api.yelp.com/v3/categories/hotdogs";
 
  fetch(yelpURL, {
    method: 'POST',
    headers: {
    "Authorization": "Bearer SPNMpxXoVwWFRBSY8zqfCfCXLxqvHJ9XMZsyQW9uMP5mp7tQR-QMp3CVmg46fQIdTdZy78oZV6FThsPFPIHJ8azQxoe4jieedC7V_M5BEfZnctm4npIJ33W7oBf7YnYx",
  },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

}

movieCall();
groceryCall();


