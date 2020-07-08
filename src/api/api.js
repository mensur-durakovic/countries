import axios from 'axios';

export const fetchCountries = async () => {
	return await axios.get('https://restcountries.eu/rest/v2/all');
};

/* export const fetchCountry = async alpha3Code => {
	return await axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`);
}; */

export const searchCountry = async searchTerm => {
	return await axios.get(`https://restcountries.eu/rest/v2/name/${searchTerm}`);
};
