//Modules
import faker from 'faker';
import ThreadPreviewRootComponent from '../components/Threads/ThreadPreviewMobile/ThreadPreviewRootComponent.js'; 
import Head from 'next/head';
import React from 'react';
import Navigator from '../components/Navigator.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import NewThreadButton from '../components/NewThreadButton.js';
import SubReplyRootComponent from '../components/Threads/ReplyComponentsMobile/SubReplyRootComponent.js';
import axios from 'axios';
import {withRouter} from 'next/router';

const exclusivethread = withRouter((props) => (
    // React Fragment
    <>
      <Head>
        <title>{props.router.query.pathname}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
        </meta>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Navigator/>

        <h3>Placeholder exclusive thread page. thread id:{props.router.query.threadID}</h3>
        <Header/>
        <NewThreadButton isThisPartOfAnExclusiveThread={true} />
        {/* Data needs to be loaded here again: */}
        {/*Map out data here form database call*/}
        <ThreadPreviewRootComponent original={props.original} indivdualThreadData={props.threads} threadID={props.threadID}/>
        {/* For exlcusive threads only: */}
        <SubReplyRootComponent/>
        <Footer/>

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

//2.(And also) pull in database props/tables/columns here...
//Pull replys/threads and load into app:
//See axios npm docs for response schema.
//Can only use getInitialProps on NextJS pages files
//Need absolute path unless using a baseurl in axios
exclusivethread.getInitialProps =  async() => {
  const thread_response = await axios.post('http://localhost:4000/api/readthreads');
  const reply_response = await axios.post('http://localhost:4000/api/readreplys');
  const board_response = await axios.post('http://localhost:4000/api/readboards');
  const original_response = await axios.post('http://localhost:4000/api/readoriginalthreadreplys');
  const exlclusive_thread_comments = null;
  console.log(
    thread_response.data, 
    thread_response.status,
    // thread_response.statusText,
    // thread_response.headers,
    reply_response.data,
    reply_response.status
    );
    //TODO:Error/.catch handler
  return {original:original_response.data,threads:thread_response.data, replys:reply_response.data, boards:board_response.data};
}

export default exclusivethread;