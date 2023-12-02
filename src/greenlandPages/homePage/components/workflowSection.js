import React from 'react';
import "./style.css";
import ImageURLs from '../../../assets/images';

const WorkflowBannerSection = (props) => {
  return (
    <div className="banner">
        <h2 className='section-title'>OUR PROCESS</h2>
        <div>
            <img src={props?.bannerImageUrl? props.bannerImageUrl:ImageURLs.forumImageURL} style={{maxHeight:"700px", width:"100%"}} alt="Banner" />
        </div>
    </div>
  );
}

export default WorkflowBannerSection;