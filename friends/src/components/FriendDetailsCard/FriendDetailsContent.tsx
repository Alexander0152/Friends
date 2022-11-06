import React from 'react';
import './friendDetailsCard.scss'
import { IFriendDetails } from 'store/Friends/friendsTypes';

interface Props {
    friendDetails: IFriendDetails;
}

export const FriendDetailsContent = ({ friendDetails }: Props) => {

    return (
        <div className="friend-details-content">
            <div className="friend-details-content__switcher">
                <div className="friend-details-content__toggle">Info</div>
                <div className="friend-details-content__toggle">Photos</div>
            </div>
            <div className="friend-details-content__box">

            </div>
        </div>

    );
}
