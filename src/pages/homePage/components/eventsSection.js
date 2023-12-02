import React from 'react';
import EventCard from '../../events/components/eventCard';
import ImageURLs from '../../../assets/images';

export default function EventsSection() {
  return (
    <div className="events-section">
      <div className="container">
        <h2 className='section-title'>EVENTS</h2>
        <div className="row">
        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <EventCard
              eventImageUrl={ImageURLs.mentorshipImageURL}
              title="Black Immigrant entrepreneurship Conference"
              body="Bi-Monthly, we hold immigrant leaders meeting to discuss uprising concerns and solutions for the community. To join, send an email to blackimmigrantthrives@gmail.com"
              date="25 December 2023"
              time="1430"
              location="7, Bayview yards, Ottawa"
              organizersName="Sheldon Team"
              donationLink="/events"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <EventCard
              eventImageUrl={ImageURLs.strorytellingImageURL}
              title="Black Immigrant entrepreneurship Conference"
              body="Bi-Monthly, we hold immigrant leaders meeting to discuss uprising concerns and solutions for the community. To join, send an email to blackimmigrantthrives@gmail.com"
              date="25 December 2023"
              time="1430"
              location="7, Bayview yards, Ottawa"
              organizersName="Sheldon Team"
              donationLink="/events"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <EventCard
              eventImageUrl={ImageURLs.mentorshipImageURL}
              title="Black Immigrant entrepreneurship Conference"
              body="Bi-Monthly, we hold immigrant leaders meeting to discuss uprising concerns and solutions for the community. To join, send an email to blackimmigrantthrives@gmail.com"
              date="25 December 2023"
              time="1430"
              location="7, Bayview yards, Ottawa"
              organizersName="Sheldon Team"
              donationLink="/events"
            />
          </div>
        </div>
      </div>
    </div>
  );
}