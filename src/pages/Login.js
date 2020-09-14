import React, { Component } from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import LoginBox from "../components/other/account/LoginBox";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

class Login extends Component {
  state = {
    breadcrumbimg: require('../assets/images/bread-bg2.jpg'),
  }

  render() {
    return (
      <main className="login-page">
        {/* Header */}
        <GeneralHeader />

        {/* Breadcrumb */}
        <Breadcrumb CurrentPgTitle="Login" img={this.state.breadcrumbimg} />

        <section className="form-shared padding-top-40px padding-bottom-100px">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <LoginBox title="Login to your account" />
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
  }
}

export default Login;