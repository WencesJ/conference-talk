import React from "react";
import { Input, PasswordInput } from "../../components/common/input";
import { Heading } from "../../constant/styles/text";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../../components/common/button/btn";
import { useCookies } from "react-cookie";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupPage = () => {
  const [cookies] = useCookies(["ct-auth"]);
  const navigate = useNavigate();

  return (
    <>
      {cookies.user != undefined && cookies.me != undefined ? (
        <Navigate to="/" />
      ) : (
        <div className={`w-auto flex place-content-center `}>
          <div
            className="grid grid-cols-1 gap-4 items-center py-12 sm:px-8 px-3 rounded
                      bg-gray-100 shadow-white 
                        dark:bg-dark-800 sm:w-2/4 w-full"
          >
            <Heading className="justify-self-center text-center capitalize">
              Sign up
            </Heading>
            <p className="text-gray-800 dark:text-gray-300 text-sm text-center">
              I already have an account?{" "}
              <Link
                to="/login"
                className="text-primary-900 text-sm text-center"
              >
                Log in
              </Link>
            </p>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required("Input First Name"),
                lastName: Yup.string().required("Input Last Name"),
                email: Yup.string().required("Input Email"),
                password: Yup.string().required("Input Password"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  axios
                    .request({
                      baseURL: "https://conf-chat.herokuapp.com/api/v1/",
                      headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                      },
                      timeout: 60000,
                      url: "users/signup",
                      method: "POST",
                      data: {
                        ...values,
                      },
                    })
                    .then((response) => {
                      alert(JSON.stringify(response.data.message, null, 2));
                      navigate("/login");
                    })
                    .catch((err) => {
                      if (err.response) {
                        alert(
                          JSON.stringify(err.response.data.message, null, 2)
                        );
                      } else alert(err);

                      setSubmitting(false);
                    });
                }, 100);
              }}
            >
              {(formik) => (
                <form
                  onSubmit={formik.handleSubmit}
                  className="grid grid-cols-1 justify-items-center gap-2"
                >
                  <div className="flex items-center sm:flex-row flex-col w-full gap-4">
                    <Input
                      id="firstName"
                      type="text"
                      label="First Name"
                      placeholder="First Name"
                      {...formik.getFieldProps("firstName")}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <p className="text-xs text-red-500">
                        {formik.errors.firstName}
                      </p>
                    ) : null}

                    <Input
                      id="lastName"
                      type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      {...formik.getFieldProps("lastName")}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <p className="text-xs text-red-500">
                        {formik.errors.lastName}
                      </p>
                    ) : null}
                  </div>
                  <Input
                    id="email"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-xs text-red-500">
                      {formik.errors.email}
                    </p>
                  ) : null}

                  <PasswordInput
                    id="password"
                    label="Create Password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-xs text-red-500">
                      {formik.errors.password}
                    </p>
                  ) : null}

                  <Button className="justify-self-center mt-4" type="submit">
                    Sign Up
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPage;
