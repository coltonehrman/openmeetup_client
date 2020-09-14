import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';

import { GlobalErrorContext, SessionContext } from '../../../contexts';

function SignUpBox({ title, subtitle }) {
  const DEFAULT_STATE = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formValues, setFormValues] = useState(DEFAULT_STATE);
  
  const [,pushError] = useContext(GlobalErrorContext);
  const [sessionState, setSessionState] = useContext(SessionContext);
  const { user, hasSession } = sessionState;

  if (!hasSession) return null;
  if (user) return <Redirect to="/" />

  const handleSubmitSignup = async e => {
    e.preventDefault();

    const res = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    });

    const data = await res.json();

    if (res.status !== 200) return pushError(data);
 
    setSessionState({ ...sessionState, user: data });
  };

  const handleInputChange = field => e => {
    setFormValues({
      ...formValues,
      [field]: e.target.value
    });
  };

  return (
    <>
      <div className="billing-form-item mb-0">
        <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
          <h3 className="widget-title font-size-28 pb-0">
            {title}
          </h3>

          {subtitle && <p className="font-size-16 font-weight-medium">
            {subtitle}
          </p>}
        </div>
        <div className="billing-content">
          <div className="contact-form-action">
            <form method="post" onSubmit={handleSubmitSignup}>
              <div className="row">

                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Username</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <AiOutlineUser />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formValues['username']}
                        onChange={handleInputChange('username')}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Email</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <FaRegEnvelope />
                      </span>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formValues['email']}
                        onChange={handleInputChange('email')}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Password</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <FiLock />
                      </span>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formValues['password']}
                        onChange={handleInputChange('password')}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Confirm Password</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <FiLock />
                      </span>
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formValues['confirmPassword']}
                        onChange={handleInputChange('confirmPassword')}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="btn-box margin-top-20px margin-bottom-20px">
                    <button className="theme-btn border-0" type="submit">
                      Register account
                    </button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p className="font-weight-medium">
                    Already have an account? <Link to="/login" className="color-text">Login</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpBox;