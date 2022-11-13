import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { CustomSpinner } from 'components/shared/CustomSpinner';

afterEach(() => cleanup());

test('should render CustomSpinner component', () => {
    render(<CustomSpinner/>);
    const component = screen.getByTestId('custom-spinner');

    expect(component).toBeInTheDocument();
});

