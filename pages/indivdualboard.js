//Modules
import IndividualBoard from '../components/IndividualBoard.js';
import Head from 'next/head';
import React from 'react';

export default () => (
    // React Fragment
    <>
      <Head>
        <title>Individual Board Title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
      </meta>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
    <IndividualBoard/>

    <style jsx global>{`
      html {
        box-sizing:border-box;
        margin:0;
      }
    `}</style>
    </>
  )