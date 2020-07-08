import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { REGIONS } from '../constants/regions';

export default function RegionDropdown(props) {
	const { region, regionChanged, dropdownOpen, dropdownToggleHandler } = props;

	return (
		<div className='country-regions-wrapper'>
			<div className='country-regions-picker' onClick={dropdownToggleHandler}>
				<span>{region ? region : REGIONS[0]}</span>
				<FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} />
			</div>
			<ul
				className={`country-regions-options disable-text-select ${
					dropdownOpen ? 'country-regions-options-active' : 'country-regions-options-inactive'
				}`}
			>
				{REGIONS.map(r => (
					<li className='country-regions-option' onClick={() => regionChanged(r)} key={r}>
						{r}
					</li>
				))}
			</ul>
		</div>
	);
}
