import React from 'react';

export default function Section(props) {
    return (
      <div className="about-us-section">
        <div className="row">
          <div className="col">
              <h3>{props.heading}</h3>
          </div>
          <div className="col">
          <p className="h5">{props.body}</p>
          </div>
        </div>
      </div>
    );
  }