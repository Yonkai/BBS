//Modules
import IndividualBoard from '../components/IndividualBoard.js';
import Head from 'next/head';
import React from 'react';
import {withRouter} from 'next/router';
import axios from 'axios';

const individualboard = withRouter((props) => (
    // React Fragment
    <>
      <Head>
        <title>{props.router.query.pathname}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
        </meta>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

        <IndividualBoard router={props.router} title={props.router.query.pathname} boards={props.boards} threads={props.threads} replys={props.replys} original={props.original}/>

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

//1.Pull in database props/tables/columns here...
//Pull replys/threads and load into app:
//See axios npm docs for response schema.
//Can only use getInitialProps on NextJS pages files
//Need absolute path unless using a baseurl in axios
individualboard.getInitialProps =  async() => {
  const thread_response = await axios.post('http://localhost:4000/api/readthreads');
  const reply_response = await axios.post('http://localhost:4000/api/readreplys');
  const board_response = await axios.post('http://localhost:4000/api/readboards');
  const originalthreadreply_response = await axios.post('http://localhost:4000/api/readoriginalthreadreplys');
  console.log(
    thread_response.data, 
    thread_response.status,
    // thread_response.statusText,
    // thread_response.headers,
    reply_response.data,
    reply_response.status
    );
    //TODO:Error/.catch handler
  return {
    threads:thread_response.data, 
    replys:reply_response.data,
    boards:board_response.data,
    original:originalthreadreply_response.data
  };
}


export default individualboard;