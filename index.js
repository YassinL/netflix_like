import fetchMovie from "./apiService.js";
import Header from "./components/Header.mjs";
import { ModaleSeries } from "./components/Modales.mjs";
import { ModaleMovies } from "./components/Modales.mjs";
import { fetchNetflixOriginals } from "./apiService.js";
import { fetchTrending } from "./apiService.js";
import { fetchTopRated } from "./apiService.js";
import { fetchByGenreMovies } from "./apiService.js";
import { fetchNetflixDescription } from "./apiService.js";
import { displayRechercheMovie } from "./input.js";

// APPEL DE LA FONCTION displayRechercheMovie IMPORTEE DE input.js POUR LA RECHERCHE D'UN FILM
// PAR SON NOM DANS LA BARRE DE RECHERCHE ///////////////////////////////////////////////////
displayRechercheMovie();

// DIFFERENTES METHODES POUR RECUPERER LES INFOS POUR LE HEADER /////////////////////////////

// (() => {
//Callback
//   const getResponse = (data) => {
//     return data;
//   };
//   try {
//     let movie = fetchMovie(157336, getResponse);
//     console.log(movie);
//     document.getElementById("header").innerHTML = Header(movie);
//     document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//   }
//   catch(e){
//     console.log(e)
//   }

// })();

//2
// (() => {
//     let movie = fetchMovie(157336).then(movie => {
//         console.log(movie)
//         document.getElementById("header").innerHTML = Header(movie);
//         document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//     })

// })();

//3
(async () => {
  let movie = await fetchMovie(181812);
  document.getElementById("header").innerHTML = Header(movie);
  document.getElementById(
    "header"
  ).style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();

// SERIES NETFLIX ORIGINALS ////////////////////////////////////////////////////////////////
(async () => {
  let netflixOriginals = await fetchNetflixOriginals();
  let container = document.getElementById("movies-container-1");
  let movies = netflixOriginals.results;

  for (let i = 0; i < movies.length; i++) {
    let movie = document.createElement("div");
    movie.className = "movies__container--movie__netflix";
    let image = document.createElement("img");
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
    if (movies[i].poster_path === null) {
      image.src = "./img/Logo_Netflix.jpg";
    }
    let id = movies[i].id;
    container.appendChild(movie);
    movie.appendChild(image);

    let movieName = await fetchNetflixDescription(id);

    image.addEventListener("click", (event) => {
      event.preventDefault();
      let modaleNetflixOriginals = document.createElement("div");
      modaleNetflixOriginals.id = "modaleNetflixOriginals";
      document.body.appendChild(modaleNetflixOriginals);

      modaleNetflixOriginals.innerHTML = ModaleSeries(movieName);
      modaleNetflixOriginals.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;
      modaleNetflixOriginals.style.backgroundSize = "cover";
      let button = modaleNetflixOriginals.querySelector(".modaleButton");
      button.addEventListener("click", (event) => {
        event.preventDefault();
        let modale = modaleNetflixOriginals.querySelector("#modale");
        modaleNetflixOriginals.removeChild(modale);
        modaleNetflixOriginals.remove("backgroundImage");
      });
    });
  }
})();

const displayMovie = (movies, container) => {
  let movie = document.createElement("div");
  movie.className = "movies__container--movie";
  let image = document.createElement("img");
  image.className = "movies__container--movie-image";
  image.src = `https://image.tmdb.org/t/p/original/${movies[i].backdrop_path}`;
  if (movies[i].backdrop_path === null) {
    image.src = "./img/Logo_Netflix.jpg";
  }
  container.appendChild(movie);
  movie.appendChild(image);
};

// FILMS TENDANCE ////////////////////////////////////////////////////////////////////////
(async () => {
  let netflixTrending = await fetchTrending();
  let container = document.getElementById("movies-container-2");
  let movies = netflixTrending.results;

  for (let i = 0; i < movies.length; i++) {
    // let movie = document.createElement('div');
    // movie.className = "movies__container--movie";
    // let image = document.createElement('img');
    // image.className = "movies__container--movie-image";
    // image.src = `https://image.tmdb.org/t/p/original/${movies[i].backdrop_path}`;
    // if(movies[i].backdrop_path === null){
    //   image.src = './img/Logo_Netflix.jpg';
    // }
    // container.appendChild(movie);
    // movie.appendChild(image);
    displayMovie(movies[i], container);

    let id = movies[i].id;
    let movieName = await fetchMovie(id);

    image.addEventListener("click", (event) => {
      event.preventDefault();
      let modaleTrendingNow = document.createElement("div");
      modaleTrendingNow.id = "modaleTrendingNow";
      document.body.appendChild(modaleTrendingNow);

      modaleTrendingNow.innerHTML = ModaleMovies(movieName);
      modaleTrendingNow.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;
      modaleTrendingNow.style.backgroundSize = "cover";
      let button = modaleTrendingNow.querySelector(".modaleButton");
      button.addEventListener("click", (event) => {
        event.preventDefault();
        let modale = modaleTrendingNow.querySelector("#modale");
        modaleTrendingNow.removeChild(modale);
        modaleTrendingNow.remove("backgroundImage");
      });
    });
  }
})();

// FILMS LES MIEUX NOTES //////////////////////////////////////////////////////////////
(async () => {
  let netflixTopRated = await fetchTopRated();
  let container = document.getElementById("movies-container-3");
  let movies = netflixTopRated.results;

  for (let i = 0; i < movies.length; i++) {
    let movie = document.createElement("div");
    movie.className = "movies__container--movie";
    let image = document.createElement("img");
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].backdrop_path}`;
    let id = movies[i].id;
    container.appendChild(movie);
    movie.appendChild(image);
    if (movies[i].backdrop_path === null) {
      image.src = "./img/Logo_Netflix.jpg";
    }

    let movieName = await fetchMovie(id);

    image.addEventListener("click", (event) => {
      event.preventDefault();
      let modaleTopRated = document.createElement("div");
      modaleTopRated.id = "modaleTopRated";
      document.body.appendChild(modaleTopRated);

      modaleTopRated.innerHTML = ModaleMovies(movieName);
      modaleTopRated.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;
      modaleTopRated.style.backgroundSize = "cover";
      let button = modaleTopRated.querySelector(".modaleButton");
      button.addEventListener("click", (event) => {
        event.preventDefault();
        let modale = modaleTopRated.querySelector("#modale");
        modaleTopRated.removeChild(modale);
        modaleTopRated.remove("backgroundImage");
      });
    });
  }
})();

// FILMS PAR GENRE ////////////////////////////////////////////////////////////////////

// Films par genre : ACTION //////////////////////////////////////////////////////////
(async () => {
  let netflixByGenreAction = await fetchByGenreMovies(28);
  let container = document.getElementById("movies-container-4");
  let movies = netflixByGenreAction.results;

  for (let i = 0; i < movies.length; i++) {
    let movie = document.createElement("div");
    movie.className = "movies__container--movie";
    let image = document.createElement("img");
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].backdrop_path}`;
    let id = movies[i].id;
    container.appendChild(movie);
    movie.appendChild(image);
    if (movies[i].backdrop_path === null) {
      image.src = "./img/Logo_Netflix.jpg";
    }

    let movieName = await fetchMovie(id);

    image.addEventListener("click", (event) => {
      event.preventDefault();
      let modaleActionMovies = document.createElement("div");
      modaleActionMovies.id = "modaleActionMovies";
      document.body.appendChild(modaleActionMovies);

      modaleActionMovies.innerHTML = ModaleMovies(movieName);
      modaleActionMovies.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;
      modaleActionMovies.style.backgroundSize = "cover";
      let button = modaleActionMovies.querySelector(".modaleButton");
      button.addEventListener("click", (event) => {
        event.preventDefault();
        let modale = modaleActionMovies.querySelector("#modale");
        modaleActionMovies.removeChild(modale);
        modaleActionMovies.remove("backgroundImage");
      });
    });
  }
})();

// Films par genre : COMEDY /////////////////////////////////////////////////////////////
(async () => {
  let netflixByGenreComedy = await fetchByGenreMovies(35);
  let container = document.getElementById("movies-container-5");
  let movies = netflixByGenreComedy.results;

  for (let i = 0; i < movies.length; i++) {
    let movie = document.createElement("div");
    movie.className = "movies__container--movie";
    let image = document.createElement("img");
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].backdrop_path}`;
    let id = movies[i].id;
    container.appendChild(movie);
    movie.appendChild(image);
    if (movies[i].backdrop_path === null) {
      image.src = "./img/Logo_Netflix.jpg";
    }

    let movieName = await fetchMovie(id);

    image.addEventListener("click", (event) => {
      event.preventDefault();
      let modaleComedies = document.createElement("div");
      modaleComedies.id = "modaleComedies";
      document.body.appendChild(modaleComedies);

      modaleComedies.innerHTML = ModaleMovies(movieName);
      modaleComedies.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;
      modaleComedies.style.backgroundSize = "cover";
      let button = modaleComedies.querySelector(".modaleButton");
      button.addEventListener("click", (event) => {
        event.preventDefault();
        let modale = modaleComedies.querySelector("#modale");
        modaleComedies.removeChild(modale);
        modaleComedies.remove("backgroundImage");
      });
    });
  }
})();

// Films par genre : DOCUMENTARY ///////////////////////////////////////////////////////
(async () => {
  let netflixByGenreDocumentary = await fetchByGenreMovies(99);
  let container = document.getElementById("movies-container-6");
  let movies = netflixByGenreDocumentary.results;

  for (let i = 0; i < movies.length; i++) {
    let movie = document.createElement("div");
    movie.className = "movies__container--movie";
    let image = document.createElement("img");
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].backdrop_path}`;
    let id = movies[i].id;
    container.appendChild(movie);
    movie.appendChild(image);
    if (movies[i].backdrop_path === null) {
      image.src = "./img/Logo_Netflix.jpg";
    }

    let movieName = await fetchMovie(id);

    image.addEventListener("click", (event) => {
      event.preventDefault();
      let modaleDocumentaries = document.createElement("div");
      modaleDocumentaries.id = "modaleDocumentaries";
      document.body.appendChild(modaleDocumentaries);

      modaleDocumentaries.innerHTML = ModaleMovies(movieName);
      modaleDocumentaries.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;
      modaleDocumentaries.style.backgroundSize = "cover";
      let button = modaleDocumentaries.querySelector(".modaleButton");
      button.addEventListener("click", (event) => {
        event.preventDefault();
        let modale = modaleDocumentaries.querySelector("#modale");
        modaleDocumentaries.removeChild(modale);
        modaleDocumentaries.remove("backgroundImage");
      });
    });
  }
})();
