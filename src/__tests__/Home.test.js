import Home from "../pages/Home";
import { render, screen } from '@testing-library/react';


test('check element exists', () => {
    render(<Home />);
    const element = screen.getByText('Browse Recipes');
    expect(element).toBeTruthy();
});

