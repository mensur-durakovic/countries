import axios from 'axios';

export const fetchCountries = async () => {
	return await axios.get('https://restcountries.eu/rest/v2/all');
};

export const searchCountry = async searchTerm => {
	return await axios.get(`https://restcountries.eu/rest/v2/name/${searchTerm}`);
};
