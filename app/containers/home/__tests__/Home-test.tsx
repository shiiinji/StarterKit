import React from 'react';
import {mount} from 'enzyme';
import Home from '../Home';
import configureStore from 'redux-mock-store';

const middlewares: any = [];
const mockStore = configureStore(middlewares);

describe('Home', () => {
  test('should render welcome', () => {
    const initialState = {message: {message: 'welcome'}};
    const store = mockStore(initialState);
    const props = {store};
    const wrapper = mount(<Home {...props} />);
    expect(wrapper.find('[data-test="welcome"]').text()).toBe('welcome');
  });
});
