import React, { Component } from 'react';

class App extends Component {
  state = {
    value: '',
    strength: '',
  }

  // onChange = (evt) => {
  //   const value = evt.target.value;
  //   this.setState({
  //     value, // value: value key 名稱與變數名稱相同short hand
  //     strength: this.calcStrength(value), // get user enter value
  //   });
  // }

  onChange = (evt) => {
    const value = evt.target.value;
    const strength = this.calcStrength(value);
    this.setState({
      value, // value: value key 名稱與變數名稱相同short hand
      strength, // get user enter value
    });
  }

  calcStrength = (value) => { // psw 強度
    let score = value.length;
    if (/[A-Z]/.test(value)) score *= 1.25;
    if (/[a-z]/.test(value)) score *= 1.25;
    if (/[0-9]/.test(value)) score *= 1.25;
    if (/[^A-Za-z0-9]/.test(value)) score *= 1.25;

    if (score > 40) return 'Perfect';
    else if (score > 20) return 'Great';
    else if (score > 10) return 'Good';
    return 'Weak';
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />
        <span>{this.state.strength}</span>
      </div>
    );
  }
}

export default App;
