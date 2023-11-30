import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import produceReducer from './produce';

const rootReducer = combineReducers({
  produce: produceReducer,//responsible for handling the produce information in the store aka the produce slice of state
});


let enhancer;

if (import.meta.env.MODE !== "production") {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
      : compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;
