import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

function Header(props) {
	const { dark, changeTheme, history } = props;
	const logoClickHandler = () => history.push('/');
	return (
		<header>
			<h1 onClick={logoClickHandler}>Where in the world</h1>
			<button onClick={changeTheme} className='theme-switcher'>
				<FontAwesomeIcon icon={dark ? faSun : faMoon} />
				{dark ? 'White Mode' : 'Dark Mode'}
			</button>
		</header>
	);
}

export default withRouter(Header);
