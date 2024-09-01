
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import api from "../../movie-api";
import ActorCard from "../ActorCard/ActorCard";
import css from "./MovieCast.module.css";

function MovieCast() {
    const { movieId } = useParams(); 
    const [movieCast, setMovieCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getMovieCast() {
            try {
                setLoading(true);
                setError(false);
                const data = await api.fetchMovieCast(movieId);
                setMovieCast(data.cast);
                if (data.results.length === 0) {
                    toast.error("No cast information available.");
                }

            } catch (error) {
                setError(true);
                toast.error(
                    "Oops! An error occurred while fetching the movie's cast. Please try again!"
                );
            } finally {
                setLoading(false);
            }
        }
        getMovieCast();
    }, [movieId]);

    return (
        <div className={css.movieCast}>
            {loading && <Loader />}
            {error && <Toaster />}
            {movieCast.length > 0 ? (
                <ul>
                    {movieCast.map((item) => (
                        <li key={item.id}>
                            <ActorCard actor={item} />
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && <p>No cast information available.</p>
            )}
        </div>
    );
}

export default MovieCast;
