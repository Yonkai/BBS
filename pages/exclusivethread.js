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
      <Navigator boards={props.boards}/>

        <h3>Placeholder exclusive thread page. thread id:{props.router.query.threadID}</h3>
        <Header/>
        <NewThreadButton isThisPartOfAnExclusiveThread={true} threadsID={props.router.query} boardsID={props.router}/>
        {/* Data needs to be loaded here again: */}
        {/*Map out data here form database call*/}
        <ThreadPreviewRootComponent indivdualThreadData={props.exclusiveThread} replyCount={props.replyCount}/>
        {/* For exlcusive threads only, map props of replys for the exlcusive page*/}
        <SubReplyRootComponent individualReplyData={props.exclusiveThreadReplys} replySubject={props.exclusiveThread[0].threads_subject}/>
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
exclusivethread.getInitialProps =  async(context) => {
  console.log('context object?',context);
  // const thread_response = await axios.post('http://localhost:4000/api/readthreads');
  // const reply_response = await axios.post('http://localhost:4000/api/readreplys');
  const board_response = await axios.post('http://localhost:4000/api/readboards');
  const exclusive_thread =  await axios.post(`http://localhost:4000/api/readexclusivethread/${context.query.threadID}`);
  const exclusive_thread_replys =  await axios.post(`http://localhost:4000/api/readexclusivereplys/${context.query.threadID}`);
  const threads_reply_count = await axios.post('http://localhost:4000/api/readthreadsreplycount');
  console.log(
    // thread_response.data, 
    // thread_response.status,
    // // thread_response.statusText,
    // // thread_response.headers,
    // reply_response.data,
    // reply_response.status
    );
    //TODO:Error/.catch handler
  return {
    exclusiveThreadReplys:exclusive_thread_replys.data,
    exclusiveThread:exclusive_thread.data,
    boards:board_response.data,
    replyCount:threads_reply_count.data
  };
}

export default exclusivethread;