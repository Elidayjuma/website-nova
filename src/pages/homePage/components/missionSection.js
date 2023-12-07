import React from 'react';
import ImageURLs from '../../../assets/images';
import globalStrings from '../../../assets/strings';

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
                                <p>{globalStrings.loremIpsum}</p>
                            </div>
                            <div className="row mission-section-text">
                                <h3>OUR VISION</h3>
                                <p>{globalStrings.loremIpsum}</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}