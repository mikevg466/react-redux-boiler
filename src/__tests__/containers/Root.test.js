import React from 'react';
import { shallow } from 'enzyme';
import { RootContainer, mapStateToProps } from '../../containers/Root';
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

describe('Root Container', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RootContainer {...mockProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('outputs the expected state when passed a mock store', () => {
      const mockStore = {
        user: initialUserState,
      };
      const expectedState = {
        greeting: initialUserState.greeting,
        name: initialUserState.name,
      };
      expect(mapStateToProps(mockStore)).toEqual(expectedState);
    });
  });
});
