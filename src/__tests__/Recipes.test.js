import Recipes from '../pages/Recipes';
import { render, screen } from '@testing-library/react';

const recipeData =
    [
        {
            "name": "Fried Fish",
            "author": "Anna",
            "country": "Aruba",
            "description": "A fishy dish",
            "image": "https://www.recipetineats.com/wp-content/uploads/2017/06/Crispy-Pan-Fried-Fish-1.jpg",
            "ingredients": [
                {
                    "name": "salt",
                    "quantity": "0.5",
                    "unit": "tsp"
                },
                {
                    "name": "pepper",
                    "quantity": "1",
                    "unit": "pinch"
                },
                {
                    "name": "fish",
                    "quantity": "1",
                    "unit": "fillet"
                }
            ],
            "preparation_time": 5,
            "cooking_time": 10,
            "servings": 1,
            "instructions": [
                "warm the pan",
                "season the fish",
                "fry in a pan until done"
            ],
            "id": 24
        }
    ]

test('renders list items', () => {
    render(<Recipes recipeData={recipeData} />);
    const list = screen.getAllByRole('listitem');
    expect(list).not.toHaveLength(0)

})