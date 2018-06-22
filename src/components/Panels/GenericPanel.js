import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GenericPanel.css';
import PanelHeader from './PanelHeader';

class GenericPanel extends Component {
  render() {
    const { panelData, onSelect } = this.props;
    const { img, title, greeting } = panelData;
    return (
      <div className="panel GenericPanel">
        <PanelHeader onSelect={onSelect} panelData={panelData}/>
        <img src={img} alt={title} />
        <p>{greeting}</p>
      </div>
    );
  }
}

GenericPanel.propTypes = {
  panelData: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default GenericPanel;
