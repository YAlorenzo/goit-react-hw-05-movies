import { useState } from "react";
import { useParams } from "react-router-dom";
import css from "./movieStyles.module.css"
function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f95d72194aa7d46701b715dc087a6994`)
        .then(response => response.json())
        .then(posts => {
            setReviews(posts.results)
        })
        .catch(error => {
            console.log(error)
        })
    return (
        <div>
            <ul className={css.list_reviews}>
                {reviews.map(({ author, content}) => {
                    return (
                        <li className={css.list_reviews__item}>
                            <p className={css.titleRev}>user: <span className={css.span}>{author}</span></p>
                            <p className={css.titleRev}>review: <span className={css.span}>{content}</span></p>
                       </li>
                )
              })}
            </ul>
           
        </div>
    )
}
export default Reviews