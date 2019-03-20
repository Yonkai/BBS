//Modules
import faker from 'faker';
import ThreadPreviewRootComponent from '../components/Threads/ThreadPreviewMobile/ThreadPreviewRootComponent.js'; 
import Head from 'next/head';
import React from 'react';
import {withRouter} from 'next/router';

export default withRouter((props) => (
    // React Fragment
    <>
      <Head>
        <title>{props.router.query.pathname}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
        </meta>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

        <h3>Placeholder exclusive thread page. slug:{props.router.query.t}</h3>
        <ThreadPreviewRootComponent exclusiveThreadSlug={faker.random.number(0)}/>
        

      <style jsx global>{`
      html {
        box-sizing:border-box;
        margin:0; 
      }

      body{
        margin:0;
        min-height:100vh;
        background: DimGrey;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to bottom, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to bottom, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background-size: cover;
      }
    `}</style>
    </>
  ))