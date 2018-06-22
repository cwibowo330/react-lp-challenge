import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import './NavList.css';
import { appData } from '../../assets/appData';

class NavList extends Component {
  render() {
    const { welcome, options } = appData;
    const { onSelect } = this.props;
    const lists = Object.keys(options).map(key => {
        return <List key={options[key].id} data={options[key]} onSelect={onSelect} />
    })
    return (
      <div className="NavList">
        <h1>{welcome}</h1>
        <ul>
            {lists}
        </ul>
      </div>
    );
  }
}

NavList.propTypes = {
  onSelect: PropTypes.func
}

export default NavList;
