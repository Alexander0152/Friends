import React from 'react';

import './friendCard.scss'
import { IFriend } from 'store/Friends/friendsTypes';
import classNames from 'classnames';

interface Props {
    friend: IFriend;
    handleDetailsClick: (friendId: number) => void;
}

export const FriendCard = ({ friend, handleDetailsClick }: Props) => {

    return (
        <div data-testid="friend-card" className="friend-card">
            <div className="friend-card__container">
                <div className="friend-card__content">
                    <div className="friend-card__image">
                        <div
                            data-testid="friend-card-availability"
                            className={classNames('availability', { 'availability_available': friend.available })}/>
                        <img src={friend.img}/>
                    </div>
                    <div className="friend-card__header">
                        <p data-testid="friend-card-name"
                           className="friend-card__name">{`${friend.firstName} ${friend.lastName}`}</p>
                        <div data-testid="friend-card-status" className="status">{friend.status}</div>
                    </div>
                </div>
                <button
                    data-testid="friend-card-btn-details"
                    className="friend-card__button"
                    onClick={() => handleDetailsClick(friend.id)}>
                    Details
                </button>
            </div>
        </div>
    );
}
