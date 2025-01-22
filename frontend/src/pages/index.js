import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChatApp from './pages/ChatApp';

ReactDOM.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>,
  document.getElementById('root')
);
