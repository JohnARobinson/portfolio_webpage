import React from 'react';
import ReactDOM from 'react-dom';
//import {Homepage, Aboutpage, Header } from './App'; //new
import {
    Navbar,
    Home,
    Projects,
    Contact,
    Skills,
    Frontend,
    Backend,
    Fullstack,
    Database,
    Datascience,
    Gamedev,
    Threedmodel,
    ML
  } from "./components";
  import {
    Footer
  } from "./containers";
import App from './App';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
ReactDOM.render(
<Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Projects" element={<Projects />}/>
      <Route path="/Frontend" element={<Frontend />}/>
      <Route path="/Backend" element={<Backend />}/>
      <Route path="/Fullstack" element={<Fullstack />}/>
      <Route path="/Database" element={<Database />}/>
      <Route path="/Datascience" element={<Datascience />}/>
      <Route path="/Gamedev" element={<Gamedev />}/>
      <Route path="/Threedmodel" element={<Threedmodel />}/>
      <Route path="/ML" element={<ML/>}/>
    </Routes>
    <Footer />
</Router>,
   document.getElementById('root')


);