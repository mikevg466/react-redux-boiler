import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../components/Root';
import { initialUserState } from '../../reducers/user';

const mockState = {
  greeting: initialUserState.greeting,
  name: initialUserState.name,
};
const mockDispatchers = {
  setName: jest.fn(),
};
const mockProps = {
  ...mockState,
  ...mockDispatchers,
};

describe('Root Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Root {...mockProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
