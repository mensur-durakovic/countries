import React from 'react';

export default function DescriptionRow(props) {
	return (
		<div className='country-infos-description-row'>
			<span className='country-infos-description-title'>{props.title}: </span>
			<span className='country-infos-description-text'>{props.text}</span>
		</div>
	);
}
