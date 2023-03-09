import Navbar from "../components/Navbar";
import { render, screen } from '@testing-library/react';


test('renders nav links', async()=>{
    render(<Navbar />);
    const link = screen.getByText(/tasteit/i);
    expect(link).toBeInTheDocument();
})