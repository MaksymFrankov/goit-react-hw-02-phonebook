import { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

export class Filter extends Component {
  handlerChange = e => {
    const filteredValue = e.currentTarget.value;
    this.props.changeFilter(filteredValue);
  };

  render() {
    return (
      <label className="FilterLabel" htmlFor="">
        Find contacts by name
        <input
          className="FilterInput"
          type="text"
          name="name"
          onChange={this.handlerChange}
        />
      </label>
    );
  }
}
Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
