import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';

 function CircleCard(props) {
  return (
    <div className="event-card">
            <div className="event-img">
                <img src={props.img} alt="event" />
            </div>
            <div className="event-content">
                <h3>{props.title}</h3>
                <FontAwesomeIcon 
                    size="5x"
                    icon={props.icon} />
            </div>
            <div className="event-conetnt-hover">
                
                <div className="event-main-content">
                    {/* <h3>{props.title}</h3> */}
                    <p className="price">{props.body}</p>
                    <a href={props.link} className="event-btn">
                        <span className="text">
                            {props.linkText}                    </span>
                        <span className="btn">
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
  );
}

function CircleCard2(props) {
    return (
      <div className="circle-card">
        <div className='circle-card-content'>
            <p className='text-center'>{props.title}</p>
        </div> 
        <div className='circle-card-content-hover'>
            {/* <h3>{props.title}</h3> */}
            <p>{props.body}</p>
            <a href={props.link} className="circle-card-btn">
                <span className="text">{props.linkText}</span>
            </a>
        </div>
      </div>
    );
  }


export {CircleCard, CircleCard2}