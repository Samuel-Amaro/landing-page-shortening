import logo from "../images/logo.svg";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
      <header className="Header">
        <div className="header__Group">
          <div className="header__Container">
            <img
              src={logo}
              alt="logo with description shortly"
              className="header__Logo"
            />
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
          </div>
          <div className="header__Buttons">
            <Button type="button" className="header__btn" title="perform Login">
              Login
            </Button>
            <Button type="button" className="header__btn" title="Sign Up">
              Sign Up
            </Button>
          </div>
          <button type="button" className="header__Btn-Menu" title="Expanded Menu" aria-expanded="true">
            <FontAwesomeIcon icon={faBars} className="header__Icon-Btn-Menu" />
          </button>
        </div>
        <div className="header__Group">
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
          <div
            className="header__Ilustration"
            aria-hidden="true">
          </div>
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