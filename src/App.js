import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Header } from './components/Header';
import { InfoCard } from './components/InfoCard';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Header>
      </Header>
      <main>
        <InfoCard/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
