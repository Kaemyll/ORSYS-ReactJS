import React from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import Clock from './components/Main/Clock';
import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Counter from './components/Main/counter/Counter';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Header />
      <Button onClick={() => setShow((show) => !show)}>
        {show ? 'Masquer' : 'Afficher'}</Button>
      {show && <Clock />}
      <Main />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
