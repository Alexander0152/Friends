import { createAsyncThunk } from '@reduxjs/toolkit';

import friendsService from 'services/friendsServices';
import apiWrapper from 'services/apiWrapper';
import loadingService from 'services/loadingService';
import { IFriend } from './friendsTypes';

export const getFriendsThunk = createAsyncThunk('/friends',
    async () => {
        return await apiWrapper.showLoader(friendsService.getFriends()
                .then((res) => {
                    const friends: IFriend[] = res.map((friend) => {
                        return {
                            id: friend.id,
                            img: friend.img,
                            firstName: friend.first_name,
                            lastName: friend.last_name,
                            status: friend.status,
                            available: friend.available
                        }
                    });
                    return friends;
                })
                .catch(() => {
                    return Promise.reject();
                }),
            loadingService.loadingStart,
            loadingService.loadingFinish);
    });