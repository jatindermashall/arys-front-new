import React, { useState, useEffect } from "react";

import Alert from "../alerts";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { useUserActions } from "../../_actions";
import { useUserActions } from "../../../_actions";
import { FiAlertCircle } from "react-icons/fi";
const Login = ({ message = null }) => {
  const userActions = useUserActions();
  useEffect(() => {
    localStorage.removeItem("loginerror");
  }, []);
  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  let loginerror = localStorage.getItem("loginerror");

  //console.log("loginerror", loginerror);
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  return (
    <>
      {loginerror && (
        <div>
          <Alert
            color=" text-red-600"
            icon={
              <FiAlertCircle className="mr-2 stroke-current h-4 w-4 mb-2" />
            }
          >
            {loginerror}
          </Alert>
        </div>
      )}

      <div className="flex flex-col gap-4 bg-red- w-3/4">
        <form
          onSubmit={handleSubmit(userActions.loginuser)}
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            name="email"
            type="email"
            {...register("email")}
            className={`form-input border-2 rounded-none ${
              errors.email ? "border-red-500 border" : ""
            }`}
            placeholder="Email"
          />
          <input
            name="password"
            type="password"
            {...register("password")}
            className={`form-input border-2 rounded-none ${
              errors.password ? "border-red-500 border" : ""
            }`}
            placeholder="Password"
          />
          <div className="flex flex-col lg: flex-row gap-2 justify-between text-white">
            <div>
              <input type="checkbox" />
              &nbsp; Remember me
            </div>
            <Link href="/registration">
              Forgot password?&nbsp;
              <span className="text-white">click here</span>
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <button
              button="submit"
              className="btn btn-default btn-rounded btn-icon bg-green2   text-black space-x-1 w-1/3"
            >
              {isSubmitting && (
                <span className="w-5 h-5 border-b-2 mr-3 border-gray-900 rounded-full animate-spin"></span>
              )}
              Login
            </button>

            {/*<div className="text-white">
              Don't have account yet?{" "}
              <Link to="/registration">
                <span className="text-green2">Sign up</span>
              </Link>{" "}
            </div>
            */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
