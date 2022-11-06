import apiService from 'services/apiService';
import { IFriendDetailsResponse, IFriendResponse } from 'store/Friends/friendsTypes';

export default {
    getFriends(): Promise<IFriendResponse[]> {
        return apiService.get('/friends').then(res => res.data);
    },
    getFriendDetails(friendId: number): Promise<IFriendDetailsResponse> {
        // return apiService.get(`/friends/${friendId}`).then(res => res.data); //should be
        return apiService.get('/friends/id').then(res => res.data);  //hardcode url as there is no endpoints for specific id
    }
};
