import React from 'react';
import Navbar from "../components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test('navlink changes color on hover', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    const navLinks = screen.getAllByRole('link');
    navLinks.forEach((link) => {
        fireEvent.mouseEnter(link);
        expect(link).not.toHaveStyle('color: gray');
    }
    )
})

