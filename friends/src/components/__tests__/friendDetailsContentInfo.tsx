import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { FriendDetailsContentInfo } from 'components/FriendDetailsCard/FriendDetailsContentInfo';

afterEach(() => cleanup());

const friendDetails =  {
    id: 1,
    img: 'img',
    firstName: 'Jack',
    lastName: 'Smith',
    phone: '123',
    address1: 'address',
    city: 'New-York',
    state: 'New-York state',
    zipcode: '456',
    bio: 'bio',
    photos: ['first_photo', 'second_photo'],
    statuses: ['At work', 'On vacations'],
    available: true
}

test('should render FriendDetailsContentInfo component', () => {
    render(<FriendDetailsContentInfo friendDetails={friendDetails}/>);
    const component = screen.getByTestId('friend-details-content-info');
    const bio = screen.getByTestId('friend-details-content-info-bio');
    const phone = screen.getByTestId('friend-details-content-info-phone');
    const address = screen.getByTestId('friend-details-content-info-address');
    const city = screen.getByTestId('friend-details-content-info-city');
    const state = screen.getByTestId('friend-details-content-info-state');
    const zipcode = screen.getByTestId('friend-details-content-info-zipcode');
    const state1 = screen.getByTestId('friend-details-content-info-state1');

    expect(component).toBeInTheDocument();
    expect(bio).toHaveTextContent(friendDetails.bio);
    expect(phone).toHaveTextContent(friendDetails.phone);
    expect(address).toHaveTextContent(friendDetails.address1);
    expect(city).toHaveTextContent(friendDetails.city);
    expect(state).toHaveTextContent(friendDetails.state);
    expect(zipcode).toHaveTextContent(friendDetails.zipcode);
    expect(state1).toHaveTextContent(friendDetails.state);
});

