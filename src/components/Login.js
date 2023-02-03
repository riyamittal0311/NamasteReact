import React, { useContext } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";

import { UserContext } from "../util/UserContext";

const Login = () => {
  const { setIsLogin, setUser, user } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-lg border underline  font-bold p-3 m-2 ml-0 mr-0 flex justify-center shadow-lg text-cyan-700">
        Welcome to FOOD APP
      </h1>

      <Formik
        initialValues={{ name: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setUser({
              ...user,
              name: values.name,
            });
            setSubmitting(false);
            setIsLogin(true);
          }, 400);
        }}
      >
        {({ values, isSubmitting, handleSubmit, handleChange }) => (
          <Form className="flex flex-col items-center">
            <Field
              className="border p-2 m-2 w-1/4"
              onChange={handleChange}
              type="name"
              name="name"
              placeholder="Enter name"
              value={values.name}
            />
            <ErrorMessage
              className="text-red-600 text-sm"
              name="name"
              component="span"
            />
            <Field
              className="border p-2 m-2  w-1/4"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Enter Password"
            />
            <ErrorMessage
              className="text-red-600 text-sm"
              name="password"
              component="span"
            />
            <button
              className={`border p-2 m-2  w-1/12 ${
                isSubmitting
                  ? "text-gray-500"
                  : "text-cyan-700 border-cyan-700 hover:bg-cyan-700 hover:text-white"
              } `}
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
