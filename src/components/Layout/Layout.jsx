import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import { Divider } from "@mui/material";

export const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <Divider />
      <main>{children}</main>
    </div>
  );
};
