import React from 'react';
import '../../App.css';
import NavBar from '../NavBar';
import { Header } from '../Header';
import { InfoCard } from '../InfoCard';
import { ProjectContainer } from '../ProjectContainer';
import { Contact } from '../Contact';
import { Footer } from '../Footer';

function Portfolio() {
  return (
    <>
        <NavBar/>
        <Header link="SEE PRIVACY POLICY" linkPath="/privacy"/>
        <main>
            <InfoCard/>
            <ProjectContainer/>
            <Contact/>
        </main>
        <Footer/>
    </>
  );
}

export default Portfolio;
