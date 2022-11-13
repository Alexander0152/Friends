import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate, useParams } from 'react-router-dom';

import './friendDetails.scss';
import { getFriendDetailsThunk } from 'store/Friends/friendsThunk';
import { FriendDetailsCard } from 'components/FriendDetailsCard';
import routes from 'constants/routes';
import leftArrow from 'assets/icons/leftArrow.svg';

const {
    MAIN_ROUTE
} = routes;

export const FriendDetails = () => {
    const dispatch = useAppDispatch();
    const { currentFriendDetails } = useAppSelector(state => state.friends);
    const navigate = useNavigate();
    const params = useParams();
    const currentFriendId = params.friendId;

    useEffect(() => {
        if (currentFriendId) {
            dispatch(getFriendDetailsThunk(currentFriendId));
        }
    }, []);

    return (
        <div data-testid="friend-details" className="friend-details">
            <button className="friend-details__button-back" onClick={() => navigate(MAIN_ROUTE)}>
                <img src={leftArrow}/>
            </button>
            {currentFriendDetails && <FriendDetailsCard friendDetails={currentFriendDetails}/>}
        </div>
    );
};