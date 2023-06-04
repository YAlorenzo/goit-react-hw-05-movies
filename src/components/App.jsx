import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/Home";
import Movies from "../pages/moviesPage/Movies";
import MovieDetails from "pages/movieDetails/MovieDetails";
import Cast from "pages/movieDetails/Cast";
import Reviews from "pages/movieDetails/Reviews";
import Header from "./headerApp/Header";
function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
           <Route path="cast" element={<Cast />} />
           <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}
export default App