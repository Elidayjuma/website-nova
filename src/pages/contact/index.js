import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ImageURLs from '../../assets/images';
import PageTitle from '../../components/pageTitle';
import ContactForm from './components/contactForm';

function ContactPage() {
    return (
      <div className="contact-page">
        <Header/>
        <PageTitle
          title="Contact Us"
          backgroundImage={ImageURLs.commonBannerURL}
        />
        <div className="container">
        <ContactForm />
        </div>

        <Footer/>
      </div>
    );
  }
  
  export default ContactPage;