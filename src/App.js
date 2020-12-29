import React from 'react';
import './css/variables.css';
import './css/main.css';
import Router from './Router';
import Header from './components/Header';


function App() {
  return (
    <main className="App">
      <Header />
      <Router />
    </main>
  );
}

export default App;
