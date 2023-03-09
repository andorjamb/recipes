import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';

afterEach(() => {
    cleanup();
})

test('matches snapshot', () => {
    const recipesTree = renderer.create(<App />).toJSON();
    expect(recipesTree).toMatchSnapshot();
})
