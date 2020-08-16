import React from 'react';
import '../../App.css';
import { Header } from '../Header';

function PrivacyPolicy() {
  return (
    <>
        <Header link="BACK TO PORTFOLIO" linkPath="/portfolio"/>
        <p style={{textAlign: "center"}}>
            This website does not collect any data in addition what your web browser collects (e.g. cookies)
        </p>
        <p style={{textAlign: "center"}}>
            I hope you sleep better knowing that I don't harvest your personal data
        </p>
    </>
  );
}

export default PrivacyPolicy;
