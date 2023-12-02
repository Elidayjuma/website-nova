import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Section from '../../components/common/section';
import PageTitle from '../../components/pageTitle';
import IconSection from '../../components/common/iconSection';
import ImageURLs from '../../assets/images';


function HireUs() {
  return (
    <div className="hire-us-page">
      <Header />
      <PageTitle
        title="Hire Us"
        backgroundImage={ImageURLs.forumBannerImageURL}
      />
      <div className="container">
        <div className="row ">
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="Inclusion, and diversity training: "
              body="We can help you foster inclusive workplaces through our top-notch Inclusion Training and Consulting services. We specialize in providing comprehensive consulting solutions to companies and firms seeking to enhance diversity, equity, and inclusion within their organizational culture."
              icon="fa-user"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="Consulting services: "
              body="We offer flexible consulting models tailored to the needs of NGOs and organizations. Whether you're looking for a one-time consultation or ongoing support, our services are adaptable to suit your organization's unique requirements and goals."
              icon="fa-users"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="Hire our trained newcomers:"
              body="Hire from our pool of highly skilled newcomers ready to contribute their talents to your organization. Our graduates are equipped with the knowledge, experience, and dedication to make a meaningful impact in your workplace."
              icon="fa-podcast"
            />
          </div>
        </div>
      </div>< hr/>
      <div className="container mt-5">
        <h3>Why Hire Our Trained Newcomers?</h3>
        <Section
          heading="Diverse Skill Sets: "
          body="Our training programs focus on developing a wide range of skills, ensuring that our graduates bring diverse and valuable expertise to your organization."
        />
        <Section
          heading="Cultural Competence: "
          body="Trained in Canadian workplace culture, our newcomers seamlessly integrate into your team, fostering a harmonious and inclusive work environment."
        />
        <Section
          heading="Adaptability:"
          body="Newcomers who have completed our programs showcase remarkable adaptability, having successfully navigated the challenges of relocation and cultural transition."
        />
        <Section
          heading="Language Proficiency: "
          body="Many of our graduates have honed their language skills during our communication training, ensuring effective communication within your organization."
        />

      </div><hr/>

      <div className="container">
        <h3>Opportunities for Your Organization:</h3>
        <div className="row">
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="Full-Time Positions: "
              body="Explore the possibility of filling open positions within your organization with our highly skilled graduates, bringing fresh perspectives and innovative solutions to your team."
              icon="fa-user"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="Internship Programs: "
              body="Consider offering internship opportunities to our newcomers. This allows them to apply their training in real-world scenarios while providing your organization with dedicated, enthusiastic talent."
              icon="fa-users"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="Dedicated Volunteers:"
              body="Our graduates are not just looking for jobs; many are eager to contribute to their communities through volunteer opportunities. Engage them in meaningful projects that align with your organization's mission."
              icon="fa-podcast"
            />
          </div>
        </div>
        <br />
        <p>Click here to <a href="/contact-us">get in touch with our team</a></p>
      </div>

      <Footer />
    </div>
  );
}

export default HireUs;