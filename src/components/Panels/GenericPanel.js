import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GenericPanel.css';
import PanelHeader from './PanelHeader';

class GenericPanel extends Component {
  render() {
    const { panelData, onSelect } = this.props;
    return (
      <div className="panel GenericPanel">
        <PanelHeader onSelect={onSelect} panelData={panelData}/>
        <img src={panelData.img} alt={panelData.title} />
        <p>{panelData.greeting}</p>
      </div>
    );
  }
}

GenericPanel.propTypes = {
  panelData: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default GenericPanel;
