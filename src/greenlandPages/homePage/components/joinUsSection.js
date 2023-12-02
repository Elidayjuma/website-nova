import React from 'react';
import ListCard from "../../../greelandComponents/common/listCard";
import './style.css'

export default function JoinusSection() {
    return (
        <div className="join-us-section">
            <section className="cards-section">
                    <h2 className='section-title'>JOIN US</h2>
                    <div className='row'>
                        <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                            <ListCard
                                link="/#"
                                linkText="Learn more"
                                title="Farmer"
                                list={[
                                    "We will connect you to the market",
                                    "Offer a wide range of extension services",
                                    "Ensure you sell produce at the best prices"
                                ]}
                            />

                        </div>
                        <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                            <ListCard
                                link="/#"
                                linkText="Learn more"
                                title="Vendor"
                                list={[
                                    "Link you to quality produce",
                                    "Offer logistics services",
                                    "Help you reach a wider market"
                                ]}
                                />
                        </div>
                        <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                            <ListCard
                                link="/#"
                                linkText="Learn more"
                                title="Franchisee"
                                list={[
                                    "Link you to quality produce",
                                    "Offer logistics services",
                                    "Help you reach a wider market",
                                    "Market you on social media",
                                    "Help you with premise brandig",
                                    "Offer technical support",
                                ]}
                                />

                        </div>
                        <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                            <ListCard
                                link="/#"
                                linkText="Learn more"
                                title="Food Seeker"
                                list={[
                                    "Connect you to quality produce",
                                    "Ensure you get the best prices", 
                                    "Get alerts on new deals",
                                    "Access merchants near you",
                                    "Get home delivery"
                                ]}
                                />

                        </div>
                    </div>
            </section>
        </div>
    );
}