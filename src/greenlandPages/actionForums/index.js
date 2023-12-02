import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PageTitle from '../../components/pageTitle';
import TwoImageSection from '../../components/common/twoImageSection';

function ActionForumsPage() {
    return (
      <div className="action-forums-page">
        <Header/>
        <PageTitle
        title="Action forums"
        backgroundImage="https://demo.themeignite.com/prime-charity-trust/wp-content/themes/prime-charity-trust-pro/assets/images/TittleBanner.png"
      />

        <TwoImageSection
        backgroundImage="https://demo.themeignite.com/prime-charity-trust/wp-content/themes/prime-charity-trust-pro/assets/images/amount/bg-image.png"
        leftSideImage="https://demo.themeignite.com/prime-charity-trust/wp-content/themes/prime-charity-trust-pro/assets/images/amount/volunteer-helping.png"
        heading="Black Immigrant Action Forum: Empowering Solutions for a Stronger Tomorrow"
        bodyText="This is an action table dedicated to addressing the unique challenges faced by Black immigrants and forging actionable solutions. At our forum, we believe in the power of collective action to drive positive change and create a more inclusive and supportive environment for the Black immigrant community."
        actionText=""
        // buttonName='Submit story'
        actionLink="#"

      />

        <Footer/>
      </div>
    );
  }
  
  export default ActionForumsPage;