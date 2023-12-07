import React from 'react';
import CenteredSection from "../../../components/common/centeredSection";
import globalStrings from '../../../assets/strings';

export default function AboutUsSection() {
    return (
        <div>
            <div className="container">
                <CenteredSection
                    heading="About Us"
                    body={globalStrings.loremIpsum}
                />

            </div>
        </div>
    );
}