import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Form from '../components/Form';
import { render, screen, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { userEvent } from "@testing-library/user-event";


it('should check that the form element has rendered', () => {
    render(<BrowserRouter><Form countries={[{ name: "Uruguay" }, { name: "Portugal" }]} ingredientsState={[{
        name: '',
        quantity: 0,
        unit: ''
    }]} instructionsState={['']} /></BrowserRouter>);
    expect(
        screen.getByRole("button", { name: /more/i })
    ).toBeInTheDocument();
}
);

function setup(jsx) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    }
}

test('check button action', async () => {
    const { user } = setup(<Form />, async () => {
        render(<Form />)
        await user.type(screen.getByRole('input', { name: 'name' }), '');
        await user.click(screen.getByRole('button', { type: 'submit' }),
        )
        expect(getByRole('alert')).toHaveTextContent(/Some fields are missing data/i);
    })
})




