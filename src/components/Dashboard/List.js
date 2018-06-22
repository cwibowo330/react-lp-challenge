import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  constructor() {
      super();
      this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler(selected) {
    this.props.onSelect(selected);
  }

  render() {
    const { id, img, title, desc } = this.props.data;
    return (
      <li onClick={(e) => this.clickHandler(id)}>
          <img src={img} alt={title} />
          <div className="desc">
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          <div className="arrow right"></div>
      </li>
    );
  }
}

List.propTypes = {
  data: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default List;
