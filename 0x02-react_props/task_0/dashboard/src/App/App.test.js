import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders App component without crashing', () => {
    shallow(<App />);
});
