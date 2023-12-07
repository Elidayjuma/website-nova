import React from 'react';
import IconSection from '../../../components/common/iconSection';
import globalStrings from '../../../assets/strings';

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
                                title={globalStrings.loremIpsumCardHeading}
                                body={globalStrings.loremIpsumCard}
                                icon="fa-user"
                                link="/#"
                                linkText="Learn more"
                            />
                            </div>
                            <div className='col col-12 col-md-6 col-lg-6'>
                            <IconSection
                                title={globalStrings.loremIpsumCardHeading}
                                body={globalStrings.loremIpsumCard}
                                icon="fa-users"
                                link="/#"
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