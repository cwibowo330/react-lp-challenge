import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DefaultPanel.css';

class DefaultPanel extends Component {
  render() {
    const { title, message } = this.props.panelData;
    return (
      <div className="panel DefaultPanel">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    );
  }
}

DefaultPanel.propTypes = {
  panelData: PropTypes.object.isRequired
}

export default DefaultPanel;
