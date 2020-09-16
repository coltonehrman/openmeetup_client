import React from 'react';
import { GiPositionMarker } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineFlag } from 'react-icons/ai';
import { RiBookmarkLine, RiSendPlane2Line } from 'react-icons/ri';

import { Link } from 'react-router-dom';
import $ from 'jquery';

const GroupDetailsBreadcrumb = ({ title, location, categories }) => {
  $(document).on('click', '.report-list-items .report-modal-btn', function (e) {
    $('body').addClass('modal-open');
    $('.report-modal-box').addClass('show');
    e.preventDefault();
  });

  $(document).on('click', '.report-modal-box .modal-bg, .report-modal-box .modal-top .close', function (e) {
    $('body').removeClass('modal-open');
    $('.report-modal-box').removeClass('show');
    e.preventDefault();
  });

  return (
    <>
      <section className="breadcrumb-area listing-detail-breadcrumb">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 position-relative">
                <div className="breadcrumb-content">
                  <h2 className="breadcrumb__title">
                    {title}
                  </h2>
                  
                  {location && (
                    <p className="breadcrumb__desc">
                      <span className="la d-inline-block"><GiPositionMarker /></span> {location}
                    </p>
                  )}

                  {categories && categories.length > 0 && (
                    <ul className="listing-info mt-3 mb-3">
                      <li>
                        {categories.map(c => (
                          <span key={c.id} className="theme-btn listing-tag">
                            {c.title}
                          </span>
                        ))}
                      </li>
                    </ul>
                  )}

                  <ul className="listing-info">
                    <li>
                      <button type="button" className="theme-btn border-0">
                        <i className="d-inline-block"><RiBookmarkLine /></i> save
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="report-list-items">
                  <ul className="listing-info">
                    <li>
                      <Link to="#" className="theme-btn report-modal-btn">
                        <i className="d-inline-block"><AiOutlineFlag /></i> report
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bread-svg">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" />
          </svg>
        </div>
      </section>

      <div className="modal-form">
        <div className="modal fade report-modal-box bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div className="modal-bg"></div>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-top">
                <button type="button" className="close close-arrow" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="mb-0"><MdClose /></span>
                </button>
                <h4 className="modal-title"><span className="mb-0"><AiOutlineFlag /></span> Report this Listing</h4>
              </div>
              <div className="contact-form-action">
                <form method="post">
                  <div className="msg-box">
                    <label className="label-text">Write Message</label>
                    <div className="form-group">
                      <i className="form-icon"><BsPencil /></i>
                      <textarea className="message-control form-control" name="message" placeholder="What's wrong with this listing?" required></textarea>
                    </div>
                  </div>
                  <div className="btn-box text-right">
                    <button type="submit" className="theme-btn button-success border-0">
                      <i><RiSendPlane2Line /></i> Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupDetailsBreadcrumb;
