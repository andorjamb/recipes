import Home from '../pages/Home';
import { render, screen } from '@testing-library/react';

describe("on app home page load", () => {
    it("should render the video", async () => {
        await const element = screen.getByTestId('video');
        expect(element).toBeInTheDocument();
    });
});