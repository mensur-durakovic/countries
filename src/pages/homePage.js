import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountryCard from '../components/card';
import Spinner from '../components/spinner';
import Message from '../components/errorMessage';
import FilterRow from '../containers/filterRow';
import * as actions from '../store/actions/index';

export default function Home(props) {
	const dispatch = useDispatch();
	const countries = useSelector(state => state.filteredCountries);
	const errorFetchCountries = useSelector(state => state.errorFetchCountries);
	const errorSearchCountry = useSelector(state => state.errorSearchCountry);
	const loading = useSelector(state => state.loading);
	const isError = errorFetchCountries || errorSearchCountry;
	const countryClickedHandler = alpha3Code => {
		props.history.push(`/country/${alpha3Code}`);
	};

	useEffect(() => {
		dispatch(actions.fetchCountries());
	}, [dispatch]);

	return (
		<>
			<FilterRow />
			{loading && <Spinner />}
			{isError && <Message messageText='Ooops, an error occurred :/' />}
			{countries.length === 0 && <Message messageText='No countries found... :/' />}
			{!loading && !isError && countries.length > 0 && (
				<>
					<div className='countries-wrapper'>
						{countries.map(c => (
							<CountryCard key={c.name + c.alpha3Code} country={c} clickHandler={() => countryClickedHandler(c.alpha3Code)} />
						))}
					</div>
				</>
			)}
		</>
	);
}
