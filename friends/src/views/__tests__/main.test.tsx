import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { Main } from 'views/Main';

afterEach(() => cleanup());

test('should render Main component', () => {
    render(<Main/>);
    const component = screen.getByTestId('main-page');
    const title = screen.getByTestId('main-page-title');

    expect(component).toBeInTheDocument();
    expect(title).toHaveTextContent('Friends');
});

