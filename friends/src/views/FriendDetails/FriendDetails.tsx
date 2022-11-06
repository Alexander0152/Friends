import React, { useEffect } from 'react';
import './friendDetails.scss';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getFriendDetailsThunk } from 'store/Friends/friendsThunk';
import { FriendDetailsCard } from 'components/FriendDetailsCard';

export const FriendDetails = () => {
    const dispatch = useAppDispatch();
    const { currentFriendId, currentFriendDetails } = useAppSelector(state => state.friends);

    useEffect(() => {
        if (currentFriendId) {
            dispatch(getFriendDetailsThunk(currentFriendId));
        }
        ////////////////////////////////////////////////////////////////
        dispatch(getFriendDetailsThunk(1));
        ////////////////////////////////////////////////////////////////
    }, []);

    return (
        <div className="friend-details">
            {currentFriendDetails && <FriendDetailsCard friendDetails={currentFriendDetails}/>}
        </div>
    );
};