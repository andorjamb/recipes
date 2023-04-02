import React from 'React';
import renderer from 'react-test-renderer'
import App from '../App';




it('renders correctly, matches snapshot', () => {
    const tree = renderer
        .create(<App />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});



