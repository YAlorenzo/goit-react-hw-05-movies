import { useState } from "react";
import { useParams } from "react-router-dom";
import css from "./movieStyles.module.css"

function Cast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f95d72194aa7d46701b715dc087a6994`)
        .then(response => response.json())
        .then(posts => {
            setCast(posts.cast.splice(0, 10));
        })
        .catch(error => {
            console.log(error)
        })
    return (
        <div className={css.container}>
            <ul className={css.cast_list}>
                {cast.map(({ cast_id, original_name, profile_path }) => {
                    return (
                        <li key={cast_id} className={css.cast_list__item}>
                            <img src={`https://image.tmdb.org/t/p/original${profile_path}`} className={css.photo} alt="phot" width="120" height="120"/>
                        <p>{original_name}</p>
                    </li>
                    )
                   
                })}
            </ul>
        </div>
    )
}
export default Cast;