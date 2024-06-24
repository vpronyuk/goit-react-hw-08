import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <Button
        variant="contained"
        size="small"
        color="error"
        style={{ minWidth: "120px" }}
        endIcon={<LogoutIcon />}
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
