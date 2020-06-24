import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
);

export default store;
