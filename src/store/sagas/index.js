import { takeEvery, all } from 'redux-saga/effects';
import { fetchCountriesSaga, searchCountrySaga } from './countries';
import * as actionTypes from '../actions/actionTypes';

export function* watchCountries() {
	yield all([takeEvery(actionTypes.FETCH_COUNTRIES, fetchCountriesSaga), takeEvery(actionTypes.SEARCH_COUNTRY, searchCountrySaga)]);
}
