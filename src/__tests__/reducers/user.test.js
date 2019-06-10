import userReducer, { userInitialState } from '../../reducers/user';
import types from '../../actions/types';

const getExpectedState = newState =>
  Object.assign({}, userInitialState, newState);

describe('User Reducer', () => {
  it('SET_NAME processes correctly', () => {
    const name = 'testName';
    const result = userReducer(userInitialState, {
      type: types.SET_NAME,
      name,
    });

    expect(result).toEqual(getExpectedState({ name }));
  });

  it('SET_GREETING processes correctly', () => {
    const greeting = 'testGreeting';
    const result = userReducer(userInitialState, {
      type: types.SET_GREETING,
      greeting,
    });

    expect(result).toEqual(getExpectedState({ greeting }));
  });
});
