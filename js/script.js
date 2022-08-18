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

