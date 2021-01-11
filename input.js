import { fetchListMovie } from  "./apiService.js";

export async function displayRechercheMovie(){
    const recherche = document.querySelector('.navigation__container--left__input');
    recherche.addEventListener('input', async(event) => {
        const searchString = event.target.value.toLowerCase();
        let movieList = await fetchListMovie(searchString);
        let movieResult = movieList.results;
        let container = document.querySelector('.container')
    
        let divSearch = document.querySelector('.search-container');
        divSearch.innerHTML="";

        if(searchString.length >= 1){
            for (let i = 0; i < movieResult.length; i++) {
                let movie = document.createElement('div');
                movie.className = "movies__container--movie-search";
                let image = document.createElement('img');
                image.className = "movies__container--movie-image";
                image.src = `https://image.tmdb.org/t/p/original/${movieResult[i].poster_path}`;
                if(movieResult[i].poster_path === null){
                    image.src = './img/Logo_Netflix_Poster.jpg';
                };
                divSearch.appendChild(movie);
                movie.appendChild(image);
                
            }
            container.style.display = 'none';
        }else{
            container.style.display = "";
        }
    });
}
     
