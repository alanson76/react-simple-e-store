import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlwares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middlwares));

//to use the redux devTools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlwares)
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

export default store;
