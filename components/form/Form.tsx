import React from "react";
import styled from "@emotion/styled";
import { Formik, Form } from "formik";
import validateForm from "./Validation";
import { loginAuth } from "../../pages/auth/login";
import {
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import { registerAuth } from "../../pages/auth/register";

const ErrorMessage = styled.div`
  color: red;
`;

interface FormValues {
  name: string;
  age: number;
  phone: string;
  email: string;
  password: string;
}

const UserForm = (isLogin?: boolean) => {
  const initialValues: FormValues = {
    name: "",
    age: 0,
    phone: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        validateForm(values);
      }}
      onSubmit={(values, { setSubmitting }) => {
        isLogin
          ? loginAuth(values, setSubmitting)
          : registerAuth(values, setSubmitting);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        status,
      }) => (
        <>
          <Form>
            <CardContent>
              <Typography variant="h5" component="div">
                {isLogin ? "Login" : "Register"}
              </Typography>

              {!isLogin ? (
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              ) : (
                <></>
              )}
              {errors.name && (
                <ErrorMessage>
                  {errors.name && touched.name && errors.name}
                </ErrorMessage>
              )}

              {!isLogin ? (
                <TextField
                  name="age"
                  label="Age"
                  variant="outlined"
                  fullWidth
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              ) : (
                <></>
              )}
              {errors.age && (
                <ErrorMessage>
                  {errors.age && touched.age && errors.age}
                </ErrorMessage>
              )}

              {!isLogin ? (
                <TextField
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  required
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              ) : (
                <></>
              )}
              {errors.phone && (
                <ErrorMessage>
                  {errors.phone && touched.phone && errors.phone}
                </ErrorMessage>
              )}

              <TextField
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                required
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.email && (
                <ErrorMessage>
                  {errors.email && touched.email && errors.email}
                </ErrorMessage>
              )}

              <TextField
                name="password"
                label="Password"
                variant="outlined"
                type='password'
                fullWidth
                required
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && (
                <ErrorMessage>
                  {errors.password && touched.password && errors.password}
                </ErrorMessage>
              )}
            </CardContent>
            <CardActions>
              <Button type="submit" variant="contained">
                {isSubmitting ? (
                  <CircularProgress
                    style={{ color: "white", padding: "10px" }}
                  />
                ) : isLogin ? (
                  "Login"
                ) : (
                  "Register"
                )}
              </Button>
            </CardActions>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default UserForm;