import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExampleComponent } from '.';

describe('example test suite', () => {
  it('renders test component', () => {
    render(<ExampleComponent text="Hello World" />);
    const myEl = screen.getByTestId('test-component');
    expect(myEl).toBeInTheDocument();
  });
});
