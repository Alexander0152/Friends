import React, { useEffect } from 'react';
import './main.scss';
import { FriendCard } from 'components/FriendCard';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getFriendsThunk } from 'store/Friends/friendsThunk';
import { IFriend } from 'store/Friends/friendsTypes';

export const Main = () => {
    const dispatch = useAppDispatch();
    const friendsList = useAppSelector(state => state.friends.friendsList);

    useEffect(() => {
        dispatch(getFriendsThunk());
    }, []);

    const friendCards = (list: IFriend[]) => {
        return list.map(friend => {
                return (
                    <FriendCard key={friend.id} friend={friend}/>
                );
            },
        );
    };

    return (
        <div className="friends-list">
            <div className="friends-list__wrapper">
                <p className="friends-list-title">Friends</p>
                <div className="friends-list__container">
                    {friendsList && friendCards(friendsList)}
                </div>
            </div>
        </div>
    );
};
