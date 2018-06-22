import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatBubble extends Component {
  render() {
    return (
      <div className="ChatBubble">
          <div className={this.props.class}>
            <p>{this.props.message}</p>
          </div>
          <div className="clear"></div>
      </div>
    );
  }
}

ChatBubble.propTypes = {
  class: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}


export default ChatBubble;
