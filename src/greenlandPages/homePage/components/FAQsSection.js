import React from 'react';
import { CircleCard2 } from '../../../components/common/circleCard';
import { FAQs } from '../../../greenlandAssets/strings/FAQs'

export default function FAQsSection() {
    console.log(FAQs);
    return (
        <div className="support-services-section">
            
                <div className="container">
                    <h2 className='section-title'>GREENLAND COMMODITIES FAQs</h2>
                    <div className="row">
                        {FAQs.map((item, i) => {
                            return (
                                <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                                    <CircleCard2
                                        // link="/support-services"
                                        // linkText="Learn more"
                                        title={item.question}
                                        body={item.answer}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            
        </div>
    );
}