import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { InfoCard } from './components/InfoCard';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

function App() {
  return (
    <main>
      <Header>
        <NavBar/>
      </Header>
      <InfoCard/>
      <Portfolio/>
      <Contact/>
    </main>
  );
}

export default App;
