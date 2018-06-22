import React, { Component } from 'react';
import NavList from './NavList';
import DefaultPanel from '../Panels/DefaultPanel';
import DoctorPanel from '../Panels/DoctorPanel';
import GenericPanel from '../Panels/GenericPanel';
import './Dashboard.css';
import { appData } from '../../assets/appData';

class Dashboard extends Component {
  constructor(){
      super();
      this.state = {
          selected: 'default'
      }
      this.handleSelect = this.handleSelect.bind(this);
      this.renderPanel = this.renderPanel.bind(this);
  }

  handleSelect(selected) {
    this.setState({
        selected: selected
    });
  }
  renderPanel(selected) {
    const { options } = appData;
    switch(selected) {
      case 'doctor':
        return <DoctorPanel panelData={options[selected]} onSelect={this.handleSelect} />;
      case 'default':
        return <DefaultPanel panelData={appData.default} />
      default:
        return <GenericPanel panelData={options[selected]} onSelect={this.handleSelect} />;
    }
  }
  render() {
    const { selected } = this.state;
    return (
      <div className="Dashboard">
        <NavList onSelect={this.handleSelect}/>
        {this.renderPanel(selected)}
      </div>
    );
  }
}

export default Dashboard;
