import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { InfoCard } from './components/InfoCard';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <>
      <Header>
        <NavBar/>
      </Header>
      <InfoCard />
      <Portfolio />
    </>
  );
}

export default App;
