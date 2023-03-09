import renderer from 'react-test-renderer'
import App from '../App';

test('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapShot();
});