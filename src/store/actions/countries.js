import * as actionTypes from './actionTypes';

export const loadingCountries = () => {
	return {
		type: actionTypes.LOADING_COUNTRIES
	};
};

/** FETCH COUNTRIES START */
export const fetchCountries = () => {
	return {
		type: actionTypes.FETCH_COUNTRIES
	};
};

export const fetchCountriesFail = () => {
	return {
		type: actionTypes.FETCH_COUNTRIES_FAIL
	};
};

export const fetchCountriesSuccess = countries => {
	return {
		type: actionTypes.FETCH_COUNTRIES_SUCCESS,
		countries
	};
};
/** FETCH COUNTRIES END */

/** SEARCH COUNTRIES START */
export const setSearchTerm = searchTerm => {
	return {
		type: actionTypes.SET_SEARCH_TERM,
		searchTerm
	};
};
export const searchCountry = searchTerm => {
	return {
		type: actionTypes.SEARCH_COUNTRY,
		searchTerm
	};
};

export const searchCountryFail = () => {
	return {
		type: actionTypes.SEARCH_COUNTRY_FAIL
	};
};

export const searchCountrySuccess = countries => {
	return {
		type: actionTypes.SEARCH_COUNTRY_SUCCESS,
		countries
	};
};
/** SEARCH COUNTRIES END */

/** FETCH COUNTRY START */
export const fetchCountry = alpha3Code => {
	return {
		type: actionTypes.FETCH_COUNTRY,
		alpha3Code
	};
};
/** FETCH COUNTRY END */

/** FILTER REGION START */
export const filterRegion = region => {
	return {
		type: actionTypes.FILTER_REGION,
		region
	};
};
/** FILTER REGION END */
