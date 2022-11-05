import apiService from 'services/apiService';
import { IFriendResponse } from '../store/Friends/friendsTypes';

export default {
    getFriends(): Promise<IFriendResponse[]> {
        return apiService.get('/friends').then(res => res.data);
    }
};
