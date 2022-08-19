//Save results to local storage

var movieInfo = localStorage.getItem("movieInfo");
if (movieInfo === null){

//if no movieInfo, create a new array
movieInfo = [];

//Parse movieInfo
} else {
  movieInfo = JSON.parse(movieInfo);
}