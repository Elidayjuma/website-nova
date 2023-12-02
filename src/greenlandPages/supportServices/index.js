import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PageTitle from '../../components/pageTitle';
import Section from '../../components/common/section';
import ImageURLs from '../../assets/images';


function SupportServicesPage() {
    return (
      <div className="support-services-page">
        <Header/>
        <PageTitle
        title="Support Services"
        backgroundImage={ImageURLs.forumBannerImageURL}
        />
      
        <Section
        heading="Peer Mentorship:"
        body="Guidance from someone who understands your journey can make a significant difference. Our peer mentorship program connects individuals with experienced mentors who share similar backgrounds and experiences. "
        />
        <Section
        heading="Leadership Training & Development:"
        body="Empowering individuals to take on leadership roles is integral to community growth. Our leadership training and development programs focus on honing essential skills, cultivating leadership qualities, and fostering a sense of responsibility within the community. Through workshops, training sessions, and mentorship, we aim to shape leaders who can contribute to positive change."
        />
        <Section
        heading="Job Support & Career Development:"
        body="Navigating the job market can be challenging, especially in a new environment. Our job support and career development services provide practical assistance in resume building, interview preparation, and job search strategies. We connect individuals with valuable resources and opportunities to enhance their employability and pursue fulfilling career paths."
        />
        <Section
        heading="Entrepreneurship Support:"
        body="For those with an entrepreneurial spirit, we offer dedicated support to turn ideas into reality. Our entrepreneurship support services guide individuals through the process of business planning, funding, and market entry. We believe in fostering a culture of innovation and economic empowerment within the community."
        />
        <Section
        heading="Mental Health Support:"
        body="Embarking on a new chapter can bring both excitement and challenges. Our mental health support services aim to provide a safe space for individuals to navigate their emotions, offering resources, counseling, and coping strategies to promote emotional well-being. We believe that a healthy mind is crucial for overall success and fulfillment."
        />
        <Section
        heading="How to Access Our Support Services:"
        body="Ready to take advantage of our support services? Reach out to us to discuss your specific needs, and our team will work with you to tailor a plan that aligns with your goals and aspirations. "
        />
    

        <Footer/>
      </div>
    );
  }
  
  export default SupportServicesPage;