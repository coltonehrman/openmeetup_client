import React from 'react';
import GeneralHeader from '../../components/common/GeneralHeader';
import Breadcrumb from '../../components/common/Breadcrumb';
import AllCategoriesGrid from '../../components/other/categories/AllCategoriesGrid';
import NewsLetter from '../../components/other/cta/NewsLetter';
import Footer from '../../components/common/footer/Footer';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';

const AllCategories = () => {
  return (
    <main className="all-categories">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb CurrentPgTitle="All Categories" MenuPgTitle="Categories" />

      <section className="cat-area padding-top-40px padding-bottom-80px">
        <div className="container">
          <div className="row">
            <AllCategoriesGrid />
          </div>
        </div>
      </section>

      {/* NewsLetter */}
      <NewsLetter />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default AllCategories;