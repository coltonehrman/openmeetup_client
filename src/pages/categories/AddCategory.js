import React, { useState, useContext } from 'react';
import { BsPencil, BsChatQuote } from 'react-icons/bs';

import GeneralHeader from '../../components/common/GeneralHeader';
import Breadcrumb from '../../components/common/Breadcrumb';
import NewsLetter from '../../components/other/cta/NewsLetter';
import Footer from '../../components/common/footer/Footer';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';

import { GlobalErrorContext } from '../../contexts';

const AddCategory = () => {
  const DEFAULT_FORM_FIELDS = {
    title: '',
    description: ''
  };

  const [,pushError] = useContext(GlobalErrorContext);

  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  const [submitting, setSubmitting] = useState(false);

  const handleFormFieldChange = field => e => {
    setFormFields({
      ...formFields,
      [field]: e.target.value
    });
  };

  const handleSubmitCategory = async e => {
    e.preventDefault();

    setSubmitting(true);

    const res = await fetch('/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formFields)
    });

    const data = await res.json();

    if (res.status !== 200) pushError(data);
    
    setSubmitting(false);
  };

  return (
    <main className="add-listing">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb CurrentPgTitle="Add Category" MenuPgTitle="Categories" />

      {/* Add Listing */}
      <section className="add-listing-area padding-top-40px padding-bottom-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="billing-form-item">

                {/* Title */}
                <div className="billing-title-wrap">
                  <h3 className="widget-title pb-0">Add Category</h3>
                  <div className="title-shape margin-top-10px"></div>
                </div>
                {/* End Title */}

                {/* Form */}
                <div className="billing-content">
                  <div className="contact-form-action">
                    <form method="post" onSubmit={handleSubmitCategory}>
                      <div className="row">

                        {/* Title */}
                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="label-text">Category Title</label>
                            <div className="form-group">
                              <span className="la form-icon">
                                <BsPencil />
                              </span>
                              <input
                                className="form-control"
                                type="text"
                                name="title"
                                placeholder="Enter category title"
                                value={formFields['title']}
                                onChange={handleFormFieldChange('title')}
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Title */}

                        {/* Description */}
                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="label-text">Description</label>
                            <div className="form-group">
                              <span className="la form-icon">
                                <BsChatQuote />
                              </span>
                              <textarea
                                className="message-control form-control"
                                name="description"
                                placeholder="Write description of category"
                                value={formFields['description']}
                                onChange={handleFormFieldChange('description')}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        {/* End Description */}

                      </div>
                    </form>
                  </div>
                </div>
                {/* End Form */}
              </div>

              {/* Submit Button */}
              <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                <div className="billing-content p-0">
                  <div className="btn-box mt-4">
                    <button
                      type="submit"
                      className="theme-btn border-0"
                      onClick={handleSubmitCategory}
                      disabled={submitting}
                    >
                      submit category
                    </button>
                  </div>
                </div>
              </div>
              {/* End Submit Button */}

            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />

    </main>
  );
};

export default AddCategory;
