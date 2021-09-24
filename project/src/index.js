import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Temp from './Temp';
import Form from './Form'
import Form2 from './Form2'
import Lifecycle from './Lifecycle';
import Mains from './Mains';
import Lists from './Lists';
import MainKeys from'./MainKeys';


ReactDOM.render(
  <React.StrictMode>
 
  <MainKeys/>
  <Lists/>
  <Mains/>
  
  <Lifecycle/>
  <Form/>
  <Form2/>
  <Temp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
