import React from 'react';

export default function CenteredSection(props) {
    return (
        <div className="container">
            <div className="common-section">
                <div className="row">
                    <div className='title'>
                        <h3>{props.heading}</h3>
                    </div>
                    <div >
                        <p className="h5">{props.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}