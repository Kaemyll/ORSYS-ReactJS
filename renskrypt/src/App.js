import React from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import Clock from './components/Main/Clock';
import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Header />
      <Button onClick={() => setShow((show) => !show)}>
        {show ? 'Masquer' : 'Afficher'}</Button>
      {show && <Clock />}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
