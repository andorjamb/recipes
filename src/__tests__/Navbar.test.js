import Navbar from "../components/Navbar";
import { render, screen, fireEvent } from '@testing-library/react';

/* const hover = createEvent.hover({ button: 2 }) */
test('renders list items', () => {
    render(<Navbar />);
    const navLink = screen.getByText(/home/i);
    let style = window.getComputedStyle(navLink);
    fireEvent.hover(navLink);
    expect(style.color).toBe('black');
})
