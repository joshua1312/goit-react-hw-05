
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import api from "../../movie-api";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

function MoviesPage({ errorMessage }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query") || "";

    const handleSearch = (topic) => {
        if (!topic) {
            toast.error(errorMessage || "Please enter search term!");
            return;
        }
        setSearchParams({ query: topic });
    };

    useEffect(() => {
        if (!searchQuery) return;

        const fetchMovies = async () => {
            setMovies([]);
            setLoading(true);
            setError(false);

            try {
                const data = await api.fetchMovies(searchQuery);
                setMovies(data.results);
                if (data.results.length === 0) {
                    toast.error(
                        errorMessage ||
                        "Sorry, there are no images matching your search query. Please try again!"
                    );
                }
            } catch (error) {
                setError(true);
                toast.error(
                    errorMessage ||
                    "Oops! An error occurred while fetching the images. Please try again!"
                );
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, [searchQuery, errorMessage]);

    return (
        <div className={css.moviesPage}>
            <SearchForm onSearch={handleSearch} />
            {loading && <Loader />}
            {error && <Toaster />}
            {movies.length > 0 && <MoviesList items={movies} />}
        </div>
    );
}

export default MoviesPage;
