import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row container">
        <a href="/" className="footer__logo-box">
          <h5 className="footer__logo">Shortly</h5>
        </a>
        <div className="footer__list-box">
          <h5 className="footer__list-title">Features</h5>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="" className="footer__list-link">
                Link Shortening
              </a>
            </li>
            <li className="footer__list-item">
              <a href="" className="footer__list-link">
                Branded Links
              </a>
            </li>
            <li className="footer__list-item">
              <a href="" className="footer__list-link">
                Analytics
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__list-box">
          <h5 className="footer__list-title">Resources</h5>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="" className="footer__list-link">
                Blog
              </a>
            </li>
            <li className="footer__list-item">
              <a href="" className="footer__list-link">
                Developers
              </a>
            </li>
            <li className="footer__list-item">
              <a href="" className="footer__list-link">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__list-box">
          <h5 className="footer__list-title">Company</h5>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="" className="footer__list-link">
                About
              </a>
            </li>
            <li className="footer__list-item">
              <a href="" className="footer__list-link">
                Our Team
              </a>
            </li>
            <li className="footer__list-item">
              <a href="" className="footer__list-link">
                Careers
              </a>
            </li>
            <li className="footer__list-item">
              <a href="" className="footer__list-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__list-box">
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a href="" className="footer__social-link">
                <FacebookIcon sx={{ fontSize: "31px" }} />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="" className="footer__social-link">
                <TwitterIcon sx={{ fontSize: "31px" }} />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="" className="footer__social-link">
                <PinterestIcon sx={{ fontSize: "31px" }} />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="" className="footer__social-link">
                <InstagramIcon sx={{ fontSize: "31px" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
