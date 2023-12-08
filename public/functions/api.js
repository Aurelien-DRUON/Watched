const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjJmYzEwZmViNWFkZjQ0MTI4OTY1YTkyNjhlMWM3NyIsInN1YiI6IjY1NWRkNDc1MjY2Nzc4MDBlYmNiNDA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JRk-B9ntiAiTBW6quYt2NpZM69KaYPSSZsAcZzexFW8",
  },
};

export async function getAllFlims() {
  return fetch(
    "https://api.themoviedb.org/3/movie/popular?language=fr",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
}

export async function getSearchFlim({ text }) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${text}&language=fr`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
}

export async function getFlim({ id }) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr`, options)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
}
