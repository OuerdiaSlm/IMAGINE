import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import Menu from './pages/menu';
import NotFound from './pages/notFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/gallery" element={<Gallery/>}/>
      <Route exact path="/menu" element={<Menu/>}/>
      <Route element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
