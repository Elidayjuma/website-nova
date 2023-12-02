import React from 'react';
import {IconSection, IconSectionWithList} from '../../../greelandComponents/common/iconSection';

export default function HowItWorksSection() {
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
                            <IconSectionWithList
                                title="How it works"
                                icon="fa-user"
                                link="/#"
                                linkText="Learn more"
                                list={[
                                    "Fill in the form on whether you are a farmer, vendor, franchisee or a shopper.",
                                    "Ask any questions you might have in the provided form.",
                                    "We will reach back with info based on your selection.",
                                    "Additionally, we will answer all the questions that you ask in the form."
                                    
                                ]}
                            />
                            </div>
                            <div className='col col-12 col-md-6 col-lg-6'>
                            <IconSectionWithList
                                title="What’s in for you"
                                icon="fa-users"
                                link="/#"
                                linkText="Learn more"
                                list={[
                                    "Mouth-watering deals during launch.",
                                    "Early product access.",
                                    "Access to our private group where we’re going to share weekly updates of our progress. We’ll keep you in the loop.",
                                    "We’re going to prioritize your feature requests and integrations.",
                                    "Early access to Greenland agro-system before the general public."

                                ]}
                            />
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}