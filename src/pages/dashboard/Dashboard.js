import React, { useState, useContext, useLayoutEffect } from 'react';
import GeneralHeader from '../../components/common/GeneralHeader';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link, Redirect } from 'react-router-dom';
import { BsListCheck, BsPencil } from 'react-icons/bs';
import { FaRegEdit, FaRegTrashAlt, FaGlobeAmericas, FaRegEnvelope } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';
import { FiPhone, FiEdit } from 'react-icons/fi';
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlinePoweroff, AiOutlineYoutube, AiOutlineExclamationCircle } from 'react-icons/ai';
import Button from '../../components/common/Button';
import $ from 'jquery';
import NewsLetter from '../../components/other/cta/NewsLetter';
import Footer from '../../components/common/footer/Footer';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';

import { SessionContext, GroupsContext } from '../../contexts';

const Dashboard = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [groupToDelete, setGroupToDelete] = useState(null);
  const [sessionState, setSessionState] = useContext(SessionContext);
  const [groupsState, setGroupsState] = useContext(GroupsContext);
  const { hasSession, user } = sessionState;
  const { groups, hasGroups } = groupsState;

  useLayoutEffect(() => {
    if (showDeleteModal) {
      $('body').addClass('modal-open');
    } else {
      $('body').removeClass('modal-open');
    }
  }, [showDeleteModal]);

  if (!hasGroups || !hasSession) return null;

  if (!user) return <Redirect to="/" />

  const myGroups = groups.filter(g => {
    const { me = {} } = g;
    return me.isOwner || me.isCreator;
  });

  const handleLogout = async () => {
    const res = await fetch('/logout', {
      method: 'POST'
    });

    if (res.status !== 200) return;
    
    setSessionState(prevState => ({
      ...prevState,
      user: null
    }));
  };

  const deleteGroup = async () => {
    if (groupToDelete) {
      const res = await fetch(`/groups/${groupToDelete}`, {
        method: 'DELETE'
      });

      setShowDeleteModal(false);

      if (res.status === 200) {
        setGroupsState(prevState => {
          const prevGroups = prevState.groups;

          return {
            ...prevState,
            groups: prevGroups.filter(({ id }) => id !== groupToDelete)
          };
        });
      }
    }
  };

  return (
    <main className="dashboard-page">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb CurrentPgTitle="Dashboard" MenuPgTitle="pages" />

      <section className="dashboard-area padding-top-40px padding-bottom-90px">
        <div className="container">
          <Tabs>
            <div className="row">
              <div className="col-lg-12">
                <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                  <TabList className="nav nav-tabs border-0" id="nav-tab">
                    <Tab>
                      <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                        <span className="la"><AiOutlineUser /></span> Profile
                      </Link>
                    </Tab>

                    <Tab>
                      <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                        <span className="la"><BsListCheck /></span> My Groups
                      </Link>
                    </Tab>
                  </TabList>
                  <div className="btn-box">
                    <Link to="/add-group" className="theme-btn"><span className="la"><AiOutlinePlusCircle /></span> create group</Link>
                    <button className="theme-btn ml-1" onClick={handleLogout}><span className="la"><AiOutlinePoweroff /></span> sign out</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="tab-content" id="nav-tabContent">
                  <TabPanel>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="user-profile-action">
                          <div className="user-details">
                            <h2 className="user__name widget-title pb-2">
                              {user.username}
                            </h2>

                            <ul className="list-items mt-3">
                              <li className="text-lowercase">
                                <span className="la d-inline-block"><FaGlobeAmericas /></span> {user.email}
                              </li>
                            </ul>

                            <div className="user-edit-form mt-4">
                              <div className="dropdown">
                                <button
                                  className="theme-btn edit-form-btn shadow-none w-100 dropdown-toggle after-none"
                                  type="button" id="editForm"
                                  data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <i className="la"><FiEdit /></i> Edit
                                </button>

                                <div className="dropdown-menu" aria-labelledby="editForm">
                                  <div className="contact-form-action">
                                    <div className="input-box">
                                      <label className="label-text">Name</label>
                                      <div className="form-group">
                                        <span className="la form-icon"><AiOutlineUser /></span>
                                        <input className="form-control" type="text" name="name" placeholder="Enter your name" />
                                      </div>
                                    </div>
                                    <div className="input-box">
                                      <label className="label-text">Bio Data</label>
                                      <div className="form-group">
                                        <span className="la form-icon"><BsPencil /></span>
                                        <textarea className="message-control form-control" name="message" placeholder="Add a bio"></textarea>
                                      </div>
                                    </div>
                                    <div className="input-box">
                                      <div className="form-group">
                                        <span className="la form-icon"><GiPositionMarker /></span>
                                        <input className="form-control" type="text" name="location" placeholder="Location" />
                                      </div>
                                    </div>
                                    <div className="input-box">
                                      <div className="form-group">
                                        <span className="la form-icon"><FiPhone /></span>
                                        <input className="form-control" type="text" name="number" placeholder="Number" />
                                      </div>
                                    </div>
                                    <div className="input-box">
                                      <div className="form-group">
                                        <span className="la form-icon"><FaRegEnvelope /></span>
                                        <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                      </div>
                                    </div>
                                    <div className="input-box">
                                      <div className="form-group">
                                        <span className="la form-icon"><AiOutlineYoutube /></span>
                                        <input className="form-control" type="text" name="youtube" placeholder="Youtube URL" />
                                      </div>
                                    </div>
                                    <div className="input-box">
                                      <div className="form-group">
                                        <span className="la form-icon"><FaGlobeAmericas /></span>
                                        <input className="form-control" type="text" name="website" placeholder="Website" />
                                      </div>
                                    </div>
                                    <div className="btn-box">
                                      <button type="button" className="theme-btn border-0 button-success mr-1">
                                        save changes
                                      </button>
                                      <button type="button" className="theme-btn border-0">
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-8">
                        <div className="user-form-action">
                          <div className="billing-form-item">
                            <div className="billing-title-wrap">
                              <h3 className="widget-title pb-0">Change Password</h3>
                              <div className="title-shape margin-top-10px"></div>
                            </div>
                            <div className="billing-content">
                              <div className="contact-form-action">
                                <form>
                                  <div className="input-box">
                                    <label className="label-text">Current Password</label>
                                    <div className="form-group">
                                      <span className="la form-icon"><BsPencil /></span>
                                      <input className="form-control" type="text" name="text" placeholder="Current Password" />
                                    </div>
                                  </div>
                                  <div className="input-box">
                                    <label className="label-text">New Password</label>
                                    <div className="form-group">
                                      <span className="la form-icon"><BsPencil /></span>
                                      <input className="form-control" type="text" name="text" placeholder="New Password" />
                                    </div>
                                  </div>
                                  <div className="input-box">
                                    <label className="label-text">Confirm New Password</label>
                                    <div className="form-group">
                                      <span className="la form-icon"><BsPencil /></span>
                                      <input className="form-control" type="text" name="text" placeholder="Confirm New Password" />
                                    </div>
                                  </div>
                                  <div className="btn-box">
                                    <button className="theme-btn button-success border-0">
                                      updated password
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="delete-account-info">
                          <div className="billing-form-item">
                            <div className="billing-title-wrap">
                              <h3 className="widget-title pb-0 color-text">Delete Account</h3>
                              <div className="title-shape margin-top-10px"></div>
                            </div>
                            <div className="delete-info-content p-4">
                              <p className="mb-3">
                                <span className="text-warning">Warning:</span> Once you delete your account, there is no going back. Please be certain.
                              </p>
                              <Button text="delete my account" url="#" className="delete-account border-0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="row">
                      {myGroups.map(({ id, title, description }) => {
                        return (
                          <div key={id} className="col-lg-4 column-td-6">
                            <div className="card-item">
                              <div className="card-content-wrap">
                                <div className="card-content">
                                  <Link to={`/groups/${id}`}>
                                    <h4 className="card-title mt-0">{title}</h4>
                                    <p className="card-sub">{description}</p>
                                  </Link>
                                </div>
                                <div className="rating-row">
                                  <div className="edit-info-box">
                                    <button type="button" className="theme-btn button-success border-0 mr-1">
                                      <span className="la"><FaRegEdit /></span> Edit
                                    </button>
                                    <button
                                      type="button"
                                      className="theme-btn delete-btn border-0"
                                      data-toggle="modal"
                                      data-target=".product-delete-modal"
                                      onClick={() => {
                                        setShowDeleteModal(true);
                                        setGroupToDelete(id);
                                      }}
                                    >
                                      <span className="la"><FaRegTrashAlt /></span> Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </TabPanel>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />

      {/* Modal */}
      <div className="modal-form text-center">
        <div className={`modal fade account-delete-modal ${showDeleteModal ? 'show' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
          <div className="modal-bg"></div>
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content p-4">
              <div className="modal-top border-0 mb-4 p-0">
                <div className="alert-content">
                  <span className="la warning-icon"><AiOutlineExclamationCircle /></span>
                  <h4 className="modal-title mt-2 mb-1">Your account will be deleted permanently!</h4>
                  <p className="modal-sub">Are you sure to proceed.</p>
                </div>
              </div>
              <div className="btn-box">
                <button onClick={() => setShowDeleteModal(false)} type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
                  Cancel
                </button>

                <button onClick={deleteGroup} type="button" className="theme-btn border-0 button-danger">
                  delete!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
