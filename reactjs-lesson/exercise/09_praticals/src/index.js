import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './components/ImageSlider';

import streamers from './data/streamers.json';

ReactDOM.render(
  <ImageSlider imgs={streamers} />,
  document.getElementById('root'),
);
