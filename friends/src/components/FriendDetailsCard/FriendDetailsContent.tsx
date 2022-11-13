import React, { useState } from 'react';

import './friendDetailsCard.scss'
import { IFriendDetails } from 'store/Friends/friendsTypes';
import { FriendDetailsContentView } from 'constants/constants';
import classNames from 'classnames';
import { FriendDetailsContentInfo } from './FriendDetailsContentInfo';
import { FriendDetailsContentPhotos } from './FriendDetailsContentPhotos';

interface Props {
    friendDetails: IFriendDetails;
}

const { INFO, PHOTOS } = FriendDetailsContentView;

export const FriendDetailsContent = ({ friendDetails }: Props) => {

    const [view, setView] = useState(INFO);

    return (
        <div data-testid="friend-details-content" className="friend-details-content">
            <div className="friend-details-content__switcher">
                <div
                    data-testid="friend-details-content-toggle-info"
                    className={classNames('friend-details-content__toggle', { 'friend-details-content__toggle_active': view === INFO })}
                    onClick={() => setView(INFO)}>
                    Info
                </div>
                <div
                    data-testid="friend-details-content-toggle-photos"
                    className={classNames('friend-details-content__toggle', { 'friend-details-content__toggle_active': view === PHOTOS })}
                    onClick={() => setView(PHOTOS)}>
                    Photos
                </div>
            </div>
            <div className="friend-details-content__box">
                {view === INFO && <FriendDetailsContentInfo friendDetails={friendDetails}/>}
                {view === PHOTOS && <FriendDetailsContentPhotos photos={friendDetails.photos}/>}
            </div>
        </div>
    );
}
