import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  )
}

// Running in DEV
if (process.env.NODE_ENV === 'development'){
  const devRoot = document.querySelector('#_marketing-dev-root')
  
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through the Container
export { mount };