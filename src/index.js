import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Top from './Components/Top';
import Premium from './Components/premium';
import Culture from './Components/culture';
import Plan from './Components/plan';
import Accordian from './Components/accordian';
import Footer from './Components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Top />
    <Premium />
    <Culture />
    <Plan />
    <Accordian/>
    <Footer/>
  </React.StrictMode>
);


reportWebVitals();
