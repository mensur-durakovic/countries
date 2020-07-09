import React from 'react';
import PropTypes from 'prop-types';
function CountryCard(props) {
	const { clickHandler } = props;
	const { name, population, region, capital, flag } = props.country;
	return (
		<div className='country-card' onClick={clickHandler}>
			<img src={flag} alt={`${name} flag`} />
			<div className='country-card-body'>
				<div className='country-card-name'>{name}</div>
				<div className='country-card-body-row'>
					<span className='country-card-body-row-title'> Population: </span>
					<span> {population.toLocaleString()} </span>
				</div>
				<div className='country-card-body-row'>
					<span className='country-card-body-row-title'> Region: </span>
					<span> {region} </span>
				</div>
				<div className='country-card-body-row'>
					<span className='country-card-body-row-title'> Capital: </span>
					<span> {capital} </span>
				</div>
			</div>
		</div>
	);
}

CountryCard.propTypes = {
	clickHandler: PropTypes.func.isRequired,
	country: PropTypes.shape({
		name: PropTypes.string.isRequired,
		population: PropTypes.number.isRequired,
		region: PropTypes.string.isRequired,
		capital: PropTypes.string.isRequired,
		flag: PropTypes.string.isRequired
	})
};

export default CountryCard;
