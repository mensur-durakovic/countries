import * as api from '../../api/api';
import * as actions from '../actions/index';
import { put, call } from 'redux-saga/effects';
export function* fetchCountriesSaga(action) {
	try {
		yield put(actions.loadingCountries());
		const response = yield call(api.fetchCountries);
		yield put(actions.fetchCountriesSuccess(response.data));
	} catch (error) {
		yield put(actions.fetchCountriesFail());
	}
}

export function* searchCountrySaga(action) {
	try {
		yield put(actions.loadingCountries());
		let response;
		if (action.searchTerm) {
			response = yield call(api.searchCountry, action.searchTerm);
		} else {
			response = yield call(api.fetchCountries);
		}
		yield put(
			actions.searchCountrySuccess({
				searchTerm: action.searchTerm,
				responseData: response.data
			})
		);
	} catch (error) {
		yield put(actions.searchCountryFail());
	}
}
