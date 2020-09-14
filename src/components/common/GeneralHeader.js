import React, { useEffect } from 'react';
import $ from 'jquery';

import HeaderAuthorAccess from '../other/account/HeaderAuthorAccess';
import Navbar from './Navbar';
import Logo from './Logo';

const GeneralHeader = () => {
  useEffect(() => {
    $(window).on('scroll', function () {
      //header fixed animation and control
      if ($(window).scrollTop() > 10) {
        $('.header-menu-wrapper').addClass('header-fixed');
      } else {
        $('.header-menu-wrapper').removeClass('header-fixed');
      }
    });
  }, []);

  return (
    <header className="header-area">
      <div className="header-menu-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="menu-full-width">
                {/* Logo */}
                <div className="logo">
                  <Logo text="OpenMeetup" />
                </div>

                {/* Navbar */}
                <Navbar />

                {/* Author Access */}
                <HeaderAuthorAccess />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GeneralHeader;
