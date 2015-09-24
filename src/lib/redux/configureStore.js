import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(require('../../ducks'));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../../ducks', () => {
      const nextRootReducer = require('../../ducks');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
