import React, { use } from 'react';
import LoginMethod from '../../Components/LoginMethod/LoginMethod';
import Socials from '../../Components/Socials/Socials';
import Ads from '../../Components/Ads/Ads';
import MoreAds from '../../Components/Ads/MoreAds';
import { AuthContext } from '../../Provider/AuthProvider';

const RightAside = () => {
    const {user} = use(AuthContext) ;

    return (
        <div>
            {
                user ? "" : <LoginMethod></LoginMethod> 
            }
            <Socials></Socials>
            <Ads></Ads>
            <MoreAds></MoreAds>
        </div>
    );
};

export default RightAside;