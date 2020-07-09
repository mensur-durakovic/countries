import React from 'react';
import PropTypes from 'prop-types';

function DescriptionRow(props) {
	const { title, text } = props;
	return (
		<div className='country-infos-description-row'>
			<span className='country-infos-description-title'>{title}: </span>
			<span className='country-infos-description-text'>{text}</span>
		</div>
	);
}

DescriptionRow.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default DescriptionRow;
