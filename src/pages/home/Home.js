import React from 'react';
import GeneralHeader from '../../components/common/GeneralHeader';
import BannerOne from '../../components/banner/banner1/BannerOne';
import SectionsHeading from '../../components/common/SectionsHeading';
import BrowseCategories from '../../components/other/categories/BrowseCategories';
import Footer from '../../components/common/footer/Footer';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';

const Home = () => {
  return (
    <main className="home-1">
      <GeneralHeader />
      <BannerOne />

      {/* Popular Categories */}
      <section className="cat-area hero-catagory section-bg padding-top-100px padding-bottom-80px text-center">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading title="Most Popular Categories" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
          </div>

          <BrowseCategories />
        </div>
      </section>

      <Footer />
      <ScrollTopBtn />
    </main>
  );
}

export default Home;
