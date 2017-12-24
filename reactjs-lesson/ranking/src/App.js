import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const API = 'https://ranking-scars377.c9users.io/';

class Ranking extends Component {
  state = {
    filter: '',
    item: [],
  }

  componentDidMount() {
    axios.get(API)
      .then((rs) => {
        this.setState({
          item: rs.data,
        });
      });
  }

  onChangeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });

    this.search(e.target.value);
  }

  // 只有在輸入結束後的 "1000"秒 才尋找
  // debounce
  search = (q) => {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      axios.get(`${API}?q=${q}`)
        .then((rs) => {
          this.setState({
            item: rs.data,
          });
        });
    }, 1000);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.onChangeFilter}
        />


        {this.state.item.map(item => (
          <div>
            <img src={item.picture} width="60"/>
            <span>{item.openID}</span>
            <span>{item.score}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Ranking;
