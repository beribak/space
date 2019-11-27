// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger'; 
import reduxPromise from 'redux-promise';
im
// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import coordinatesReducer from './reducers/coordinates_reducer';
import imageReducer from './reducers/image_reducer';
import articlesReducer from './reducers/articles_reducer';
import userLocationReducer from './reducers/user_location_reducer';
import passTimesReducer from './reducers/pass_times_reducer';

const initialState = {
	coordinates: {}

}
// State and reducers
const reducers = combineReducers({
  coordinates: coordinatesReducer,
  image: imageReducer,
  articles: articlesReducer,
  user_location: userLocationReducer,
  pass_times: passTimesReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
