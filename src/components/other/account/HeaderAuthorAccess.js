import React, { useState, useContext } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { BsQuestion, BsGear, BsPower } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

import { SessionContext } from '../../../contexts';

const HeaderAuthorAccess = () => {
  const [AuthorAccessOpen, setAuthorAccessOpen] = useState(false);
  const [sessionState, setSessionState] = useContext(SessionContext);
  const { user, hasSession } = sessionState;

  if (!hasSession) return null;

  if (!user) {
    return (
      <div className="logo-right-content">
        <ul className="author-access-list">
          <li style={{ paddingTop: '15px' }}>
            <Link to="/login">login</Link>
            <span className="or-text">or</span>
            <Link to="/sign-up">Sign up</Link>
          </li>
        </ul>
      </div>
    );
  }

  const calculateJoinDate = () => {
    const createdAt = Date.parse(user.createdAt);
    const now = Date.now();
    const secondsAgo = (now - createdAt) / 1000;
    let ago = 'seconds';
    let n = secondsAgo;

    const recurse = () => {
      if (n < 60 && (ago === 'seconds' || ago === 'minutes')) return;
      if (n < 24 && ago === 'hours') return;
      if (n < 7 && ago === 'days') return;
      if (n < 52 && ago === 'weeks');
      if (ago === 'years') return;

      if (ago === 'seconds') {
        n /= 60;
        ago = 'minutes';
      }
      else if (ago === 'minutes') {
        n /= 60;
        ago = 'hours';
      }
      else if (ago === 'hours') {
        n /= 24;
        ago = 'days';
      }
      else if (ago === 'days') {
        n /= 7;
        ago = 'weeks';
      }
      else if (ago === 'weeks') {
        n /= 52;
        ago = 'years';
      }

      recurse();
    };

    recurse();

    if (n < 2) ago = ago.slice(0, ago.length - 1);

    return `${parseInt(n)} ${ago} ago`;
  };

  const handleLogout = async () => {
    const res = await fetch('/logout', {
      method: 'POST'
    });

    const json = await res.json();

    console.log(json);
    
    setSessionState({
      ...sessionState,
      user: null
    });
  };

  return (
    <>
      <div className="logo-right-content">
        <ul className="author-access-list">
          <li>
            <Button text="add group" url="/add-group" >
              <FiPlusCircle />
            </Button>
          </li>
        </ul>
        
        <div className="side-user-menu-open" onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}>
          <AiOutlineUser />
        </div>
      </div>

      {/* Side User panel */}
      <div className={AuthorAccessOpen ? 'side-user-panel active' : 'side-user-panel'}>
        <div className="humburger-menu">
          <div className="humburger-menu-lines side-menu-close" onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}></div>
        </div>
        <div className="side-menu-wrap side-user-menu-wrap">

          <div className="side-user-img">
            <h4 className="su__name">{user.username}</h4>
            <span className="su__meta">Joined {calculateJoinDate()}</span>
          </div>

          <ul className="side-menu-ul">
            <li><Link to="/dashboard"><AiOutlineUser className="user-icon" /> My Profile</Link></li>
            <li><Link to="/add-group"><FiPlusCircle className="user-icon" /> add group</Link></li>
            <li><div className="dropdown-divider"></div></li>
            <li><Link to="#"><BsQuestion className="user-icon" /> help</Link></li>
            <li><Link to="#"><BsGear className="user-icon" /> Settings</Link></li>
            <li><Link to="#" onClick={handleLogout}><BsPower className="user-icon" />Sign Out</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeaderAuthorAccess;
