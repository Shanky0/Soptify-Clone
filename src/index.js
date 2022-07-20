import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Top from './Components/Top';
import Premium from './Components/premium';
import Culture from './Components/culture';
import Plan from './Components/plan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Top />
    <Premium />
    <Culture />
    <Plan />
  </React.StrictMode>
);


reportWebVitals();
