// code here
import React, { Component } from 'react';
import './ImageSlider.css';

class ImageSlider extends Component {
  state={
    currentIdx: 0,
  }

  prev = () => {
    if (this.state.currentIdx === 0) return;
    this.setState({
      currentIdx: this.state.currentIdx - 1,
    });
  }

  next = () => {
    if (this.state.currentIdx === this.props.imgs.length - 1) return;
    this.setState({
      currentIdx: this.state.currentIdx + 1,
    });
  }

  render() {
    const { currentIdx } = this.state;

    return (
      <div className="slider">
        <div
          className={`slider-btn slider-prev ${currentIdx === 0 ? 'hide' : ' '}`}
          onClick={this.prev}
        />
        <div className="slider-container">
          {/* <img className="slider-img" src={this.props.imgs[currentIdx]} /> */}
          {this.props.imgs.map((src, idx) => {
            let className = 'slider-img';
            if (currentIdx > idx) {
              className += ' left';
            }
            if (currentIdx < idx) {
              className += ' right';
            }
            return <img className={className} src={src} key={src} />;
          })}
        </div>

        <div
          className={`slider-btn slider-next ${currentIdx === this.props.imgs.length - 1 ? 'hide' : ' '}`}
          onClick={this.next}
        />

      </div>
    );
  }
}

export default ImageSlider;
