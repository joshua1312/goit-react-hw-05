
import axios from "axios";

const API_KEY = "3b734232f0eb120d29e2615d3380a4df";

const ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjczNDIzMmYwZWIxMjBkMjllMjYxNWQzMzgwYTRkZiIsIm5iZiI6MTcyNDg2ODg1Ni43NTE1MTMsInN1YiI6IjY2Y2Y2NmYxZTBjNDExMDUzMGRkMzM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oxgc6XA_thvG67uLyVBjxLUugO5UI-2Rx7U2V03MJAo";

// Додайте заголовок Authorization до всіх запитів
axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
    return config;
});

axios.defaults.baseURL = "https://api.themoviedb.org/";

const api = {
    async fetchTrendMovies() {
        const { data } = await axios.get("/3/trending/movie/day", {
            params: {
                api_key: API_KEY,
            },
        });
        return data;
    },

    async fetchMovies(query) {
        const { data } = await axios.get("/3/search/movie", {
            params: {
                api_key: API_KEY,
                query: query,
            },
        });
        return data;
    },

    async fetchMovieById(movie_id) {
        const { data } = await axios.get(`/3/movie/${movie_id}`, {
            params: {
                api_key: API_KEY,
            },
        });
        return data;
    },

    async fetchMovieCast(movie_id) {
        const { data } = await axios.get(`/3/movie/${movie_id}/credits`, {
            params: {
                api_key: API_KEY,
            },
        });
        return data;
    },

    async fetchMovieReviews(movie_id) {
        const { data } = await axios.get(`/3/movie/${movie_id}/reviews`, {
            params: {
                api_key: API_KEY,
            },
        });
        return data;
    },
};

export default api;
