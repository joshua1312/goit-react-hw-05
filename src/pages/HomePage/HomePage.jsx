
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import api from "../../gallery-api";
import MoviesList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

function HomePage({ errorMessage }) {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true);
                setError(false);
                const data = await api.fetchTrendMovies();
                setTrendingMovies(data.results);
                if (data.results.length === 0) {
                    toast.error(
                        errorMessage ||
                        "Sorry, there are no movies matching your search query. Please try again!"
                    );
                }
            } catch (error) {
                setError(true);
                toast.error(
                    errorMessage ||
                    "Oops! An error occurred while fetching the movies. Please try again!"
                );
            } finally {
                setLoading(false);
            }
        }
        getMovies();
    }, [errorMessage]);

    return (
        <div className={css.homePage}>
            <h2>Trending today</h2>
            {loading && <Loader />}
            {trendingMovies.length > 0 && <MoviesList items={trendingMovies} />}
            {error && <Toaster />}
        </div>
    );
}

export default HomePage;
