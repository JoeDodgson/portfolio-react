import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { InfoCard } from './components/InfoCard';

function App() {
  return (
    <>
      <Header>
        <NavBar/>
      </Header>
      <InfoCard />
    </>
  );
}

export default App;
