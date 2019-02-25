//Modules
import React from 'react';
import Head from 'next/head';

//components
import Header from '../components/Header.js';
import BoardLink from '../components/BoardLink.js';
import Footer from '../components/Footer.js';
import Statistics from '../components/Statistics.js';
import About from '../components/About.js';


const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

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
    <div className="grid-container-index">
      <Header/>
      <div className="grid-boardlinks-container-item">
        <BoardLink title="Board-1"/>
        <BoardLink title="Board-2"/>
        <BoardLink title="Board-3"/>
        <BoardLink title="Board-4"/>
        <BoardLink title="Board-5"/>
        <BoardLink title="Board-6"/>
      </div>
      <About/>
      <Statistics/>
      <Footer/>
    </div>

    <style jsx global>{`
      html {
        height:100vh;
        box-sizing:border-box;
        margin:0;  
        background: #FFEFBA;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      .grid-container-index{
        display:grid;
        justify-items: center;
      }
      .grid-boardlinks-container-item{
        border:4px solid black;
      }
      h1{
        border:5px solid black;
      }
    `}</style>
  </>
)