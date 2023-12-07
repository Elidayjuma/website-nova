import React from 'react';
import Card from '../../../components/common/card';
import {CircleCard, CircleCard2} from '../../../components/common/circleCard';
import ImageURLs from '../../../assets/images';
import globalStrings from '../../../assets/strings';

export default function SupportServicesSection() {
    return (
        <div className="support-services-section">
                <hr/>
<section className="cards-section">
            <div className="container">
            <h2 className='section-title'>ONGOING CAMPAIGNS</h2>
                <div className="row">
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <CircleCard2
                            img={ImageURLs.mentorshipImageURL} 
                            icon="faPersonDigging"
                            link="/#"
                            linkText="Learn more"
                            title={globalStrings.loremIpsumCardHeading}
                            body={globalStrings.loremIpsumCard}
                        />
                    </div>
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <CircleCard2
                            img={ImageURLs.mentorshipImageURL}
                            link="/#"
                            linkText="Learn more"
                            // img={ImageURLs.missionImageURL}
                            title={globalStrings.loremIpsumCardHeading}
                            body={globalStrings.loremIpsumCard}
                        />
                    </div>

                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <CircleCard2
                            img={ImageURLs.mentorshipImageURL}
                            link="/#"
                            linkText="Learn more"
                            // img={ImageURLs.missionImageURL}
                            title={globalStrings.loremIpsumCardHeading}
                            body={globalStrings.loremIpsumCard}
                        />
                    </div>
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <CircleCard2
                            img={ImageURLs.mentorshipImageURL}
                            link="/#"
                            linkText="Learn more"
                            // img={ImageURLs.missionImageURL}
                            title={globalStrings.loremIpsumCardHeading}
                            body={globalStrings.loremIpsumCard}
                        />
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}