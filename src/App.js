import React from 'react'
import { Article, CTA, Brand, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header} from './containers';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div classname = "App">
      <div class = "gradient__bg">
        <Navbar/> 
      </div>

    </div>
  )
}

export default App
