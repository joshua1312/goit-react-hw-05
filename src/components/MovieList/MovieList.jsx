
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";


const MoviesList = ({ items }) => {
    const location = useLocation();

    return (
        <div>
            <ul className={css.moviesList}>
                {items.map((item) => (
                    <li key={item.id}>{<Link to={`/movies/${item.id}`} state={location} >{item.title}</Link>}</li>
                ))}
            </ul>
        </div>
    );
};
export default MoviesList;
