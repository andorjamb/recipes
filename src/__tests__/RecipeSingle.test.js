import RecipeSingle from '../pages/RecipeSingle';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
})

test('if recipe directions render',()=>{
    render(<RecipeSingle />)
})

describe("Check component render", () => {
    it("should render the component", () => {
        render(<RecipeSingle />);
        const element = screen.getByText(/recipe/i);
        expect(element).toBeInTheDocument();
    });
});