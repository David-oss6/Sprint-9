import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './aplication/DataContext';

import App from './App';


ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);


