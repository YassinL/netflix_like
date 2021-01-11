const APÎ_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "3a0449720017ece47d0711bc3f199995";

//1
// export function fetchMovie(movieId, cb) {
//   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;

//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       return cb(JSON.parse(xhr_object.responseText));
//     }
  
// }

//2
// export default function fetchMovie(movieId) {
//   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;

//   return new Promise((resolve, reject) => {
//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       resolve(JSON.parse(xhr_object.responseText));
//     }
//   });
// }

// export default function fetchMovie(movieId) {
//   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;
//   return fetch(url).then(res => {
//     return res.json()
//   }).then(movie => {
//       return movie;
//   })
// }

//3
export default async function fetchMovie(movieId) {
  const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;
  let res = await fetch(url);
  let movie = await res.json();
  return movie;
}

export async function fetchNetflixOriginals() {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
  let res = await fetch(url);
  let netflixOriginals = await res.json();
  return netflixOriginals;
}

export async function fetchNetflixDescription(movieId) {
  const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}`;
  let res = await fetch(url);
  let movie = await res.json();
  return movie;
}

export async function fetchTrending() {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  let res = await fetch(url);
  let netflixTrending = await res.json();
  return netflixTrending;
}

export async function fetchTopRated() {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  let res = await fetch(url);
  let netflixToprated = await res.json();
  return netflixToprated;
}

export async function fetchByGenreMovies(genre) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`;
  let res = await fetch(url);
  let netflixByGenre = await res.json();
  return netflixByGenre;
}

export async function fetchListMovie(search) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
  let res = await fetch(url);
  let netflixListMovie = await res.json();
  return netflixListMovie;
}