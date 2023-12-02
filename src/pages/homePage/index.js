import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import './components/style.css'
import ImageURLs from '../../assets/images';
import Banner from './components/bannerSection';
import AboutUsSection from './components/aboutUsSection';
import MissionSection from './components/missionSection';
import OurApproachSection from './components/ourApproachSection';
import OurObjectivesSection from './components/ourObjectivesSection';
// import EventsSection from './components/eventsSection';
import OuProgramsSection from './components/ourProgramsSection';
import MiscSection from './components/SupportServicesSection';

function HomePage() {
    return (
      <div className="homepage">
        <Header/>
        <Banner />
        <AboutUsSection />
        <MissionSection />
        <OurApproachSection /><br/>
        <Banner 
          bannerImageUrl={ImageURLs.missionImageURL}
        /><br/>
        <OurObjectivesSection />
        <OuProgramsSection/>
        {/* <EventsSection /> */}
        <MiscSection />
        <Footer/>
      </div>
    );
  }
  
  export default HomePage;