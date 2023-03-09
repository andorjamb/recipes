import Navbar from "../components/Navbar";
import { render, screen } from '@testing-library/react';

test('renders list items', () => {
    render(<Navbar />);
    const list = screen.getAllByRole('listitem');
    expect(list).not.toHaveLength(0)

})