import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import { SessionContext } from '../../../contexts';

function LoginBox({ title, subtitle }) {
  const DEFAULT_STATE = {
    email: '',
    password: ''
  };

  const [formValues, setFormValues] = useState(DEFAULT_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [sessionState, setSessionState] = useContext(SessionContext);
  const { user, hasSession } = sessionState;

  if (!hasSession) return null;
  if (user) return <Redirect to="/" />

  const handleSubmitLogin = async e => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    });

    const data = await res.json();

    setLoading(false);

    if (res.status !== 200) return setError(data);

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
        <div className="billing-title-wrap border-bottom-0 text-center pb-0">
          <h3 className="widget-title font-size-28">
            {title}
          </h3>

          {error && <Alert variant="danger">{error}</Alert>}

          {subtitle && <p className="font-size-16 font-weight-medium">
            {subtitle}
          </p>}
        </div>
        <div className="billing-content">
          <div className="contact-form-action">
            <form method="post" onSubmit={handleSubmitLogin}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Email</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <AiOutlineUser />
                      </span>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
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
                  <div className="btn-box margin-bottom-20px">
                    <button className="theme-btn border-0" type="submit" disabled={loading}>
                      Login now
                    </button>
                  </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-between">
                  <Link to="/recover" className="color-text font-weight-medium">
                    Forgot password?
                  </Link>

                  <p className="font-weight-medium">Not a member? <Link to="/sign-up" className="color-text"> Register</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox;