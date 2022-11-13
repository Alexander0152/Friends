import React from 'react';

import './friendDetailsCard.scss'
import { IFriendDetails } from 'store/Friends/friendsTypes';
import { FriendDetailsContent } from './FriendDetailsContent';
import classNames from 'classnames';

interface Props {
    friendDetails: IFriendDetails;
}

export const FriendDetailsCard = ({ friendDetails }: Props) => {

    return (
        <div data-testid="friend-details-card" className="friend-details-card">
            <div className="friend-details-card__header">
                <div className="friend-details-card__image">
                    <div data-testid="friend-details-card-availability"
                         className={classNames('availability', { 'availability_available': friendDetails.available })}/>
                    <img data-testid="friend-details-card-img" src={friendDetails.img}/>
                </div>
                <p data-testid="friend-details-card-title" className="friend-details-card__title">
                    {`${friendDetails.firstName} ${friendDetails.lastName}`}
                </p>
                <div data-testid="friend-details-card-status" className="status friend-details-card__status">
                    {friendDetails.statuses[0]}
                </div>
            </div>
            {friendDetails && <FriendDetailsContent friendDetails={friendDetails}/>}
        </div>
    );
}
