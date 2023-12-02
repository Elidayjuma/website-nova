import React from 'react';

function Section(props) {
    return (
        <div className="two-image-section" style={{backgroundImage:`url(${props.backgroundImage})`}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <img src={props.leftSideImage} alt=""/>
                    </div>
                    <div className="col info-side">
                        <h3>{props.heading}</h3>
                        <p className="h5">{props.bodyText}</p>
                        <p className="h5">{props.actionText}</p>
                        <button className="btn">{props.buttonName}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;