import React from 'react';

import './friendDetailsCard.scss'
import { IFriendDetails } from 'store/Friends/friendsTypes';

interface Props {
    friendDetails: IFriendDetails;
}

export const FriendDetailsContentInfo = ({ friendDetails }: Props) => {

    return (
        <div className="friend-details-info__box">
            <div className="friend-details-info__section">
                <div className="friend-details-info__section-item friend-details-info__section-item-column">
                    <div className="friend-details-info__section-title">Bio:</div>
                    <div className="friend-details-info__section-text">{friendDetails.bio}</div>
                </div>
            </div>
            <div className="friend-details-info__section">
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">Phone:</div>
                    <div className="friend-details-info__section-text">{friendDetails.phone}</div>
                </div>
            </div>
            <div className="friend-details-info__section">
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">Address:</div>
                    <div className="friend-details-info__section-text">{friendDetails.address1}</div>
                </div>
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">City:</div>
                    <div className="friend-details-info__section-text">{friendDetails.city}</div>
                </div>
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">State:</div>
                    <div className="friend-details-info__section-text">{friendDetails.state}</div>
                </div>
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">Zipcode:</div>
                    <div className="friend-details-info__section-text">{friendDetails.zipcode}</div>
                </div>
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">City:</div>
                    <div className="friend-details-info__section-text">{friendDetails.state}</div>
                </div>
            </div>
        </div>
    );
}
