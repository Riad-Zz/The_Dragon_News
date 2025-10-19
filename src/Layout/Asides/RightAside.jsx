import React from 'react';
import LoginMethod from '../../Components/LoginMethod/LoginMethod';
import Socials from '../../Components/Socials/Socials';
import Ads from '../../Components/Ads/Ads';
import MoreAds from '../../Components/Ads/MoreAds';

const RightAside = () => {
    return (
        <div>
            <LoginMethod></LoginMethod>
            <Socials></Socials>
            <Ads></Ads>
            <MoreAds></MoreAds>
        </div>
    );
};

export default RightAside;