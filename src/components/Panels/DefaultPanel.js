import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DefaultPanel.css';

class DefaultPanel extends Component {
  render() {
    const { panelData } = this.props;
    return (
      <div className="panel DefaultPanel">
        <h1>{panelData.title}</h1>
        <p>{panelData.message}</p>
      </div>
    );
  }
}

DefaultPanel.propTypes = {
  panelData: PropTypes.object.isRequired,
  onSelect: PropTypes.func
}

export default DefaultPanel;
