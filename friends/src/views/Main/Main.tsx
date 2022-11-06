import React, { useEffect, useMemo } from 'react';
import './main.scss';
import { FriendCard } from 'components/FriendCard';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getFriendsThunk } from 'store/Friends/friendsThunk';

export const Main = () => {
    const dispatch = useAppDispatch();
    const friendsList = useAppSelector(state => state.friends.friendsList);

    useEffect(() => {
        dispatch(getFriendsThunk());
    }, []);

    const friendCards = useMemo(() => friendsList.map(friend => (
        <FriendCard key={friend.id} friend={friend}/>
    )), [friendsList]);


    return (
        <div className="friends-list">
            <div className="friends-list__wrapper">
                <p className="friends-list-title">Friends</p>
                <div className="friends-list__container">
                    {friendsList && friendCards}
                </div>
            </div>
        </div>
    );
};
