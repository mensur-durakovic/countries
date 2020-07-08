import React from 'react';
import ReactDOM from 'react-dom';

//import stylesheets
import './styles/main.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import countriesReducer from './store/reducers/countriesReducer';
import { watchCountries } from './store/sagas';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(countriesReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchCountries);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
