import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { AiOutlineEye } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { FaRegCalendarCheck } from 'react-icons/fa';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const EventsCarousel = ({ events }) => {
  if (!events || events.length <= 0) return null;

  const responsive = {
    // breakpoint from 0 up
    0: { items: 1 },
    // breakpoint from 480 up
    480: { items: 2 }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <OwlCarousel
          className="card-carousel mt-5"
          margin={10}
          autoplay={false}
          nav={false}
          dots={true}
          items={2}
          smartSpeed={1000}
          animateOut="slideOutDown"
          animateIn="fadeIn"
          responsive={responsive}
        >
          {events.map((event, index) => (
            <div className="card-item" key={index}>
              <div className="card-content-wrap">
                <div className="card-content">
                  <h5 className="card-meta pl-0">Category</h5>
                  <h4 className="card-title">{event.title}</h4>
                  <p className="card-sub">
                    {event.description}
                  </p>

                  <ul className="info-list padding-top-20px">
                    <li>
                      <span className="la d-inline-block"><FaRegCalendarCheck /></span> {event.date}
                    </li>
                  </ul>
                </div>

                <div className="rating-row">
                  <div className="rating-rating">
                    <span className="info__count"><AiOutlineEye /></span> 200
                  </div>

                  <div className="listing-info">
                    <span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
                      <FiHeart />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div >
  );
};

export default EventsCarousel;
