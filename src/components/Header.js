import logo from "../images/logo.svg";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import React, {useRef, useState, useEffect} from "react";

export default function Header() {
    const nav = useRef(null);
    const [btnIsPressed, setBtnIsPressed] = useState(false);
    const [classNamesNav, setClassNameNav] = useState(
      "header__Container  header__Container_Collapse"
    );

    useEffect(() => {
      /*
      if(btnIsPressed === false && nav.current.classList.contains("header__Container_Show")) {
        nav.current.classList.remove(
          ...["header__Container_Collapse", "header__Container_Show"]
        );
        nav.current.classList.add("header__Container_Collapsing");
      }
      */
    });

    function handleTransitionEnd(event) {
       if(btnIsPressed) {
        nav.current.style.removeProperty("height");
        setClassNameNav("header__Container header__Container_Collapse header__Container_Show");
       }else{
         setClassNameNav("header__Container  header__Container_Collapse");
       }
    }

    function handleBtnMenu() {
      setBtnIsPressed(previosState => {
        setClassNameNav("header__Container header__Container_Collapsing");
        if(!previosState) {
           setTimeout(() => {
             nav.current.style.height = "383.1px";
           });
        }
        return !previosState;
      });
    }

    return (
      <header className="Header">
        <div className="header__Group">
          <img
            src={logo}
            alt="logo with description shortly"
            className="header__Logo"
          />
          <div
            className={
              /*btnIsPressed
                ? "header__Container header__Container_Collapsing"
                : "header__Container  header__Container_Collapse"*/
                classNamesNav
            }
            ref={nav}
            onTransitionEnd={handleTransitionEnd}
          >
            <nav className="Nav">
              <ul
                className="nav__List-Links"
                aria-label="List from links navigation"
              >
                <li className="nav__item">
                  <a
                    href="#features"
                    target="_self"
                    rel="next"
                    aria-label="Features"
                    className="nav__Link"
                  >
                    Features
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#pricing"
                    target="_self"
                    rel="next"
                    aria-label="Pricing"
                    className="nav__Link"
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#resources"
                    target="_self"
                    rel="next"
                    aria-label="Resources"
                    className="nav__Link"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__Buttons">
              <button
                type="button"
                className="header__btn"
                title="perform Login"
              >
                Login
              </button>
              <button type="button" className="header__btn" title="Sign Up">
                Sign Up
              </button>
            </div>
          </div>
          <button
            type="button"
            className="header__Btn-Menu"
            title="Expanded Menu"
            aria-expanded={btnIsPressed ? "false" : "true"}
            onPointerDown={handleBtnMenu}
          >
            <FontAwesomeIcon icon={faBars} className="header__Icon-Btn-Menu" />
          </button>
        </div>
        <div className="header__Group">
          <div className="header__Ilustration" aria-hidden="true"></div>
          <section className="header__Content" aria-label="Content header">
            <h1 className="header__Title">More than just shorter links</h1>
            <p className="header__description">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button type="button" className="header__btn" title="Get Started">
              Get Started
            </Button>
          </section>
        </div>
        <form
          action=""
          name="form"
          className="Form"
          aria-label="Form from shorten a link here"
        >
          <div className="form__Group">
            <input
              type="url"
              placeholder="Shorten a link here..."
              className="form__Input"
              aria-label="Shorten a link here..."
            />
            <Button
              type="submit"
              className="form__btn"
              title="Submite url to shorten"
            >
              Shorten It!
            </Button>
          </div>
        </form>
      </header>
    );
}