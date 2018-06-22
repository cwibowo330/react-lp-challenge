import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DoctorPanel.css';
import ChatInterface from './ChatInterface';
import PanelHeader from './PanelHeader';

class DoctorPanel extends Component {
  render() {
    const { panelData, onSelect } = this.props;
    return (
      <div className="DoctorPanel panel">
         <PanelHeader onSelect={onSelect} panelData={panelData}/>
         <ChatInterface />
      </div>
    );
  }
}

DoctorPanel.propTypes = {
  panelData: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default DoctorPanel;
