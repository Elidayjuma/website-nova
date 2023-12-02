import React from 'react';
import "./style.css";
import ImageURLs from '../../../greenlandAssets/images';

const BannerSection = (props) => {
  return (
    <div className="banner">
      <img src={props?.bannerImageUrl? props.bannerImageUrl:ImageURLs.GreenlandBannerImageURL} style={{maxHeight:"800px", width:"100%"}} alt="Banner" />
      <div className="banner-content">
      <div className="h2 banner-title">
        Get quality affordably with zero hustles.<br/>
        Finally!
      </div>
      <div className="h5 banner-info">Greenland Commodities is here for you and me</div>
      </div>
    </div>
  );
}

export default BannerSection;