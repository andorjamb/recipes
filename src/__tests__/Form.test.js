import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Form from '../components/Form';
import { render, screen } from '@testing-library/react';

let countries = [{ name: "Uruguay" }, { name: "Portugal" }]

it('should check that the form element has rendered', () => {
    render(<BrowserRouter><Form countries={countries} /></BrowserRouter>)
    expect(
        screen.getByRole("input", { name: "author" })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("button", { name: /more/i })
    ).toBeInTheDocument();
})