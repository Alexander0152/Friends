import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { FriendDetails } from 'views/FriendDetails';

afterEach(() => cleanup());

test('should render FriendDetails component', () => {
    render(<FriendDetails/>);
    const component = screen.getByTestId('friend-details');

    expect(component).toBeInTheDocument();
});

