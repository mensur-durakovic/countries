import React, { useState } from 'react';
import SearchInput from '../components/searchInput';
import RegionDropdown from '../components/regionDropdown';
import * as actions from '../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';

function FilterRow() {
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
export default FilterRow;
