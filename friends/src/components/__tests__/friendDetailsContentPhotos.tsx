import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { FriendDetailsContentPhotos } from 'components/FriendDetailsCard/FriendDetailsContentPhotos';

afterEach(() => cleanup());

const photos =  ['first_photo', 'second_photo']

test('should render FriendDetailsContentPhotos component', () => {
    render(<FriendDetailsContentPhotos photos={photos}/>);
    const component = screen.getByTestId('friend-details-content-photos');
    const firstPhoto = screen.getByTestId('friend-details-content-photos0');
    const secondPhoto = screen.getByTestId('friend-details-content-photos1');

    expect(component).toBeInTheDocument();
    expect(firstPhoto).toHaveAttribute('src', photos[0]);
    expect(secondPhoto).toHaveAttribute('src', photos[1]);
});

