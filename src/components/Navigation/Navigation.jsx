import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={css.navLink} to="/">
        <Button
          variant="contained"
          size="small"
          startIcon={<HomeIcon />}
          style={{ minWidth: "120px" }}
        >
          Home
        </Button>
      </NavLink>

      {isLoggedIn && (
        <NavLink className={css.navLink} to="/contacts">
          <Button
            variant="contained"
            color="success"
            size="small"
            startIcon={<ContactsIcon />}
            style={{ minWidth: "120px" }}
          >
            Contacts
          </Button>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
