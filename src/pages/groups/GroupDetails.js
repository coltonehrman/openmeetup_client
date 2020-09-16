import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import GeneralHeader from '../../components/common/GeneralHeader';
import GroupDetailsBreadcrumb from './GroupDetailsBreadcrumb';
import GroupDetailsSidebar from '../../components/sidebars/GroupDetailsSidebar';
import GeneralMap from '../../components/contact/GeneralMap';
import EventsCarousel from '../../components/places/EventsCarousel';
import Footer from '../../components/common/footer/Footer';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import _ from 'lodash';

const GroupDetails = ({ match }) => {
  const DEFAULT_GROUP_STATE = {
    loading: true,
    group: null
  };

  const [groupState, setGroupState] = useState(DEFAULT_GROUP_STATE);
  const { loading, group } = groupState;

  useEffect(() => {
    const fetcher = async () => {
      const groupId = _.get(match, 'params.groupId', null);
      const res = await fetch(`/groups/${groupId}`);
      let data = null;

      if (res.status !== 500) {
        data = await res.json();
      }

      setGroupState(prevState => ({
        ...prevState,
        loading: false,
        group: data
      }));
    };

    fetcher();
  }, [match, setGroupState]);

  if (loading) return null;
  if (!group) return <Redirect to="/all-groups" />;

  const { title, description, location, categories, events } = group;

  return (
    <main className="listing-details">
      <GeneralHeader />
      <GroupDetailsBreadcrumb title={title} location={location} categories={categories} />

      <section className="single-listing-area padding-top-35px padding-bottom-50px">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-listing-wrap">
                <div className="listing-description padding-top-40px">
                  <h2 className="widget-title">Description</h2>
                  <div className="title-shape"></div>
                  <div className="section-heading mt-4">
                    <p className="sec__desc font-size-16">
                      {description}
                    </p>
                  </div>
                </div>

                {location && (
                  <div className="listing-map gmaps">
                    <h2 className="widget-title">Location</h2>
                    <div className="title-shape margin-bottom-35px"></div>
                    <GeneralMap location={location} />
                  </div>
                )}

                <div className="padding-top-40px">
                  <h2 className="widget-title">Events</h2>
                  <div className="title-shape"></div>
                  {events && events.length > 0
                    ? <EventsCarousel events={events} />
                    : (
                      <div className="section-heading mt-4">
                        <p className="sec__desc font-size-16">
                          No Events
                        </p>
                      </div>
                    )}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <GroupDetailsSidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollTopBtn />
    </main>
  );
};

export default GroupDetails;
