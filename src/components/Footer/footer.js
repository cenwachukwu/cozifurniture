import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-div">
        <div className="FooterCategoryDiv">
          <div className="FooterCategory">
            <ul>
              <p>Brands</p>
              <li>
                <a href="#">Ashley</a>
              </li>
              <li>
                <a href="#">Millennium</a>
              </li>
              <li>
                <a href="#">Signature Design By Ashley</a>
              </li>
              <li>
                <a href="#">Benchcraft</a>
              </li>
              <li>
                <a href="#">Sierra Sleep by Ashley</a>
              </li>
            </ul>
          </div>
          <div className="FooterCategory">
            <ul>
              <p>Quick Links</p>
              <li>
                <a href="#">Delivery Policy</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Financing & Leasing</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="FooterIconsDiv">
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <div>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="FooterCopyRightDiv">
          <p>
            All rights reserved
            <span>
              <i class="fas fa-copyright"></i>
            </span>
            2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
