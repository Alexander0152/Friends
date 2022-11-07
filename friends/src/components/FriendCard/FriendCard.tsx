import React from 'react';

import './friendCard.scss'
import avatar from 'assets/images/Jeremy.png'
import { IFriend } from 'store/Friends/friendsTypes';
import classNames from 'classnames';

interface Props {
    friend: IFriend;
    handleDetailsClick: (friendId: number) => void;
}

export const FriendCard = ({ friend, handleDetailsClick }: Props) => {

    return (
        <div className="friend-card">
            <div className="friend-card__container">
                <div className="friend-card__content">
                    <div className="friend-card__image">
                        <div className={classNames('availability', { 'availability_available': friend.available })}/>
                        <img src={avatar}/>
                        {/*<img src={friend.img}/>*/}
                    </div>
                    <div className="friend-card__header">
                        <p className="friend-card__name">{`${friend.firstName} ${friend.lastName}`}</p>
                        <div className="status">{friend.status}</div>
                    </div>
                </div>
                <button
                    className="friend-card__button"
                    onClick={() => handleDetailsClick(friend.id)}>
                    Details
                </button>
            </div>
        </div>
    );
}
