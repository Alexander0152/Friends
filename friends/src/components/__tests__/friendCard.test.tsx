import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { FriendCard } from 'components/FriendCard';

afterEach(() => cleanup());

const friend = {
    id: 1,
    img: 'img',
    firstName: 'Peter',
    lastName: 'Smith',
    status: 'working',
    available: true,
}

const unAvailableFriend = {
    id: 1,
    img: 'img',
    firstName: 'Peter',
    lastName: 'Smith',
    status: 'working',
    available: false,
}
const handleClick = (value: number) => {
    console.log(value);
}

test('should render FriendCard component', () => {
    render(<FriendCard friend={friend} handleDetailsClick={handleClick}/>);
    const friendCard = screen.getByTestId('friend-card');
    const friendCardName = screen.getByTestId('friend-card-name');
    const friendCardStatus = screen.getByTestId('friend-card-status');
    const friendCardBtnDetails = screen.getByTestId('friend-card-btn-details');

    expect(friendCard).toBeInTheDocument();
    expect(friendCardName).toHaveTextContent(`${friend.firstName} ${friend.lastName}`);
    expect(friendCardStatus).toHaveTextContent(friend.status);
    expect(friendCardBtnDetails).toHaveTextContent('Details');
});

test('should render available user', () => {
    render(<FriendCard friend={friend} handleDetailsClick={handleClick}/>);
    const friendCardAvailability = screen.getByTestId('friend-card-availability');

    expect(friendCardAvailability).toHaveClass('availability_available');
});

test('should render unavailable user', () => {
    render(<FriendCard friend={unAvailableFriend} handleDetailsClick={handleClick}/>);
    const friendCardAvailability = screen.getByTestId('friend-card-availability');

    expect(friendCardAvailability).not.toHaveClass('availability_available');
});