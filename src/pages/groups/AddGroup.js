import React, { useState, useContext } from 'react';

import { BsPencilSquare, BsPencil } from 'react-icons/bs';
import { FiMap } from 'react-icons/fi';
import Select from 'react-select';

import GeneralHeader from '../../components/common/GeneralHeader';
import Breadcrumb from '../../components/common/Breadcrumb';
import Footer from '../../components/common/footer/Footer';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';

import { CategoriesContext } from '../../contexts';

const AddGroup = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [location, setLocation] = useState(['', '']);

  const [categoriesData] = useContext(CategoriesContext);
  const [longitude, latitude] = location;

  let { categories } = categoriesData;

  const handleGroupSubmit = async e => {
    e.preventDefault();
    console.log(title, description, selectedCategory, location);

    const res = await fetch('/groups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        location,
        categories: selectedCategory.map(({ value }) => value)
      })
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <main className="add-listing">
      <GeneralHeader />
      <Breadcrumb CurrentPgTitle="Add Group" MenuPgTitle="Groups" />

      {/* Add Listing */}
      <section className="add-listing-area padding-top-40px padding-bottom-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <form onSubmit={handleGroupSubmit}>
                {/* General Information */}
                <div className="billing-form-item">
                  <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">General Information</h3>
                    <div className="title-shape margin-top-10px"></div>
                  </div>

                  <div className="billing-content">
                    <div className="contact-form-action">
                      <div className="row">
                        {/* Title */}
                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="label-text">Group Title</label>
                            <div className="form-group">
                              <span className="la form-icon">
                                <BsPencilSquare />
                              </span>
                              <input
                                className="form-control"
                                type="text"
                                name="title"
                                placeholder="Enter your group title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
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
                                <BsPencil />
                              </span>
                              <textarea
                                className="message-control form-control"
                                name="description"
                                placeholder="Write your group description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        {/* End Description */}

                        {/* Categories */}
                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="label-text">Categories</label>
                            <div className="form-group mb-0">
                              <Select
                                isMulti
                                value={selectedCategory}
                                onChange={setSelectedCategory}
                                placeholder="Select a Category"
                                options={categories.map(({ id, title }) => ({
                                  value: id,
                                  label: title
                                }))}
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Categories */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End General Information */}

                {/* Location */}
                <div className="billing-form-item">
                  <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">
                      Add Location
                    </h3>
                    <div className="title-shape margin-top-10px"></div>
                  </div>

                  <div className="billing-content">
                    <div className="contact-form-action">
                      <div className="row">
                        {/* Longitude */}
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="label-text">Longitude</label>
                            <div className="form-group">
                              <span className="la form-icon">
                                <FiMap />
                              </span>
                              <input
                                className="form-control"
                                type="text"
                                name="longitude"
                                placeholder="Longitude"
                                value={longitude}
                                onChange={e => setLocation([e.target.value, latitude])}
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Longitude */}

                        {/* Latitude */}
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="label-text">Latitude</label>
                            <div className="form-group">
                              <span className="la form-icon">
                                <FiMap />
                              </span>
                              <input
                                className="form-control"
                                type="text"
                                name="latitude"
                                placeholder="Latitude"
                                value={latitude}
                                onChange={e => setLocation([longitude, e.target.value])}
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Latitude */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Location */}

                {/* Submit Button */}
                <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                  <div className="billing-content p-0">
                    <div className="btn-box mt-4">
                      <button type="submit" className="theme-btn border-0">submit group</button>
                    </div>
                  </div>
                </div>
                {/* End Submit Button */}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollTopBtn />
    </main >
  );
};

export default AddGroup;
