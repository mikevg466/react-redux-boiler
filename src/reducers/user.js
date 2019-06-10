import update from 'immutability-helper';
import types from '../actions/types';

export const initialUserState = {
  name: 'world',
  greeting: 'hello',
};

/**
 * The main user reducer function to be exported
 * @param  {Object} [state=initialUserState]
 *    The current user store to be manipulated.
 *    If null, then the default initial state.
 * @param  {Object} action
 *    The reducer action, containing the action type and data to be processed.
 * @return {Object} The updated user state.
 */
export default function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case types.SET_NAME:
      return update(state, {
        name: { $set: action.name },
      });
    case types.SET_GREETING:
      return update(state, {
        greeting: { $set: action.greeting },
      });
    default:
      return state;
  }
}
