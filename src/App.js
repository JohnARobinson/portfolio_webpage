import React from 'react'
import { Article, CTA, Brand, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header} from './containers';
import './App.css'

const App = () => {
  return (
    <div classname = "App">
        <div classname ="gradient_bg">
            <Navbar/>
            <Header/>
        </div>

        <Brand/>
        <Features/>
        <CTA/>
        <Blog/>
        <Footer/>


    </div>
  )
}

export default App
