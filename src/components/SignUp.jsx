import React from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

const SignUp = () => {
  const defaultValue = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    first_name: yup.string().required("First name is required"),
  });
  // Formik is initialized with initialValues, validationSchema, and onSubmit
  const handleSubmit = (values) => {
    console.log("values : ", values);
  };

  return (
    <>
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mx-auto mt-10 max-w-md">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="group relative z-0 mb-5 w-full">
              <Field
                type="text"
                name="first_name"
                id="floating_first_name"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_first_name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                First name
              </label>
            </div>
            <div className="group relative z-0 mb-5 w-full">
              <Field
                type="text"
                name="last_name"
                id="floating_last_name"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_last_name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <Field
              type="email"
              name="email"
              id="floating_email"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Email address
            </label>
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <Field
              type="password"
              name="password"
              id="floating_password"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
            />
            <label
              htmlFor="floating_password"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUp;
