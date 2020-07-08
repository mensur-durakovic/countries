import React, { useState } from 'react';
import SearchInput from '../components/searchInput';
import RegionDropdown from '../components/regionDropdown';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/index';

export default function FilterRow() {
	const dispatch = useDispatch();
	const region = useSelector(state => state.region);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

	const regionChangedHandler = newRegion => {
		dispatch(actions.filterRegion(newRegion));
		setDropdownOpen(false);
	};

	return (
		<div className='filter-row'>
			<SearchInput />
			<RegionDropdown
				regionChanged={regionChangedHandler}
				region={region}
				dropdownOpen={dropdownOpen}
				dropdownToggleHandler={toggleDropdown}
			/>
		</div>
	);
}
