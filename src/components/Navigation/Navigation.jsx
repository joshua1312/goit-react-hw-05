import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";
const navItem = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

function Navigation() {
    return (
        <header className={css.header}>
            <nav>
                <ul className={css.nav}>
                    <li>
                        <NavLink to="/" className={navItem}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className={navItem}>
                            Movies
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;