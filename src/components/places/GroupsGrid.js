import React from 'react';
import { IoMdStar, IoMdStarHalf } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const GroupsGrid = ({ groups }) => {
  return (
    <>
      {groups.map(group => {
        return (
          <div className="col-lg-4 column-td-6" key={group.id}>
            <div className="card-item">
              <div className="card-image-wrap">
                <div className="card-image">
                  <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" style={{ cursor: 'pointer' }}>
                    <FiHeart />
                  </span>
                </div>
              </div>

              <div className="card-content-wrap">
                <div className="card-content">
                  <Link to={`/groups/${group.id}`}>
                    <h5 className="card-meta" style={{ paddingLeft: 0 }}>
                      {group.categories.map(c => c.title).join(', ')}
                    </h5>

                    <h4 className="card-title">
                      {group.title}
                    </h4>

                    <p className="card-sub">
                      {group.description}
                    </p>
                  </Link>

                  <ul className="info-list padding-top-20px">
                    <li><span className="la d-inline-block"><FaRegCalendarCheck /></span> {group.createdAt}</li>
                  </ul>
                </div>

                <div className="rating-row">
                  <div className="rating-rating">
                    <span><IoMdStar /></span>
                    <span><IoMdStar /></span>
                    <span><IoMdStar /></span>
                    <span><IoMdStarHalf /></span>
                    <span><IoMdStar className="last-star" /></span>
                    <span className="rating-count">4.5</span>
                  </div>

                  <div className="listing-info">
                    <ul>
                      <li><span className="info__count"><AiOutlineEye /></span> 204</li>
                      <li>
                        <span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
                          <FiHeart />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default GroupsGrid;
