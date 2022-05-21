const key = '9cfe9ab646fb12072c3c1ca898244676';

const requests = {
    requestPopular: `http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `http://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending : `http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror : `http://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adul=false`,
    requestUpComing : `http://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests;