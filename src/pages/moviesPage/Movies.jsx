import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./movie.module.css";
function Movies() {
const [movies, setMovies] = useState([]);
    const searchMovie = (evnt) => {
        
        evnt.preventDefault();
        const form = evnt.currentTarget;
        const text = form.elements.text.value;
        fetch(`https://api.themoviedb.org/3/search/movie?query=${text}&api_key=f95d72194aa7d46701b715dc087a6994`)
            .then(response => response.json())
            .then(posts => {
                setMovies(posts.results);
            })
            .catch(error => {
                console.log(error)
            }) 
    }
    
    // const onChangeInput = (evnt) => {
    //     const search = evnt.currentTarget.value;
    //     fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f95d72194aa7d46701b715dc087a6994`)
    //         .then(response => response.json())
    //         .then(posts => {
    //             setMovies(posts.results);
    //         })
    //         .catch(error => {
    //         console.log(error)
    //     })
    // }
    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={searchMovie}>
              {/* <button type="submit">
                <span>Search</span>
             </button> */}

                <input className={css.input_search}
                    name="text"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search movie"
                    // onChange={onChangeInput}
                />
            </form>   


            <ul className={css.list_movie}>
            {movies.map(({ id, poster_path}) => {
                const link = `https://image.tmdb.org/t/p/original${poster_path}`
                
                return (
                    <Link to={`/movies/${id}`}  key={id}>
                          <li id={id} key={id} className={css.list_item}>
                    <img src={link} alt="movie_poster" width='300' height='360'/>
                      </li>
                    </Link>
                 
                )})
}
    </ul>    
        </div>

       
        
    )
}
export default Movies