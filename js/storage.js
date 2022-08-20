//Save results to local storage

var movieInfo = localStorage.getItem("movieInfo");
if (movieInfo === null){

//if no movieInfo, create a new array
movieInfo = [];

//Parse movieInfo
} else {
  movieInfo = JSON.parse(movieInfo);
}

//append moviesSelected object to movieInfo
movieInfo.push(movieSelected);

//stringify movieInfo and store into local storage

var newMovie = JSON.stringify(movieInfo);
localStorage.setItem("movieInfo", newMovie);