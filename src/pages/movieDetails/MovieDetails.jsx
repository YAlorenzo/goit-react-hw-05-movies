import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import css from "./movieStyles.module.css"

function MovieDetails() {
    const [movie, setMovie] = useState('');
    const [produc, setProduc] = useState([]);
    const [geners, setGeners] = useState([]);
    const { movieId } = useParams();
    
    const getTimeFromMins = (mins) => {
                    let hours = Math.trunc(mins/60);
                    let minutes = mins % 60;
                    return hours + 'h ' + minutes + 'm';
    }    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f95d72194aa7d46701b715dc087a6994`)
        .then(response => response.json())
        .then(movie => {
            console.log(movie)
            setMovie(movie)
            setProduc(movie.production_countries)
            setGeners(movie.genres)
        })
        .catch(error => {
        console.log(error)
        })
    },[movieId])


    
    const link = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    return (
        <div>
            <div className={css.containerPoster}>
                 <img src={link} alt="poster" width='100%' height="500" />
            </div>
           
            
            
            <div className={css.container}>
                <p className={css.movie_title}>{movie.title}</p>

                
                <div className={css.movie_info_container}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie" width='300' height='360' />
                    
                    <div className={css.movie_info}>
                        <p className={css.title}>Timing: <span className={css.span}>{getTimeFromMins(movie.runtime)}</span></p>
                        <p className={css.title}>Production Countries:
                            {produc.map(({ name }) => {
                                return (
                                    <span className={css.span}>{name}</span>
                                )
                            })}
                        </p>
                        <p className={css.title}>Release: <span className={css.span}>{movie.release_date}</span></p>
                        <p className={css.title}>Geners: {geners.map(({ name }) => {
                            return (
                                 <span className={css.span}>{name}</span>
                            )
                        })}</p>
                        <p className={css.title}>Rating: <span className={css.span}>{movie.vote_average}</span></p>
                        <p className={css.title}>Total Votes: <span className={css.span}>{movie.vote_count}</span></p>
                    </div>
                </div>
                

                  <div className={css.overview_section}>
                    <p className={css.overview_title}>Overview</p>
                    <p className={css.overview}>
                        {movie.overview}
                    </p>
                        
                </div>
                <NavLink to="Cast" className={css.cast_rev}>Cast</NavLink>
                <NavLink to="Reviews" className={css.cast_rev}>Reviews</NavLink>

                  <Suspense fallback={<div>Loading subpage...</div>}>
                      <Outlet />
                  </Suspense>
            </div>     
        </div>
    )
}
export default MovieDetails;