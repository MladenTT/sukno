import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Slideshow from './components/slideshow/Slideshow';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-div">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
