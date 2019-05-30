//Modules
import React from 'react';
import Head from 'next/head';

export default () => (
  // React Fragment
  <>
    <Head>
      <title>{'BBS News'}</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" 
      integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" 
      crossorigin="anonymous"></link>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
      </meta>
    </Head>
    <div className='news'>
      <h2>05-24-2019, 1:34PM</h2>
      <p>Wow.</p>
      <h2>05-24-2019, 1:34PM</h2>
      <p>I should be a writer.</p>
      <h2>05-24-2019, 1:34PM</h2>
      <p>Another news post because I have no life, wow.</p>
      <h2>05-24-2019, 1:34PM</h2>
      <p>First news post. Wow.</p>
    </div>
    <style jsx global>{`
      html {
        height:100vh;
        box-sizing:border-box;
        margin:0;
        min-height:100vh;
        background: #cce;  /* fallback for old browsers */
        // background: #FFEFBA;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to bottom, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to bottom, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      body{
        background:#cce;  /* fallback for old browsers */
      }
      h2{
        margin-left:10px;
      }
      .news{
        background: #eef;
        border:5px solid #99f;
        border-radius:5px;
      }

      p{
        margin-left:10px;
      }
      
    `}</style>
  </>
)