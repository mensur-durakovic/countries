import React, { useEffect } from 'react';
import DescriptionRow from '../components/descriptionRow';
import Spinner from '../components/spinner';
import * as actions from '../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

function CountryDetails(props) {
	const dispatch = useDispatch();
	const countries = useSelector(state => state.countries);
	const countryDetails = useSelector(state => state.countryDetails);
	const loading = useSelector(state => state.loading);
	const { alpha3Code } = props.match.params;

	useEffect(() => {
		dispatch(actions.fetchCountry(alpha3Code));
	}, [dispatch, alpha3Code]);

	const getCountryCurrencies = () => countryDetails.currencies.map(currency => currency.name).join(', ');
	const getCountryLanguages = () => countryDetails.languages.map(language => language.name).join(', ');
	const getBorderCountries = () => countries.filter(country => countryDetails.borders.includes(country.alpha3Code));
	const borderCountryClickHandler = borderCountryAlpha3Code => props.history.push(`/country/${borderCountryAlpha3Code}`);
	const backButtonClickHandler = () => props.history.push('/');

	return (
		<>
			{loading && <Spinner />}
			{countryDetails && (
				<main className='country-details'>
					<div className='country-details-button-row'>
						<button className='country-details-button' onClick={backButtonClickHandler}>
							<FontAwesomeIcon icon={faLongArrowAltLeft} />
							<span>Back</span>
						</button>
					</div>
					<section className='country-infos'>
						<img src={countryDetails.flag} alt={`${countryDetails.name} flag`}></img>
						<div className='country-infos-right'>
							<h1 className='country-infos-right-name'>{countryDetails.name}</h1>
							<div className='country-infos-description'>
								<div className='country-infos-description-left'>
									<DescriptionRow title='Native Name' text={countryDetails.nativeName} />
									<DescriptionRow title='Population' text={countryDetails.population.toLocaleString()} />
									<DescriptionRow title='Region' text={countryDetails.region} />
									<DescriptionRow title='Sub Region' text={countryDetails.subregion} />
									<DescriptionRow title='Capital' text={countryDetails.capital} />
								</div>
								<div className='country-infos-description-right'>
									<DescriptionRow title='Top Level Domain' text={countryDetails.topLevelDomain[0]} />
									<DescriptionRow title='Currencies' text={getCountryCurrencies()} />
									<DescriptionRow title='Languages' text={getCountryLanguages()} />
								</div>
							</div>
							<div className='border-countries'>
								<span className='border-countries-title'>Border Countries:</span>
								<div className='border-countries-buttons'>
									{getBorderCountries().map(c => (
										<button key={c.alpha3Code} onClick={() => borderCountryClickHandler(c.alpha3Code)}>
											{c.name}
										</button>
									))}
								</div>
							</div>
						</div>
					</section>
				</main>
			)}
		</>
	);
}

export default CountryDetails;
