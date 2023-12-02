import React from 'react';

import Header from '../../greelandComponents/header';
import Footer from '../../greelandComponents/footer';
import '../../greenlandAssets/style.css';
import ImageURLs from '../../greenlandAssets/images';
import Banner from './components/bannerSection';
import AboutUsSection from './components/aboutUsSection';
import JoinusSection from './components/joinUsSection';
import WorkflowBannerSection from './components/workflowSection';
import HowItWorksSection from './components/howItworks';
import FAQsSection from './components/FAQsSection';

function HomePage() {
    return (
      <div className="homepage">
        <Header/>
        <div id="home-banner"><Banner /></div>
        <section id="about"><AboutUsSection /></section><br/>
        <section id="join-us"></section><JoinusSection /><br/>
        <section id="work-flow"><WorkflowBannerSection bannerImageUrl={ImageURLs.workFlowImageURL}/></section><br/>
        <section id="how-it-works" style={{backgroundImage:`url(${ImageURLs.banner1ImageURL})`}}><HowItWorksSection/></section><br/>
        {/* <section ><Banner bannerImaygeUrl={ImageURLs.banner1ImageURL}/></section><br/> */}
        <section id="faq"><FAQsSection /></section>
        <Footer/>
      </div>
    );
  }
  
  export default HomePage;