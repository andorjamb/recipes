import renderer from 'react-test-renderer'
import App from '../App';
/* import { render, screen } from '@testing-library/react'; */

test('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapShot();
});