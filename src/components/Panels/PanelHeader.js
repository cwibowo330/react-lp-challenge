import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PanelHeader.css';

class PanelHeader extends Component {
  constructor(){
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(){
    this.props.onSelect('default');
  }
  render() {
    const { panelData } = this.props;
    return (
      <div className="PanelHeader">
        <div className="headline">
          <div className="back" onClick={(e) => this.clickHandler(e)}>
          <div className="arrow left"></div> Back</div>
          <div className="title">{panelData.title}</div>
        </div>
      </div>
    );
  }
}

PanelHeader.propTypes = {
  panelData: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default PanelHeader;
