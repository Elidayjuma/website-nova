import React from 'react';

export default function Section(props) {
    return (
        <div className="container">
            <div className="common-section">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-6">
                        <h3>{props.heading}</h3>
                    </div>
                    <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <p className="h5">{props.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}