export interface IFriendsStateType {
    friendsList: IFriend[] | [];
    currentFriendId: number | null;
}

export interface IFriend {
    id: number;
    img: string;
    firstName: string;
    lastName: string;
    status: string;
    available: boolean;
}

export interface IFriendResponse {
    id: number;
    img: string;
    first_name: string;
    last_name: string;
    status: string;
    available: boolean;
}