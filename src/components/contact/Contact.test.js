import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

describe('#Contact', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact info={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
