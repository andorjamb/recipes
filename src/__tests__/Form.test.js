import Form from '../components/Form';
import { render, screen, userEvent } from '@testing-library/react';;

describe('test form validation', () => {
    it("should show error message when not all form fields are completed", async () => {
        render(<Form />);
        const buttonElement = screen.getByTestId("submit");
        await userEvent.click(buttonElement);
        const alertElement = screen.getByRole("alert");
        expect(alertElement).toBeInTheDocument();

    });
})
