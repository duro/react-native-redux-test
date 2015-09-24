import Immutable from 'immutable';
import {getBio} from './user';

// This is needed to fix an odd babel issue
const getUserBio = getBio;

/**
 * Private: Initial State
 */

const initialState = new Immutable.fromJS({
  searchComplete: false,
  isSearching: false,
  error: false,
  errorMsg: ''
});

/**
 * Public: Action Types
 */

export const actionTypes = {
  SEARCH_START: 'SEARCH_START',
  SEARCH_COMPLETE: 'SEARCH_COMPLETE',
  SEARCH_FAILED: 'SEARCH_FAILED',
}

/**
 * Public: Action Creators
 */

export function doSearch() {
  return (dispatch, getState) => {
    const username = getState().user.get('username');
    dispatch({
      type: actionTypes.SEARCH_START,
      username
    });
    return dispatch(getUserBio())
      .then(() => dispatch({
        type: actionTypes.SEARCH_COMPLETE,
        username
      }))
      .catch(err => dispatch({
        type: actionTypes.SEARCH_FAILED,
        username,
        err
      }))
  }
}

/**
 * Public: Reducer
 */

export default function reducer(state = initialState, action = {}) {

  switch (action.type) {

    case actionTypes.SEARCH_START:
      console.log('Starting Searching For:', action.username);
      return state.merge({
        isSearching: true,
        searchComplete: false
      });

    case actionTypes.SEARCH_COMPLETE:
      console.log('Search Complete For:', action.username);
      return state.merge({
        isSearching: false,
        searchComplete: true
      });

    case actionTypes.SEARCH_FAILED:
      console.log('Search Failed For:', action.username);
      return state.merge({
        isSearching: false,
        searchComplete: false,
        error: true,
        errMsg: action.err.message
      });

    default:
      return state;
  }

}
