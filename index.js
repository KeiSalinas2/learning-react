import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app')

// ReactDOM.render(render element, where);
render(<Media /> , app);

