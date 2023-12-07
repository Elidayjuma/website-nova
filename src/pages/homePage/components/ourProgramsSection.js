import React from 'react';
import Card from '../../../components/common/card';
import ImageURLs from '../../../assets/images';
import globalStrings from '../../../assets/strings';

export default function OurProgramsSection() {
    return (
        <div className="programs-section">
            <div className="container">
                <h2 className='section-title'>DISCOVER OUR PROGRAMS</h2>
                <div className="row">
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <Card
                            link="/#"
                            linkText="Learn more"
                            img={ImageURLs.missionImageURL}
                            title={globalStrings.loremIpsumCardHeading}
                            body={globalStrings.loremIpsumCard}
                        />
                    </div>
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <Card
                            link="/#"
                            linkText="Learn more"
                            img={ImageURLs.missionImageURL}
                            title={globalStrings.loremIpsumCardHeading}
                            body={globalStrings.loremIpsumCard}
                        />
                    </div>

                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <Card
                            link="/#"
                            linkText="Learn more"
                            img={ImageURLs.missionImageURL}
                            title={globalStrings.loremIpsumCardHeading}
                            body={globalStrings.loremIpsumCard}
                        />
                    </div>
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <Card
                            link="/#"
                            linkText="Learn more"
                            img={ImageURLs.missionImageURL}
                            title={globalStrings.loremIpsumCardHeading}
                            body={globalStrings.loremIpsumCard}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}