import { combineReducers } from 'redux';

import { ADD_WATCH } from '../actions';

const addAwatch = (state, action) => {
  switch (action.type) {
    case ADD_WATCH:
        return action.data
      break;
    default:
      return state;
  }
}
export default addAwatch;
