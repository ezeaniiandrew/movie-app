const MY__TOKEN = "f809d7185163d1cee3d325b3d6ad6834";

import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: MY__TOKEN,
  },
};
//   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODA5ZDcxODUxNjNkMWNlZTNkMzI1YjNkNmFkNjgzNCIsInN1YiI6IjYyYmM1ZjM1YTFhOWJhMDA2MTU0YmM2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XmKybLIFOVETxQzp-_vSMjQWutQrmgWbcjSyONzBfF0",

export const getTopRatedMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
//   "https://api.themoviedb.org/3/search/movie?query=mortal&include_adult=false&language=en-US&page=1",

export const searchMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/search/movie?query=get+out&api_key=" +
        MY__TOKEN,
      options
    );

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// fetch(
//   "https://api.themoviedb.org/3/search/movie?query=m&include_adult=false&language=en-US&page=1",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
