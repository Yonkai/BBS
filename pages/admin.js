//Modules
import React from 'react';
import Head from 'next/head';

export default () => (
  <>
    <Head>
      <title>BBS title</title>
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" 
      integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" 
      crossorigin="anonymous"></link>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
      </meta>
    </Head>
    <h3>Admin</h3>
    <h4>Needs authroization, access controls, authenication. passportjs? https://auth0.com/?</h4>

    <style jsx global>{`
      html {
        height:100vh;
        box-sizing:border-box;
        margin:0;  
        background: DimGrey;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to bottom, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to bottom, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      body{
        background:#fff;
      }
      
    `}</style>
  </>
)