import React from 'react';
import Card from "../../../components/common/card.js";
import './style.css'
import globalStrings from '../../../assets/strings/index.js';

export default function OurApproachSection() {
    return (
        <div className="our-approach-section">
            <section className="cards-section">
                    <h2 className='section-title'>OUR APPROACH</h2>
                    <div className='row'>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                link="/#"
                                linkText="Learn more"
                                title={globalStrings.loremIpsumCardHeading}
                                body={globalStrings.loremIpsumCard}
                            />

                        </div>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                link="/#"
                                linkText="Learn more"
                                title={globalStrings.loremIpsumCardHeading}
                                body={globalStrings.loremIpsumCard}
                            />
                        </div>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                link="/#"
                                linkText="Learn more"
                                title={globalStrings.loremIpsumCardHeading}
                                body={globalStrings.loremIpsumCard}
                            />

                        </div>
                    </div>
            </section>
        </div>
    );
}