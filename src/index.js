import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Carousel from './component/Carousel'
import Closet from './component/Closet';
import RoadMap from './component/RoadMap';
import Header from './component/Header';
import Main from './component/Main';
import Card from './component/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <RoadMap />

    <Card />
    <Carousel />    
    <Closet />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
