var submit = $(".submit");
var reset = $(".reset");
var section = $(".section");
var movieSelection;
var input;



var selectedNew = $("#select1").on("change", function(){
  input = this.value;
});


submit.click(function(){
    movieCall();
 })

reset.click(function(){
  location.reload();
})


function movieCall(){
  if (input === "Movie Genre") {
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
  console.log(moviesList);
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
  section.empty();
  section.append(`<img src="https://image.tmdb.org/t/p/original/${moviesSelected.poster}" alt="movie poster" style="height:400px">`)
  section.append("<br>")
  section.append('<span style="font-weight:bold;font-size:30px">' + moviesSelected.titles + '</span>')
  section.append("<br>")
  section.append(moviesSelected.overview);
  

  console.log(moviesSelected.titles); // append to html class
  console.log(moviesSelected.overview); // append to html class
  console.log(moviesSelected.poster); // append to html class

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

