//Modules
import React from 'react';
import Head from 'next/head';

//Util
var faker = require('faker');

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
      <h1 className="board-title">Our Boards</h1>
        <div className="board-links-container">
          <BoardLink title={faker.database.collation()}/>
          <BoardLink title={faker.hacker.verb()}/>
          <BoardLink title={faker.helpers.randomize()}/>
          <BoardLink title={faker.internet.url()}/>
          <BoardLink title={faker.lorem.word()}/>
          <BoardLink title={faker.helpers.slugify('s l u g i f y')}/>
          <BoardLink title={faker.internet.ipv6()}/>
          <BoardLink title={faker.internet.color()}/>
          <BoardLink title={faker.name.jobType()}/>
          <BoardLink title={faker.system.commonFileType()}/>
          <BoardLink title={faker.system.semver()}/>
          <BoardLink title={faker.name.jobTitle()}/>
        </div>
      </div>
      <About/>
      <Statistics/>
      <Footer/>
    </div>

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
      
      .grid-container-index{
        display:grid;
        justify-items: center;
        grid-gap:5px;
      }

      .grid-boardlinks-container-item{
        border:5px solid black;
        display:grid;
        grid-template-columns:minmax(320px,1200px);
        // justify-items: center;
      }

      .board-title{
        justify-self:center;
      }

      .board-links-container{
          // /* Supports Grid */
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }

    `}</style>
  </>
)