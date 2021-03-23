import React, { Component } from 'react';

const Footer = (props) => {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-4 col-sm-2 offset-1">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Sites</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-5 text-center">
              <h5>Social</h5>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://facebook.com/"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
            </div>
            <div className="col-sm-4 text-center">
              <a role="button" className="btn btn-link" href="tel: +12016553810">
                <i className="fa fa-phone"></i> +1-201-655-3810
              </a>
              <br />
              <a
                role="button"
                className="btn btn-link"
                href="mailto:supersupport@ebank.com"
              >
                <i className="fa fa-envelope-o"></i> supersupport@ebank.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;