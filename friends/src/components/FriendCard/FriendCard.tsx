import React from 'react';
import './friendCard.scss'
import avatar from 'assets/images/Jeremy.png'
import { IFriend } from 'store/Friends/friendsTypes';

interface Props {
    friend: IFriend;
}

export const FriendCard = ({ friend }: Props) => {

    return (
        <div className="friend-card">
            <div className="friend-card__container">
                <div className="friend-card__content">
                    <div className="friend-card__image">
                        <img src={friend.img}/>
                    </div>
                    <div className="friend-card__header">
                        <p className="friend-card__name">{`${friend.firstName} ${friend.lastName}`}</p>
                        <div className="status">{friend.status}</div>
                    </div>
                </div>
                <button className="friend-card__button">Details</button>
            </div>
        </div>
    );
}
