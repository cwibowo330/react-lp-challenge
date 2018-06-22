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
    const { data } = this.props;
    return (
      <li onClick={(e) => this.clickHandler(data.id)}>
          <img src={data.img} alt={data.title} />
          <div className="desc">
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
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
