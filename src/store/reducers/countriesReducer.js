import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/reduxUtils';
import { REGIONS } from '../../constants/regions';
const initialState = {
	countries: [],
	filteredCountries: [],
	region: REGIONS[0],
	searchTerm: '',
	countryDetails: null,
	loading: false,
	errorFetchCountries: false,
	errorSearchCountry: false
};

const setLoadingCountries = (state, action) => {
	return updateObject(state, { loading: true });
};

/** FETCH COUNTRIES START */
const fetchCountriesFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		errorFetchCountries: true
	});
};

const fetchCountriesSuccess = (state, action) => {
	return updateObject(state, {
		countries: action.countries,
		filteredCountries: action.countries,
		loading: false,
		errorFetchCountries: false
	});
};
/** FETCH COUNTRIES END */

/** FETCH COUNTRY START */
const fetchCountry = (state, action) => {
	const country = state.countries.find(c => c.alpha3Code === action.alpha3Code);
	return updateObject(state, {
		countryDetails: country,
		loading: false
	});
};
/** FETCH COUNTRY END */

/** FILTER REGION START */
const filterRegion = (state, action) => {
	let filterRegion = action.region;
	let regionCountries;

	if (filterRegion === REGIONS[0]) {
		if (state.searchTerm) {
			regionCountries = state.countries.filter(c => c.name.toLowerCase().includes(state.searchTerm));
			return updateObject(state, {
				filteredCountries: regionCountries,
				region: filterRegion,
				loading: false
			});
		}
		return updateObject(state, {
			filteredCountries: [...state.countries],
			region: filterRegion,
			loading: false
		});
	}
	if (filterRegion === REGIONS[2]) {
		//change America to Americas because of API data
		filterRegion = 'americas';
	}

	if (state.searchTerm) {
		regionCountries = state.countries.filter(
			c => c.region.toLowerCase() === filterRegion.toLowerCase() && c.name.toLowerCase().includes(state.searchTerm)
		);
	} else {
		regionCountries = state.countries.filter(c => c.region.toLowerCase() === filterRegion.toLowerCase());
	}
	return updateObject(state, {
		filteredCountries: regionCountries,
		region: action.region,
		loading: false
	});
};
/** FILTER REGION END */

/** SEARCH COUNTRIES START */
const setSearchTerm = (state, action) => {
	return updateObject(state, {
		searchTerm: action.searchTerm,
		errorFetchCountries: false,
		errorSearchCountry: false
	});
};
const searchCountryFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		errorSearchCountry: true
	});
};

const searchCountrySuccess = (state, action) => {
	const searchTerm = action.countries.searchTerm.toLowerCase();
	let searchCountriesResult = [];
	let regionName = state.region;
	if (regionName === REGIONS[2]) {
		regionName = 'americas';
	}

	if (!searchTerm) {
		if (regionName === REGIONS[0]) {
			searchCountriesResult = [...state.countries];
		} else {
			if (action.countries.responseData.length === 0) {
				searchCountriesResult = [];
			} else {
				searchCountriesResult = action.countries.responseData.filter(c => c.region.toLowerCase() === regionName.toLowerCase());
			}
		}
	} else {
		if (regionName === REGIONS[0]) {
			searchCountriesResult = state.countries.filter(c => c.name.toLowerCase().includes(searchTerm));
		} else {
			if (action.countries.responseData.length === 0) {
				searchCountriesResult = [];
			} else {
				searchCountriesResult = action.countries.responseData.filter(
					c => c.name.toLowerCase().includes(searchTerm) && c.region.toLowerCase() === regionName.toLowerCase()
				);
			}
		}
	}

	return updateObject(state, {
		filteredCountries: searchCountriesResult,
		loading: false,
		errorSearchCountry: false
	});
};
/** SEARCH COUNTRIES END */

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_COUNTRIES_FAIL:
			return fetchCountriesFail(state, action);
		case actionTypes.FETCH_COUNTRIES_SUCCESS:
			return fetchCountriesSuccess(state, action);
		case actionTypes.FETCH_COUNTRY:
			return fetchCountry(state, action);
		case actionTypes.FILTER_REGION:
			return filterRegion(state, action);
		case actionTypes.LOADING_COUNTRIES:
			return setLoadingCountries(state, action);
		case actionTypes.SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		case actionTypes.SEARCH_COUNTRY_FAIL:
			return searchCountryFail(state, action);
		case actionTypes.SEARCH_COUNTRY_SUCCESS:
			return searchCountrySuccess(state, action);
		default:
			return state;
	}
};

export default reducer;
