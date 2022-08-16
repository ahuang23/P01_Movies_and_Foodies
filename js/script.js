

function movieCall(){
  var genre="";
  // var tmdbURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=eea5a34dde91516aaed29972492b8943"; 
  var tmdbURL = "https://api.themoviedb.org/3/genre/movie/discover?api_key=eea5a34dde91516aaed29972492b8943";


fetch(tmdbURL, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });






}

movieCall();