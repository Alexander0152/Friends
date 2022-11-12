import { createAsyncThunk } from '@reduxjs/toolkit';

import friendsService from 'services/friendsService';
import apiWrapper from 'services/apiWrapper';
import loadingService from 'services/loadingService';
import { IFriend } from './friendsTypes';

export const getFriendsThunk = createAsyncThunk('/friendsList',
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

export const getFriendDetailsThunk = createAsyncThunk('/friendsDetails',
    async (friendId: string) => {
        return await apiWrapper.showLoader(friendsService.getFriendDetails(friendId)
                .then((res) =>
                    ({
                        id: res.id,
                        img: res.img,
                        firstName: res.first_name,
                        lastName: res.last_name,
                        phone: res.phone,
                        address1: res.address_1,
                        city: res.city,
                        state: res.state,
                        zipcode: res.zipcode,
                        bio: res.bio,
                        photos: res.photos,
                        statuses: res.statuses,
                        available: res.available
                    }))
                .catch(() => {
                    return Promise.reject();
                }),
            loadingService.loadingStart,
            loadingService.loadingFinish);
    });