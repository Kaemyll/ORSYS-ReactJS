import React from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import Clock from './components/Main/Clock';
import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Counter from './components/Main/counter/Counter';
import SignUp from './components/Main/signup/SignUp';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Header />
      <SignUp />
      <Button onClick={() => setShow((show) => !show)}>
        {show ? 'Masquer' : 'Afficher'}</Button>
      {show && <Clock />}
      <Main />
      <Button onClick={() => setShow((show) => !show)}>
        {show ? 'Masquer' : 'Afficher'}</Button>
      {show && <Counter />}
      <Footer />
    </div>
  );
}

export default App;
