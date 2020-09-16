import React from 'react';
import CopyrightMenu from './CopyrightMenu';
import { FiHeart } from 'react-icons/fi';

const Copyright = () => (
  <div className="row">
    <div className="col-lg-12">
      <div className="copy-right margin-top-50px padding-top-60px">
        <p className="copy__desc">
          &copy; Copyright OpenMeetup 2020. Made with <span className="la"><FiHeart /></span> by <a href="https://github.com/coltonehrman" target="_blank" rel="noopener noreferrer">Colton Ehrman</a>
        </p>
        <CopyrightMenu />
      </div>
    </div>
  </div>
);

export default Copyright;