import React from "react";
import pattern from "../../public/assets/img/login/pattern.png";
// import Login from "../components/sample-forms/login";
import Login from "@/components/login/login";
// import Text from "../components/login-2/text";
import Text from "@/components/login/text";
// import Logo from "../components/login-2/logo";
// import Footer from "../components/login-2/footer";
// import SocialMedia from "../components/login-1/social-media";
// import Alert from "../components/alerts";
// import { FiAlertCircle } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import Logo2 from "../assets/images/logo.png";
const Index = () => {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const queryString = url.search;
  const params = new URLSearchParams(queryString);
  const message = params.get("message");

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row md:flex-col xl:flex-row h-screen overflow-hidden">
        <div
          className="w-full relative lg:w-1/2  p-8 lg:p-24 flex flex-col items-center lg:items-start justify-left md:justify-center lg:justify-center bg-darkBlue "
          style={{ backgroundImage: `url(${pattern})` }}
        >
          <p className="text-xl font-bold text-white mb-2 ">Login to</p>
          {message != undefined && (
            <span className="text-green2 capitalize">
              {message}. Wait for approval
            </span>
          )}

          <Login />
        </div>
        <div
          className="lg:flex lg:flex-col w-full lg:w-1/2 md:w-full h-full xl:w-1/2 text-black p-8 items-start justify-between relative  "
          style={{ backgroundImage: `url(${pattern})` }}
        >
          <div className="hidden lg:block md:hidden">
            {/* <Logo /> */}
          </div>
          <Text />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Index;
