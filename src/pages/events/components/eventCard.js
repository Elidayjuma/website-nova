import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function EventCard(props) {
    return (
        <div className="event-card">
            <div className="event-img">
                <img src={props.eventImageUrl} alt="event" />
            </div>
            <div className="event-content">
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
            <div className="event-conetnt-hover">
                <ul className="event-date-time-location">
                    <li>
                        <i className="fa-regular fa-calendar-days"></i>
                        <span className="price">{props.date}</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-clock"></i>
                        <span className="price">{props.time}</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <span className="price">{props.location}</span>
                    </li>
                </ul>
                <ul className="event-organised-by">
                    <li>
                        <FontAwesomeIcon icon={icon({ name: 'user' })} />
                        <h6 className="price">Organised by :</h6>
                        <p className="price">{props.organizersName}</p>
                    </li>
                </ul>
                <div className="event-main-content">
                    <h3>{props.title}</h3>
                    <p className="price">{props.body}</p>
                    <a href={props.donationLink} className="event-btn">
                        <span className="text">
                            Attend                    </span>
                        <span className="btn">
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
