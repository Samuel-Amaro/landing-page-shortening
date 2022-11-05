import logo from "../images/logo.svg";
import Button from "./Button";

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
            <Button type="button" className="header__btn">
              Login
            </Button>
            <Button type="button" className="header__btn">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="header__Group">
          <section className="header__Content">
            <h1 className="Title">More than just shorter links</h1>
            <p className="header__description">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button type="button" className="header__btn">
              Get Started
            </Button>
          </section>
          <div className="header__Ilustration"></div>
        </div>
      </header>
    );
}