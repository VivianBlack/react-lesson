import React, { Component } from 'react';
import './Game.css';


const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const initState = {
  grids: [
    0, 0, 0, 
    0, 0, 0, 
    0, 0, 0, 
  ],
  player: 1,
  winner: 0,
};

class Game extends Component {
  constructor(props){
    super(props);
    this.state = initState;
  }

  setGrid = (idx) => {
    if(this.state.grids[idx] !== 0) return;
    if(this.state.winner !== 0) return;

    const grids = this.state.grids.map((num, i)=>(
      i === idx ? this.state.player : num
    ));

    // const grids = this.state.grids.slice();
    // grids[idx] = this.state.player;

    const player = -this.state.player;
    const winner = this.checkWinner(grids);

    this.setState({
      grids,
      player,
      winner,
    });
  }

  checkWinner = (grids) => {
    // for(let i = 0 ; i < lines.length; i++){
    //   const line = lines[i];
    //   const sum = grids[line[0]] + grids[line[1]] + grids[line[2]];
    //   if(sum === 3) return 1;
    //   if(sum === -3) return -1;
    // }
    // return 0;

    return lines.reduce((acc, [a, b, c])=>{
      if(acc !== 0) return acc;
      const sum = grids[a] + grids[b] + grids[c];
      if(sum === 3) return 1;
      if(sum === -3) return -1;
      return 0;
    }, 0);
  }

  toSymbol = (num) =>{
    switch(num){
      case 1: return 'O';
      case -1: return 'X';
      default: return '';
    }
  }

  reset = () => {
    this.setState(initState);
  }

  render() {
    return (
      <div className="game">
        <div className='board'>
          {this.state.grids.map((num, idx) => (
            <div className="grid" onClick={() => this.setGrid(idx)}>
              {this.toSymbol(num)}
            </div>
          ))}
        </div>
        <div className="info">
          <h1>Player: {this.toSymbol(this.state.player)}</h1>
          <h1>Winner: {this.toSymbol(this.state.winner)}</h1>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Game;
