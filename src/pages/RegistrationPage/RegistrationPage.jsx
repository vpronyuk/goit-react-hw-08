import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import signoutBG from "../../assets/bg_signout.jpg";

const RegistrationPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${signoutBG})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <DocumentTitle>Phonebook App - Registration</DocumentTitle>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
