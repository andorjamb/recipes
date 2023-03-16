import Home from "../pages/Home";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";


test('check element exists', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    const element = screen.getByText('Browse Recipes');
    expect(element).toBeTruthy();
});

