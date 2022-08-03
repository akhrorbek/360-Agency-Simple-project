import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Sections/Hero';
import "./main.scss";
function App() {

  return (
    <>
      <header>
        <Header/>
        <Hero />
      </header>
      <main>
      </main>
      <footer>
      </footer>
    </>
  );
};

export default App;
