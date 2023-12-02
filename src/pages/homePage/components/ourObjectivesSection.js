import React from 'react';
import IconSection from '../../../components/common/iconSection';

export default function OurObjectivesSection() {
    return (
        <div className="our-objectives-section">
            <div className="container">
            </div>
            <section className="cards-section">
                <div className='container'>
                    {/* <h2 className='section-title'>OUR OBJECTIVES/WORK</h2> */}
                    <div className="container">
                        <div className="row">
                            <div className='col col-12 col-md-6 col-lg-6'>
                            <IconSection
                                title="Partner with us "
                                body="Collaboration is at the heart of our impact. If you represent a business, nonprofit organization, or educational institution aligned with our mission, we invite you to partner with Black Immigrant Thrives. Get in touch with our team here."
                                icon="fa-user"
                                link="/get-involved"
                                linkText="Learn more"
                            />
                            </div>
                            <div className='col col-12 col-md-6 col-lg-6'>
                            <IconSection
                                title="Hire us"
                                body="We offer flexible consulting models tailored to the needs of NGOs and organizations. Whether you're looking for a one-time consultation or ongoing support, our services are adaptable to suit your organization's unique requirements and goals."
                                icon="fa-users"
                                link="/hire-us"
                                linkText="Learn more"
                            />
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}