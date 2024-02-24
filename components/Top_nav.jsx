import React from "react";

import { AiFillHome } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { SlLogin } from "react-icons/sl";
import { authAtom, usersAtom } from "../_state";
import { useRecoilState, useRecoilValue } from "recoil";
import { useUserActions } from "../_actions";
function Top_nav() {
  const user = useRecoilValue(usersAtom);

  const userActions = useUserActions();
  return (
    <nav className="container w-4/5">
      <div className=" bg-white w-full flex  ">
        <div className="w-1/3">My PM</div>

        <div className=" text-right  w-full   w-2/3">
          <ul className="flex gap-10   justify-end">
            <li>
              <a href="" className="flex flex-col text-center items-center ">
                <AiFillHome
                  size="14"
                  className="text-gray-700 hover:text-black"
                />
                <span className="text-xs text-gray-500 font-medium hover:text-gray-700 hidden lg:block md:block">
                  Home
                </span>
              </a>
            </li>
            <li>
              <a href="" className="flex flex-col text-center items-center ">
                <FaNetworkWired
                  size="14"
                  className="text-gray-700 hover:text-black"
                />
                <span className="text-xs text-gray-500 font-medium hover:text-gray-700 hidden lg:block md:block">
                  About
                </span>
              </a>
            </li>
            <li>
              <a href="" className="flex flex-col text-center items-center ">
                <GrWorkshop
                  size="14"
                  className="text-gray-700 hover:text-black"
                />
                <span className="text-xs text-gray-500 font-medium hover:text-gray-700 hidden lg:block md:block">
                  How it works
                </span>
              </a>
            </li>
            <li>
              {!user?.id && (
                <a href="" className="flex flex-col text-center items-center ">
                  <SlLogin
                    size="14"
                    className="text-gray-700 hover:text-black"
                  />
                  <span className="text-xs text-gray-500 font-medium hover:text-gray-700 hidden lg:block md:block">
                    Login
                  </span>
                </a>
              )}

              {user?.id && (
                <a
                  href=""
                  className="flex flex-col text-center items-center "
                  onClick={() => userActions.logout}
                >
                  <SlLogin
                    size="14"
                    className="text-gray-700 hover:text-black"
                  />
                  <span className="text-xs text-gray-500 font-medium hover:text-gray-700 hidden lg:block md:block">
                    Logout
                  </span>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Top_nav;
