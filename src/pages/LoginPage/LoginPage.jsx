import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import signInBG from "../../assets/bg_signin.jpg";

const LoginPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${signInBG})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <DocumentTitle>Phonebook App - Login</DocumentTitle>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
