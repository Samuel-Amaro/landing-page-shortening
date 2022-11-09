import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import React, {useRef, useState} from "react";

export default function Header() {
    const nav = useRef(null);
    const liItemFocused = useRef(null);
    const btnMenu = useRef(null);
    const [btnIsPressed, setBtnIsPressed] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const [classNamesNav, setClassNameNav] = useState(
      "header__Container-Collapse header__Container"
    );

    function focusItem() {
      btnMenu.current.blur();
      liItemFocused.current.focus();
    }

    function handleTransitionEnd(event) {
       if(btnIsPressed) {
        setClassNameNav(
          "header__Container header__Container-Collapse header__Container_Show"
        );
       }else{
         setClassNameNav("header__Container  header__Container-Collapse");
         nav.current.style.removeProperty("height");
       }
    }

    function handleBtnMenu() {
      setBtnIsPressed(previosState => {
        if(!previosState) {
           setTimeout(() => {
            nav.current.style.height = "383.1px";
           });
        }else{
          setTimeout(() => {
            nav.current.style.height = "0px";
          });
        }
        setClassNameNav(
          "header__Container header__Container_Collapsing"
        );
        return !previosState;
      });
    }

    function handleChangeInput(event) {
      setValueInput(event.target.value);
    }

    function handleSubmitForm(event) {
      event.preventDefault();
      alert('Form submited with value input: ' + valueInput);
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
            aria-label="menu navigation with links"
            className={classNamesNav}
            ref={nav}
            onTransitionEnd={handleTransitionEnd}
          >
            <nav className="Nav">
              <ul
                className="nav__List-Links"
                aria-label="List from links navigation"
              >
                <li
                  className="nav__item"
                  key="linkA"
                  ref={liItemFocused}
                  tabIndex="0"
                  onFocus={(event) => console.log("Recebeu o foco")}
                >
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
                <li className="nav__item" key="linkB">
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
                <li className="nav__item" key="linkC">
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
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                handleBtnMenu();
                //gerencia o foco, espera o menu ser pintado e aplica o foco programaticamente
                setTimeout(() => {
                  focusItem();
                }, 100);
              }
            }}
            ref={btnMenu}
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
            <button type="button" className="header__btn" title="Get Started">
              Get Started
            </button>
          </section>
        </div>
        <form
          action=""
          name="form"
          className="Form"
          aria-label="Form from shorten a link here"
          onSubmit={event => handleSubmitForm(event)}
        >
          <div className="form__Group">
            <input
              type="url"
              placeholder="Shorten a link here..."
              className="form__Input"
              aria-label="Shorten a link here... enter a url formatted like: 'urlscheme://restofurl"
              title="Please enter a url formatted like: 'urlscheme://restofurl'"
              value={valueInput}
              onChange={event => handleChangeInput(event)}
            />
            {/*se o input estiver vazio add o alert*/}
            {/*<span className="form__Label-Warning">Please add a link</span>*/}
            <button
              type="submit"
              className="form__btn"
              title="Submite url to shorten"
            >
              Shorten It!
            </button>
          </div>
        </form>
      </header>
    );
}