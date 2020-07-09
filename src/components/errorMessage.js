import React from 'react';
import PropTypes from 'prop-types';
function Message(props) {
	return <div className='error-message'> {props.messageText} </div>;
}

Message.propTypes = {
	messageText: PropTypes.string.isRequired
};

export default Message;
