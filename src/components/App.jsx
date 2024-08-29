
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import "normalize.css";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));

const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

function App({ movies, errorMessage }) {
  return (
    <div>
      {<Navigation />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage errorMessage={errorMessage} />} />
          <Route path="/movies" element={<MoviesPage movies={movies} />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
