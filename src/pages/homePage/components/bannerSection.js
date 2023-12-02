import React from 'react';
import "./style.css";
import ImageURLs from '../../../assets/images';

const BannerSection = (props) => {
  return (
    <div className="banner">
      <img src={props?.bannerImageUrl? props.bannerImageUrl:ImageURLs.forumImageURL} style={{maxHeight:"500px", width:"100%"}} alt="Banner" />
    </div>
  );
}

export default BannerSection;