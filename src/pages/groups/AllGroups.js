import React, { useContext } from 'react';
import GeneralHeader from '../../components/common/GeneralHeader';
import Breadcrumb from '../../components/common/Breadcrumb';
import GroupsGrid from '../../components/places/GroupsGrid';
// import Button from '../../components/common/Button';
// import { FiRefreshCw } from 'react-icons/fi';
import NewsLetter from '../../components/other/cta/NewsLetter';
import Footer from '../../components/common/footer/Footer';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import GenericHeader from '../../components/common/GenericHeader';

import { GroupsContext } from '../../contexts';

const AllGroups = () => {
  const [groupsState] = useContext(GroupsContext);
  const { groups, hasGroups } = groupsState;

  if (!hasGroups) return null;

  return (
    <main className="listing-grid">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb CurrentPgTitle="All Groups" MenuPgTitle="Groups" />

      {/* Place Grid */}
      <section className="card-area padding-top-40px padding-bottom-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <GenericHeader current={groups.length} total={groups.length} />
            </div>
          </div>

          <div className="row">
            <GroupsGrid groups={groups} />
          </div>

          {/* <div className="row">
            <div className="col-lg-12">
              <div className="button-shared mt-4 text-center">
                <Button text="Load More" url="#">
                  <span className="la">
                    <FiRefreshCw />
                  </span>
                </Button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default AllGroups;
