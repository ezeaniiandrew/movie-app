import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function searchMovies(query) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const movies = transformData(data.results.slice(0, 10));

    console.log(movies);
    return movies;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieData(url) {
  try {
    const { data } = await axios.get(`${url}?api_key=${API_KEY}`);

    const topTenMovies = data.results.slice(0, 10);

    // Extract only the title, release date, and poster image Url

    const movies = transformData(topTenMovies);

    return movies;
  } catch (error) {
    throw new Error(error.message);
  }
}

function transformData(data) {
  return data.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      tagline: movie.overview,
      releaseDate: movie.release_date,
      rating: movie.vote_average,
      posterUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
    };
  });
}

export async function getSingleMovieDetails(movieId) {
  try {
    // Ex: fetch("https://api.themoviedb.org/3/movie/{movie_id}api_key=YOUR_API_KEY")
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    const data = await response.json();

    // Only the results property from the data is being returned
    // since the information we need is under this property

    return data.genres;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function init() {
  // Gets all movie data from the API
  const URL = "https://api.themoviedb.org/3/movie/top_rated";

  let popularMoviesData;

  // Get the upcoming movies data & the Timestamp when the data was
  // last retrieved from the Movie DB API from the localStorage
  const popRetrievedData = localStorage.getItem("popular_movies");
  const popLastQueryTime = +localStorage.getItem("popular_lastQueryTime");
  const popCurrentTime = Date.now();
  const popTimeDiffInSeconds = (popCurrentTime - popLastQueryTime) / 1000;
  try {
    // Fetch the movie data from the movie db API if there is no movie data in
    // localStorage or it has been 8 hours (28800 seconds) or more since the last query

    if (!popRetrievedData || popTimeDiffInSeconds >= 28800) {
      popularMoviesData = await getMovieData(URL);

      // Store the Timestamp for when the movie data was fetched to the local storage
      const popQueryTime = Date.now();
      localStorage.setItem("popular_lastQueryTime", popQueryTime);
      localStorage.setItem("popular_movies", JSON.stringify(popularMoviesData));
    } else {
      // Movie data is already in localStorage. Just need to parse it
      popularMoviesData = JSON.parse(popRetrievedData);
    }

    return popularMoviesData;
  } catch (error) {
    console.log(`Error occurred while fetching movie data: ${error.message}`);
  }
}

async function getGenres(id) {
  const data = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
}

export async function getHeroMovie() {
  try {
    const movies = await getMovieData(
      "https://api.themoviedb.org/3/movie/top_rated",
    );

    const heroMovieIndex = Math.floor(Math.random() * 10);

    const heroMovie = movies[heroMovieIndex];

    return heroMovie;
  } catch (error) {
    console.error(error);
  }
}
