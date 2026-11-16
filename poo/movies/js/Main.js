import Movie from "./Movie.js";

const movieList = document.querySelector("#movie-list");

async function init() {
  try {
    const response = await fetch("./data/movies.json");

    if (!response.ok) {
      throw new Error("Could not load movies.");
    }

    const movies = await response.json();

    movies.forEach((movieData) => {
      const movie = new Movie(movieData);
      movieList.append(movie.render());
    });
  } catch (error) {
    movieList.textContent = error.message;
  }
}

init();
