//Modules
import React from 'react';
import Head from 'next/head';
import axios from 'axios';

//Util
var faker = require('faker');

//components
import Header from '../components/Header.js';
import BoardLink from '../components/BoardLink.js';
import Footer from '../components/Footer.js';
import Statistics from '../components/Statistics.js';
import About from '../components/About.js';


// const PostLink = (props) => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

const Index = (props) => (
   
  // React Fragment
  <>
    <Head>
      <title>{'Index'}</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" 
      integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" 
      crossorigin="anonymous"></link>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
      </meta>
    </Head>
    <div className="grid-container-index">
      <Header/>
      <div className="grid-boardlinks-container-item">
      <h1 className="board-title">Our Boards</h1>
        <div className="board-links-container">
          {
            props.boards.map((boards) =>
            <BoardLink 
              title={boards.boards_name} 
              key={boards.boards_id} 
              boards_id={boards.boards_id}
            />
            )
          }
        </div>
      </div>
      <About/>
      <Statistics statistics={props.statistics}/>
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

//Pull boardnames and load into app:
//See axios npm docs for response schema.
//Can only use getInitialProps on NextJS pages files
//Need absolute path unless using a baseurl in axios

//Looking into logging client vs server on for prod.
Index.getInitialProps =  async() => {
  const boards_response = await axios.post('http://localhost:4000/api/readboards');
  const readtotalreplys_response = await axios.post('http://localhost:4000/api/readtotalreplys');
  // console.log(
  //   response.data, 
  //   response.status,
  //   response.statusText,
  //   response.headers,
  //   // response.config,
  //   // response.request
  //   );
    //TODO: add error handler
  return {boards:boards_response.data,statistics:readtotalreplys_response.data};
}

export default Index;