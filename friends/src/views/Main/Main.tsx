import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import './main.scss';
import { FriendCard } from 'components/FriendCard';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getFriendsThunk } from 'store/Friends/friendsThunk';
import routes from 'constants/routes';

const {
    FRIEND_ROUTE
} = routes;

export const Main = () => {
    const dispatch = useAppDispatch();
    const friendsList = useAppSelector(state => state.friends.friendsList);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getFriendsThunk());
    }, []);

    const handleDetailsClick = (friendId: number) => {
        navigate(`${FRIEND_ROUTE}/${friendId}`);
    };

    const friendCards = useMemo(() => friendsList.map(friend => (
        <FriendCard key={friend.id} friend={friend} handleDetailsClick={handleDetailsClick}/>
    )), [friendsList]);


    return (
        <div data-testid="main-page" className="friends-list">
            <div className="friends-list__wrapper">
                <p data-testid="main-page-title" className="friends-list-title">Friends</p>
                <div className="friends-list__container">
                    {friendsList && friendCards}
                </div>
            </div>
        </div>
    );
};
