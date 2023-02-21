import React from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App bg-warning">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
