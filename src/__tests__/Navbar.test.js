import Navbar from "../components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

test('navlink changes color on hover', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    const navLinks = screen.getAllByRole('link');
    navLinks.forEach((link) => {
        fireEvent.mouseEnter(link);
        expect(navLinks).toHaveStyle('color: black');
    }
    )
})

