import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpenMenu: false,
  isLeftSidebarOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR_MENU":
      return {
        ...state,
        isSidebarOpenMenu: !state.isSidebarOpenMenu,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    default:
      return state;
  }
}

function Header3() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };

  const toggleSidebarMenu = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR_MENU" });
  };
  const toggleLeftSidebar = () => {
    dispatch({ type: "TOGGLE_LEFT_SIDEBAR" });
  };

  return (
    <>
      <div
        className={`header-sidebar ${state.isLeftSidebarOpen ? "slide" : ""}`}
      >
        <div className="siderbar-top">
          <div className="sidebar-log">
            <Link legacyBehavior href="/">
              <a>
                <img src="assets/img/logo.svg" alt="" />
              </a>
            </Link>
          </div>
          <div className="close-btn" onClick={toggleLeftSidebar}>
            <i className="bi bi-x-lg" />
          </div>
        </div>
        <div className="sidebar-content">
          <p>
            Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo
            libero. Donec nec duomoi luctus, pellentesque lacus sed, mollis
            going leo.
          </p>
        </div>
        <div className="address-card">
          <div className="content">
            <div className="informations">
              <div className="single-info">
                <div className="icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="info">
                  <p>
                    168/170, Avenue 01, Old York Drive Rich Mirpur DOHS,
                    Bangladesh
                  </p>
                </div>
              </div>
              <div className="single-info">
                <div className="icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="info">
                  <a href="tel:05661111985">+880 566 1111 985</a>
                  <a href="tel:06571111576">+880 657 1111 576</a>
                </div>
              </div>
              <div className="single-info">
                <div className="icon">
                  <i className="far fa-envelope" />
                </div>
                <div className="info">
                  <a href="mailto: info@example.com">info@example.com</a>
                  <a href="mailto: info@support.com">info@support.com</a>
                </div>
              </div>
            </div>
          </div>
          {/* <img src="assets/images/bg/office1.png" alt="image"> */}
        </div>
        <div className="follow-area">
          <h5 className="blog-widget-title">Follow Us</h5>
          <p className="para">Follow us on Social Network</p>
          <div className="blog-widget-body">
            <ul className="follow-list d-flex flex-row align-items-start gap-4">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i className="bx bxl-pinterest" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        className={`header-area2 one ${state.scrollY > 10 ? "sticky" : ""}`}
      >
        <div className="header-logo">
          <Link legacyBehavior href="/">
            <a>
              <img
                alt="image"
                className="img-fluid"
                src="assets/img/logo.svg"
              />
            </a>
          </Link>
        </div>
        <div className={`main-menu `}></div>
      </header>
    </>
  );
}

export default Header3;
