import React from 'react';
import './main.scss';
import { FriendCard } from 'components/FriendCard';

export const Main = () => {
    return (
        <div className="friends-list">
            <div className="friends-list__wrapper">
                <p className="friends-list-title">Friends</p>
                <div className="friends-list__container">
                    <FriendCard/>
                </div>
            </div>
        </div>
    );
};
