// code here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterList extends Component {
  static PropTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    items: [],
  }

  state = {
    filter: '',
  };

  onChangeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  }

  render() {
    const needle = this.state.filter.toLowerCase();
    const filteredItems = this.props.items.filter(item => (
      item.toLowerCase().indexOf(needle) !== -1
    ));
    return (
      <div>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.onChangeFilter}
        />
        <ul>
          {filteredItems.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FilterList;
