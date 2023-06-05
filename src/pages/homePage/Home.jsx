import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import css from "./home.module.css"

function Home() { 
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        // https://api.themoviedb.org/3/movie/popular?
       
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=f95d72194aa7d46701b715dc087a6994")
            .then(response => response.json())
            .then(posts => {
                setMovies(posts.results);
            })
    },[])
    return (
        <ul className={css.list_movie}>
            {movies.map(({ id, poster_path }) => {
                const link = `https://image.tmdb.org/t/p/original${poster_path}`;
                
                return (
                    <Link to={`/movies/${id}`}  key={id}>
                    <li id={id} className={css.list_item}>
                            <img src={link} alt="movie_poster" width='300' height='360' />
                    </li>
                     </Link>
                 
                )})
} 
        </ul>  
        
        
    )
        
    
}
export default Home