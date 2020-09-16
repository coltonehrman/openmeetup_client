import React, { useContext } from 'react';
import GeneralHeader from '../../components/common/GeneralHeader';
import Breadcrumb from '../../components/common/Breadcrumb';
import GroupsGrid from '../../components/places/GroupsGrid';
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
      <GeneralHeader />
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
        </div>
      </section>

      <Footer />
      <ScrollTopBtn />
    </main>
  );
}

export default AllGroups;
