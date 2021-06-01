import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation: React.FC = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <NavLink to="/home" className={classes.logo}>
          Home
        </NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
