import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import homeBG from "../../assets/bg_homepage.jpg";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Phonebook App - Home</DocumentTitle>

      <div
        className={css.container}
        style={{ backgroundImage: `url(${homeBG})` }}
      >
        <h1 className={css.title}>WELCOME TO PHONEBOOK APP</h1>
      </div>
    </>
  );
};

export default HomePage;
