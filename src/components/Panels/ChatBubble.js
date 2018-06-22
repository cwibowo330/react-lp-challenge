import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatBubble extends Component {
  render() {
    const { bubbleClass, message } = this.props
    return (
      <div className="ChatBubble">
          <div className={bubbleClass}>
            <p>{message}</p>
          </div>
          <div className="clear"></div>
      </div>
    );
  }
}

ChatBubble.propTypes = {
  bubbleClass: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}


export default ChatBubble;
