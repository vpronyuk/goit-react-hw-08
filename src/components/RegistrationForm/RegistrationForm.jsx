import { useDispatch } from "react-redux";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

const registrationUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .min(2, "Name must be at least 2 characters long!")
    .max(30, "Name must be less than 30 characters long!"),
  email: Yup.string()
    .email("Invalid email address!")
    .required("Email address is required!"),
  password: Yup.string()
    .required("Password is required!")
    .min(7, "Pssword must be at least 7 characters long!"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(register(value));
    actions.resetForm();
  };

  return (
    <div className={css.registerContainer}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={registrationUserSchema}
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <Form className={css.container}>
          <h2>Register user</h2>
          <label>
            <span>Name</span>
            <br />
            <Field
              type="text"
              name="name"
              placeholder="Enter name"
              autoComplete="name"
            />
            <ErrorMessage component="p" name="name" className={css.error} />
          </label>
          <label>
            <span>Email</span>
            <br />
            <Field
              type="email"
              name="email"
              placeholder="Enter email"
              autoComplete="email"
            />
            <ErrorMessage component="p" name="email" className={css.error} />
          </label>
          <label>
            <span>Password</span>
            <br />
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
              autoComplete="current-password"
            />
            <ErrorMessage component="p" name="password" className={css.error} />
          </label>

          <Button
            variant="contained"
            size="small"
            style={{ minWidth: "120px" }}
            color="secondary"
            startIcon={<HowToRegIcon />}
            type="submit"
          >
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
