const API_KEY = "0583f3b4cc1a2e3401ee6d32469c1739";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,  
    fetchHorrorMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=27 `,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=213 `,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchRomanceMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchActionMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDocumentaries:  `/discover/movie?api_key=${API_KEY}&with_genres=27 `,
}

export default requests;