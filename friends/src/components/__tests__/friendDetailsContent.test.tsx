import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { FriendDetailsContent } from 'components/FriendDetailsCard/FriendDetailsContent';

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

test('should render FriendDetailsContent component', () => {
    render(<FriendDetailsContent friendDetails={friendDetails}/>);
    const friendDetailsContent = screen.getByTestId('friend-details-content');
    const toggleInfo = screen.getByTestId('friend-details-content-toggle-info');
    const togglePhotos = screen.getByTestId('friend-details-content-toggle-photos');

    expect(friendDetailsContent).toBeInTheDocument();
    expect(toggleInfo).toHaveTextContent(`Info`);
    expect(togglePhotos).toHaveTextContent('Photos');
});

