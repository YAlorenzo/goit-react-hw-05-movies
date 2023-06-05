
import { lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";

const Movies = lazy(() => import("../pages/moviesPage/Movies"));
const Home = lazy(() => import("../pages/homePage/Home"));
const MovieDetails = lazy(() => import("pages/movieDetails/MovieDetails"));
const Cast = lazy(() => import("pages/movieDetails/Cast"));
const Reviews = lazy(() => import("pages/movieDetails/Reviews"));
const Header = lazy(() => import("./headerApp/Header"));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movies" element={<Movies />} />

            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<Home />} />
          </Routes>
    </Suspense>
          
    </div>
   
  );
};