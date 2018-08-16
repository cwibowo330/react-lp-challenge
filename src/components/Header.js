import React, { Component } from 'react';
import './Header.css';
import logo from '../assets/imgs/JoanyLogo.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="header">
          <img src="" className="logo" alt="logo" />
          <div className="info">
            <span className="number">323-284-7705</span>
            <span className="logout">Log Out</span>
          </div>
          <hr />
        </header>
      </div>
    );
  }
}

export default Header;
