// code here
import React, { Component } from 'react';

class ImagePreview extends Component {
  state = {
    img: '',
    // file: null,
  }

  onFileSelected = (e) => {
    // e.target = input
    const file = e.target.files.item(0);

    const reader = new FileReader(); // 讀取檔案
    reader.addEventListener('load', this.onImageLoaded);
    reader.readAsDataURL(file);

    // this.setState({
    //   file,
    // });
  }

  onImageLoaded = (e) => {
    this.setState({
      img: e.target.result,
    });
  }

  // submit = () => {
  //   const { file } = this.state;
  //   const form = new Form();
  // }

  render() {
    return (
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={this.onFileSelected}
        />
        <br />
        <img src={this.state.img} width="200" />

        {/* <button onClick={this.submit}>Submit</button> */}
      </div>
    );
  }
}

export default ImagePreview;
