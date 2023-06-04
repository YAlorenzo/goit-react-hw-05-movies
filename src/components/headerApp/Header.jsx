import { NavLink } from "react-router-dom";
import css from "./header.module.css"
function Header() {
    return (
        <div className={css.header}>
            <nav className={css.nav_header}>
                 <p className={css.logo}>MOVIES</p>
                    <ul className={css.list}>
                    <li>
                        <NavLink to="/" className={css.link_header}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className={css.link_header}>Movies</NavLink>
                    </li>
                    </ul>
            </nav>
      </div>
    )
}
export default Header;