import React from 'react';
import './friendDetailsCard.scss'
import { IFriendDetails } from 'store/Friends/friendsTypes';
import { FriendDetailsContent } from './FriendDetailsContent';

interface Props {
    friendDetails: IFriendDetails;
}

export const FriendDetailsCard = ({ friendDetails }: Props) => {

    return (
        <div className="friend-details-card">
            <div className="friend-details-card__header">
                <div className="friend-details-card__image">
                    <img src={friendDetails.img}/>
                </div>
                <p className="friend-details-card__title">
                    {`${friendDetails.firstName} ${friendDetails.lastName}`}
                </p>
                <div className="status friend-details-card__status">
                    {friendDetails.statuses[0]}
                </div>
            </div>
            {friendDetails && <FriendDetailsContent friendDetails={friendDetails}/>}
        </div>
    );
}
