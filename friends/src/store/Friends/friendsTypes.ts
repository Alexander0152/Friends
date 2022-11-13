export interface IFriendsStateType {
    friendsList: IFriend[] | [];
    currentFriendDetails: IFriendDetails | null;
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

export interface IFriendDetails {
    id: number;
    img: string;
    firstName: string;
    lastName: string;
    phone: string;
    address1: string;
    city: string;
    state: string;
    zipcode:string;
    bio: string;
    photos: string[];
    statuses: string[];
    available: boolean;
}

export interface IFriendDetailsResponse {
    id: number;
    img: string;
    first_name: string;
    last_name: string;
    phone: string;
    address_1: string;
    city: string;
    state: string;
    zipcode:string;
    bio: string;
    photos: string[];
    statuses: string[];
    available: boolean;
}