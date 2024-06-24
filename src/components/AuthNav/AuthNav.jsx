import { NavLink } from "react-router-dom";
// import clsx from "clsx";
import Button from "@mui/material/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";

import css from "./AuthNav.module.css";

// const getNavLinkClassName = ({ isActive }) => {
//   return clsx(css.navLink, {
//     [css.active]: isActive,
//   });
// };

const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={css.navLink} to="/register">
        <Button
          variant="outlined"
          size="small"
          style={{ minWidth: "120px" }}
          color="error"
          startIcon={<HowToRegIcon />}
        >
          Sign out
        </Button>
      </NavLink>
      <NavLink className={css.navLink} to="/login">
        <Button
          variant="outlined"
          size="small"
          style={{ minWidth: "120px" }}
          color="success"
          startIcon={<LoginIcon />}
        >
          Sign in
        </Button>
      </NavLink>
    </nav>
  );
};

export default AuthNav;
