//Modules
import React from 'react';
import Head from 'next/head';

export default () => (
  // React Fragment
  <>
    <Head>
      <title>{'BBS FAQ'}</title>
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" 
      integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" 
      crossorigin="anonymous"></link>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
      </meta>
    </Head>
    <div className='faq'>
      <h2>What is this website?</h2>
      <p>An internet forum.</p>
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
      .faq{
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