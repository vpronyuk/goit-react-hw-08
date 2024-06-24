import { Link } from "react-router-dom";
import bg404 from "../../assets/bg_homepage.jpg";

const NotFoundPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg404})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Page you visited doesn&apos;t exist</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
