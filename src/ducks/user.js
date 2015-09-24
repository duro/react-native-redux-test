import Immutable from 'immutable';
import Api from '../lib/Api';

/**
 * Private: Initial State
 */

const initialState = new Immutable.fromJS({
  username: '',
  bio: {},
  bioLoaded: false
});

/**
 * Public: Action Types
 */

export const actionTypes = {
  UPDATE_USERNAME: 'UPDATE_USERNAME',
  UPDATE_BIO: 'UPDATE_BIO'
}

/**
 * Public: Action Creators
 */

export function updateUsername(username) {
  return {
    type: actionTypes.UPDATE_USERNAME,
    username
  }
}

export function getBio() {
  return (dispatch, getState) => {
    const user = getState().user;
    return Api.getBio(user.get('username'))
      .then(data => dispatch({
        type: actionTypes.UPDATE_BIO,
        data
      }))
      .catch(err => {
        console.log('Error fetching bio for:', user.get('username'), err);
        throw err;
      })
  }
}

/**
 * Public: Reducer
 */

export default function reducer(state = initialState, action = {}) {

  switch (action.type) {

    case actionTypes.UPDATE_USERNAME:
      console.log('Username Updated:', action.username);
      return state.set('username', action.username);

    case actionTypes.UPDATE_BIO:
      console.log('Bio Updated:', action.data);
      return state.merge({
        bio: action.data,
        bioLoaded: true
      });

    default:
      return state;
  }

}
