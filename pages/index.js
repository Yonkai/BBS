//Modules
import React from 'react';
import Head from 'next/head';

//components
import Header from '../components/Header.js';
import Boards from '../components/Boards.js';
import Footer from '../components/Footer.js';
import Statistics from '../components/Statistics.js';
import About from '../components/About.js';

export default () => (
  // React Fragment
  <>
    <Head>
      <title>BBS title</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
      </meta>
    </Head>

    <Header/>
    <Boards/>
    <About/>
    <Statistics/>
    <Footer/>    
    <style jsx global>{`
      html {
        box-sizing:border-box;
        margin:0;
      }
    `}</style>
  </>
)