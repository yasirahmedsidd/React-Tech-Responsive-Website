import React from "react";
import { BackTop } from "antd";
const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="https://google.com">Tech</a>
        </div>
        <ul className="socials">
          <li>
            <a href="https://fb.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://pinterest.com">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">
          Copyright &copy; {new Date().getFullYear()} Tech
        </div>
        <BackTop>
          <div className="goTop">
            <i className="fas fa-arrow-circle-up"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
};

export default Footer;
