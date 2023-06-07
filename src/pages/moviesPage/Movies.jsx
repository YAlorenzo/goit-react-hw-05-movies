import { useEffect, useState } from "react";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import css from "./movie.module.css";
function Movies() {
    let location = useLocation();
    let navigete = useNavigate();
    const [movies, setMovies] = useState([]);
    const { movieName } = useParams();

    useEffect(() => {
        if (movieName !== undefined) {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=f95d72194aa7d46701b715dc087a6994`)
            .then(response => response.json())
            .then(posts => {
                setMovies(posts.results);
            })
            .catch(error => {
                console.log(error)
            })
        }
    },[movieName])
     
    const searchMovie = (evnt) => {
         console.log('отправил')
        evnt.preventDefault();
        const form = evnt.currentTarget;
        const text = form.elements.text.value;
        fetch(`https://api.themoviedb.org/3/search/movie?query=${text}&api_key=f95d72194aa7d46701b715dc087a6994`)
            .then(response => response.json())
            .then(posts => {
                setMovies(posts.results);
                console.log(posts.results);
            })
            .catch(error => {
                console.log(error)
            }) 
        location.search = text;
        navigete(location.search);
        navigete(`query=/${location.search}`)
    }
    
    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={searchMovie}>  
               <Link to={'/'}>
                <button type="button" className={css.button_home}>Go Back</button>
            </Link> 
                <input className={css.input_search}
                    name="text"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search movie"
                />
            </form>   
            <ul className={css.list_movie}>
            {movies.map(({ id, poster_path, title}) => {
                const link = `https://image.tmdb.org/t/p/original${poster_path}`
                
                return (
                    <Link to={`/movies/${id}`} key={id} className={css.link}>
                        <li id={id} key={id} className={css.list_item}>
                            {poster_path === null ? (
                                <div className={css.no_poster}>
                                    Opps, no poster
                               </div>
                            )
                                : (
                            <img src={link} alt="movie_poster" width='300' height='360'/>
                            )
                            }
                    
                      </li>
                    </Link>
                 
                )})
                    }
                     </ul>   
           
        
    
        </div>

       
        
    )
}
export default Movies