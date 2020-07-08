import React, { useState } from 'react';
import Header from './components/header';
import HomePage from './pages/homePage';
import CountryDetailsPage from './pages/countryDetailsPage';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

function App() {
	const [dark, setDark] = useState(false);
	const changeTheme = () => setDark(!dark);

	return (
		<div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')}>
			<div className='base'>
				<Header changeTheme={changeTheme} dark={dark} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/home' component={HomePage} />
					<Route path='/country/:alpha3Code' component={CountryDetailsPage} />
					<Redirect to='/' />
				</Switch>
			</div>
		</div>
	);
}

export default withRouter(App);
