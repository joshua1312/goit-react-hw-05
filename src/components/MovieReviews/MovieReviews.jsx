
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import api from "../../movie-api";
import css from "./MovieReviews.module.css";

function MovieReviews() {
    const { movieId } = useParams(); // Отримуємо movieId з параметрів маршруту
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getMovieReviews() {
            try {
                setLoading(true);
                setError(false);
                const data = await api.fetchMovieReviews(movieId);
                setReviews(data.results);
                if (data.results.length === 0) {
                    toast.error("No reviews for this movie.");
                }
            } catch (error) {
                setError(true);
                toast.error(
                    "Oops! An error occurred while fetching the reviews. Please try again!"
                );
            } finally {
                setLoading(false);
            }
        }
        getMovieReviews();
    }, [movieId]);

    return (
        <div className={css.movieReviews}>
            {loading && <Loader />}
            {error && <Toaster />}
            {reviews && reviews.length > 0 ? (
                <ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <p>
                                <span> {author} </span> <br />
                                {content}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && <p>No reviews for this movie.</p>
            )}
        </div>
    );
}

export default MovieReviews;
