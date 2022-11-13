import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { FriendDetailsCard } from 'components/FriendDetailsCard';

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

const unAvailableFriendDetails =  {
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
    available: false
}

test('should render FriendDetailsCard component', () => {
    render(<FriendDetailsCard friendDetails={friendDetails}/>);
    const friendDetailsCard = screen.getByTestId('friend-details-card');
    const title = screen.getByTestId('friend-details-card-title');
    const status = screen.getByTestId('friend-details-card-status');
    const image = screen.getByTestId('friend-details-card-img');

    expect(friendDetailsCard).toBeInTheDocument();
    expect(title).toHaveTextContent(`${friendDetails.firstName} ${friendDetails.lastName}`);
    expect(status).toHaveTextContent(friendDetails.statuses[0]);
    expect(image).toHaveAttribute('src', friendDetails.img);
});

test('should render available user', () => {
    render(<FriendDetailsCard friendDetails={friendDetails}/>);
    const friendDetailsCardAvailability = screen.getByTestId('friend-details-card-availability');

    expect(friendDetailsCardAvailability).toHaveClass('availability_available');
});

test('should render unavailable user', () => {
    render(<FriendDetailsCard friendDetails={unAvailableFriendDetails}/>);
    const friendDetailsCardAvailability = screen.getByTestId('friend-details-card-availability');

    expect(friendDetailsCardAvailability).not.toHaveClass('availability_available');
});
