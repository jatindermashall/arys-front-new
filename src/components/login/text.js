import React from "react";
// import { useSelector, shallowEqual } from "react-redux";

// import Person from "../../assets/faces/m1.png";
// import pattern from "../../assets/images/pattern.png";
const Text = () => {
//   const { config } = useSelector(
//     (state) => ({
//       config: state.config,
//     }),
//     shallowEqual
//   );
//   let { name } = { ...config };
  return (
    <div className="flex flex-col  w-full items-center">
      <div className="flex flex-col bg-white w-full lg:w-2/3 md:w-full rounded-lg p-8 items-center bg-opacity-50">
        <div className=" mb-4 flex flex-col items-center ">
          {/* <img
            src={Person}
            alt="Company logo"
            className="w-16 h-16 rounded-full"
          /> */}
          <span className="p-2 text-center">
            Fukushima Naagi
            <br />
            <span className="text-green2">IK Founder</span>
          </span>
        </div>
        <p className="text-normal font-thin text-black ">
          “In the tech world, you can’t shift between different platform to
          assign task, track and update. Ik Industry made it very convenient.”
        </p>
      </div>
    </div>
  );
};
export default Text;
