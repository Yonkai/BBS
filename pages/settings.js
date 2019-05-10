//Modules
import React from 'react';
import Head from 'next/head';

export default () => (
  // React Fragment
  // Controlled through browser cookies/other client side storage.
  <>
    <Head>
      <title>BBS title</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
      </meta>
    </Head>
    <h3>Settings:</h3>
    <p>placeholder</p>
    <p>(Use cookies to store settings)</p>

    <style jsx global>{`
      html {
        height:100vh;
        box-sizing:border-box;
        margin:0;
        background: DimGrey;  /* fallback for old browsers */
        // background: #FFEFBA;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to bottom, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to bottom, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      
    `}</style>
  </>
)