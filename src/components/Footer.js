import logo from "../images/logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faTwitter, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
    return (
      <footer className="Footer">
        <img className="footer__Logo" src={logo} alt="" aria-hidden="true" />
        <div className="footer__Navs">
          <div className="footer__Block-Nav">
            <span className="footer__Associated-Link">Features</span>
            <nav className="footer__Nav" aria-label="Navigation Features">
              <ul
                className="footer__List-Links-Navigation"
                aria-label="List from links from navigation to features"
              >
                <li className="footer__Item">
                  <a
                    href="#link-shortening"
                    target="_blank"
                    rel="external"
                    className="footer__Link-Navigation"
                  >
                    Link Shortening
                  </a>
                </li>
                <li className="footer__Item">
                  <a
                    href="#branded-links"
                    target="_blank"
                    rel="external"
                    className="footer__Link-Navigation"
                  >
                    Branded Links
                  </a>
                </li>
                <li className="footer__Item">
                  <a
                    href="#analytics"
                    target="_blank"
                    rel="external"
                    className="footer__Link-Navigation"
                  >
                    Analytics
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__Block-Nav">
            <span className="footer__Associated-Link">Resources</span>
            <nav className="footer__Nav" aria-label="Navigation Features">
              <ul
                className="footer__List-Links-Navigation"
                aria-label="List from links from navigation to features"
              >
                <li className="footer__Item">
                  <a
                    href="#blog"
                    target="_blank"
                    rel="external"
                    className="footer__Link-Navigation"
                  >
                    Blog
                  </a>
                </li>
                <li className="footer__Item">
                  <a
                    href="#developers"
                    target="_blank"
                    rel="external"
                    className="footer__Link-Navigation"
                  >
                    Developers
                  </a>
                </li>
                <li className="footer__Item">
                  <a
                    href="#support"
                    target="_blank"
                    rel="external"
                    className="footer__Link-Navigation"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__Block-Nav">
            <span className="footer__Associated-Link">Company</span>
            <nav className="footer__Nav" aria-label="Navigation Features">
              <ul
                className="footer__List-Links-Navigation"
                aria-label="List from links from navigation to features"
              >
                <li className="footer__Item">
                  <a
                    href="#about"
                    target="_blank"
                    rel="external"
                    className="footer__Link-Navigation"
                  >
                    About
                  </a>
                </li>
                <li className="footer__Item">
                  <a
                    href="#our-team"
                    target="_blank"
                    rel="external"
                    className="footer__Link-Navigation"
                  >
                    Our Team
                  </a>
                </li>
                <li className="footer__Item">
                  <a
                    href="#careers"
                    target="_blank"
                    rel="external"
                    className="footer__Link-Navigation"
                  >
                    Careers
                  </a>
                </li>
                <li className="footer__Item">
                  <a
                    href="#contact"
                    target="_blank"
                    rel="external"
                    className="footer__Link-Navigation"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer__Social-Media">
          <ul
            className="footer__List-Links-Social-Media"
            aria-label="Links navigation to social medias"
          >
            <li className="footer__Item-Social">
              <a
                href="#facebook"
                target="_blank"
                rel="external"
                title="Link to social media facebook"
                className="footer__Link-Social-Media"
                aria-label="Link to social media facebook"
              >
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className="footer__Icon-Link"
                />
              </a>
            </li>
            <li className="footer__Item-Social">
              <a
                href="#twitter"
                target="_blank"
                rel="external"
                title="Link to social media twitter"
                className="footer__Link-Social-Media"
                aria-label="Link to social media twitter"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="footer__Icon-Link"
                />
              </a>
            </li>
            <li className="footer__Item-Social">
              <a
                href="#pinterest"
                target="_blank"
                rel="external"
                title="Link to social media pinterest"
                className="footer__Link-Social-Media"
                aria-label="Link to social media pinterest"
              >
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="footer__Icon-Link"
                />
              </a>
            </li>
            <li className="footer__Item-Social">
              <a
                href="#instagram"
                target="_blank"
                rel="external"
                title="Link to social media instagram"
                className="footer__Link-Social-Media"
                aria-label="Link to social media instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="footer__Icon-Link"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}