import react from 'react';
import ReactDOM from 'react-dom';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  return (
    <div className= 'App'>
      <Info/>
      <About/>
      <Footer/>
    </div>
  );
}