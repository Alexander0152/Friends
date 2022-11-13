import React from 'react';

import './friendDetailsCard.scss'
import { IFriendDetails } from 'store/Friends/friendsTypes';

interface Props {
    friendDetails: IFriendDetails;
}

export const FriendDetailsContentInfo = ({ friendDetails }: Props) => {

    return (
        <div data-testid="friend-details-content-info" className="friend-details-info__box">
            <div className="friend-details-info__section">
                <div className="friend-details-info__section-item friend-details-info__section-item-column">
                    <div className="friend-details-info__section-title">Bio:</div>
                    <div data-testid="friend-details-content-info-bio" className="friend-details-info__section-text">{friendDetails.bio}</div>
                </div>
            </div>
            <div className="friend-details-info__section">
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">Phone:</div>
                    <div data-testid="friend-details-content-info-phone" className="friend-details-info__section-text">{friendDetails.phone}</div>
                </div>
            </div>
            <div className="friend-details-info__section">
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">Address:</div>
                    <div data-testid="friend-details-content-info-address" className="friend-details-info__section-text">{friendDetails.address1}</div>
                </div>
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">City:</div>
                    <div data-testid="friend-details-content-info-city" className="friend-details-info__section-text">{friendDetails.city}</div>
                </div>
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">State:</div>
                    <div data-testid="friend-details-content-info-state" className="friend-details-info__section-text">{friendDetails.state}</div>
                </div>
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">Zipcode:</div>
                    <div data-testid="friend-details-content-info-zipcode" className="friend-details-info__section-text">{friendDetails.zipcode}</div>
                </div>
                <div className="friend-details-info__section-item">
                    <div className="friend-details-info__section-title">City:</div>
                    <div data-testid="friend-details-content-info-state1" className="friend-details-info__section-text">{friendDetails.state}</div>
                </div>
            </div>
        </div>
    );
}
