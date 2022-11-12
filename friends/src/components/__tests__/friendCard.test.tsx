import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { FriendCard } from 'components/FriendCard';

test('should render friendCard component', () => {
    const friend = {
        id: 1,
        img: 'img',
        firstName: 'Peter',
        lastName: 'Smith',
        status: 'working',
        available: true,
    }

    const handleClick = (value: number) => {
        console.log(value);
    }

    render(<FriendCard friend={friend} handleDetailsClick={handleClick}/>);
    expect(true).toBe(true);
});