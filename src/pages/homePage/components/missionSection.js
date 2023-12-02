import React from 'react';
import ImageURLs from '../../../assets/images';

export default function MissionSection() {
    return (
        <div className='mission-section'>
            <div className="two-image-section">
                    <div className="row">
                        <div className="d-none d-lg-block col">
                            <img src={ImageURLs.ACBImageURL} style={{maxHeight:"500px", width:"100%"}} alt="Banner" />
                        </div>
                        <div className="col">
                            <div className="row mission-section-text">
                                <h3>OUR MISSION</h3>
                                <p>Our mission is to empower black immigrants to overcome obstacles and thrive in their journeys through storytelling and media engagement. We recognize that every black immigrant brings a wealth of experiences, perspectives, and talents that enrich our communities. By providing a platform for these voices to be heard, we aim to break down barriers, inspire positive change, and create a supportive environment for all</p>
                            </div>
                            <div className="row mission-section-text">
                                <h3>OUR VISION</h3>
                                <p>At Black Immigrant Thrives, we envision a world where black immigrants are not only welcomed but also celebrated for their contributions and resilience. We aspire to build a community where every member feels a strong sense of belonging and can access the resources and support needed to succeed. Our vision is one of collaboration, empowerment, and mutual growth, where black immigrants can thrive and reach their full potential.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}