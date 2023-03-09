import Home from "../pages/Home";
import { render, screen, userEvent } from '@testing-library/react';


test('check element exists', async () => {
    render(<Home />);
    const element = await screen.findByText('Browse Recipes');
    expect(element).toBeTruthy();
});

