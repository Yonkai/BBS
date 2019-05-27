//Modules
import ThreadPreviewRootComponent from '../components/Threads/ThreadPreviewMobile/ThreadPreviewRootComponent.js'; 
import Head from 'next/head';
import React from 'react';
import Navigator from '../components/Navigator.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import NewThreadButton from '../components/NewThreadButton.js';
import SubReplyRootComponent from '../components/Threads/ReplyComponentsMobile/SubReplyRootComponent.js';
import OptimisticSubReplyRootComponent from '../components/Threads/ReplyComponentsMobile/OptimisticSubReplyRootComponent.js';
import axios from 'axios';
import {withRouter} from 'next/router';

class ExclusiveThreadPage extends React.Component{
  constructor(props){
    super(props);
      this.handleOptimisticReplys = this.handleOptimisticReplys.bind(this);
      this.longPollDatabaseReplys = this.longPollDatabaseReplys.bind(this);

      this.state = {
        //Optimistic UX displays reply before it is actually inserted into the database 
        //for a more salient experience
        optimisticComment:[],
        optimisiticUsername:[],
        polledExclusiveReplys:[],
        optimisiticTimestamp:0,
        optimisiticFlag:false,
        isLoading:false
      }
  }

  handleOptimisticReplys(optimisticUsername,optimisticComment){
    //Sets the optimistic UX state from NewThreadButton component
    console.log(optimisticUsername,optimisticComment);
    //Do this to avoid mutating state:
    var newOptimisticCommentsArray = this.state.optimisticComment.slice();
    newOptimisticCommentsArray.push(optimisticComment);

    //Again, do this to avoid mutating state:
    var newOptimisticUsernamesArray = this.state.optimisiticUsername.slice();
    newOptimisticUsernamesArray.push(optimisticUsername);

    console.log('Hello world');
    this.setState((prevState) => ({
      optimisticComment:newOptimisticCommentsArray,
      optimisiticUsername:newOptimisticUsernamesArray,
      optimisiticFlag:true,
    }));
  }

  longPollDatabaseReplys(){
    console.log('polled database');
    axios.post(`http://localhost:4000/api/readexclusivereplys/${this.props.router.query.threadID}`)
    .then((response)=>this.setState({polledExclusiveReplys:response.data, isLoading: false,optimisiticFlag:false}))
    .catch(error => this.setState({
      error,
      isLoading:false
    }));
  }

  componentDidUpdate(prevProps,prevState){
    //fires after setState calls in handleOptimisticReplys per official docs
    if(this.state.optimisiticUsername !== prevState.optimisiticUsername){
    console.log('hello world');

    }
  }

  componentDidMount(){
    var intervalId = setInterval(this.longPollDatabaseReplys, 30000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount(){
    // use intervalId from the state to clear the interval
   clearInterval(this.state.intervalId);

  }

  render(){
    return(
      <>
        <Head>
          <title>{this.props.router.query.title}</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          
        </Head>
        <Navigator boards={this.props.boards}/>

          <h3>Placeholder exclusive thread page. thread id:{this.props.router.query.threadID}</h3>
          <Header/>
          <NewThreadButton 
          isThisPartOfAnExclusiveThread={true} 
          threadID={this.props.router.query.threadID} 
          boardID={this.props.router.query.boardID}
          handleOptimisticReplys={this.handleOptimisticReplys}
          />
          {/* Data needs to be loaded here again: */}
          {/*Map out data here form database call*/}
          <ThreadPreviewRootComponent 
          indivdualThreadData={this.props.exclusiveThread} 
          replyCount={this.props.replyCount} 
          router={this.props.router}
          />
          {/* For exlcusive threads only, map props of replys for the exlcusive page*/}
          {this.state.polledExclusiveReplys.length>this.props.exclusiveThreadReplys.length?
          <SubReplyRootComponent 
          individualReplyData={this.state.polledExclusiveReplys} 
          replySubject={this.props.exclusiveThread[0].threads_subject}
          />:
          <SubReplyRootComponent 
          individualReplyData={this.props.exclusiveThreadReplys} 
          replySubject={this.props.exclusiveThread[0].threads_subject}
          />

          }
          {this.state.optimisiticFlag?
          this.state.optimisticComment.map((comments,index) =>
            <OptimisticSubReplyRootComponent
             replyUsername={this.state.optimisiticUsername[index]}
             replyComment={comments}
             replySubject={this.props.exclusiveThread[0].threads_subject}
             threadTime={new Date()}
             threadID={123456}
           />):<span></span>
           }
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
    );
  }
}

ExclusiveThreadPage.getInitialProps =  async(context) => {
console.log('context object:',context);
  // const thread_response = await axios.post('http://localhost:4000/api/readthreads');
  // const reply_response = await axios.post('http://localhost:4000/api/readreplys');
  const board_response = await axios.post('http://localhost:4000/api/readboards')
  .catch(function (error) {console.log(error);});
  const exclusive_thread = await axios.post(`http://localhost:4000/api/readexclusivethread/${context.query.threadID}`)
  .catch(function (error) {console.log(error);});
  const exclusive_thread_replys = await axios.post(`http://localhost:4000/api/readexclusivereplys/${context.query.threadID}`)
  .catch(function (error) {console.log(error);});
  const threads_reply_count = await axios.post(`http://localhost:4000/api/readthreadsreplycount/${context.query.threadID}`)
  .catch(function (error) {console.log(error);});
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

export default withRouter(ExclusiveThreadPage);
// const exclusivethread = withRouter((props) => (
//     // React Fragment
//     <>
//       <Head>
//         <title>{props.router.query.pathname}</title>
//         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
//         </meta>
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
//       </Head>
//       <Navigator boards={props.boards}/>

//         <h3>Placeholder exclusive thread page. thread id:{props.router.query.threadID}</h3>
//         <Header/>
//         <NewThreadButton isThisPartOfAnExclusiveThread={true} threadID={props.router.query.threadID} boardID={props.router.query.boardID}/>
//         {/* Data needs to be loaded here again: */}
//         {/*Map out data here form database call*/}
//         <ThreadPreviewRootComponent indivdualThreadData={props.exclusiveThread} replyCount={props.replyCount} router={props.router}/>
//         {/* For exlcusive threads only, map props of replys for the exlcusive page*/}
//         <SubReplyRootComponent individualReplyData={props.exclusiveThreadReplys} replySubject={props.exclusiveThread[0].threads_subject}/>
//         <Footer/>

//       <style jsx global>{`
//       html {
//         box-sizing:border-box;
//         margin:0; 
//       }

//       body{
//         margin:0;
//         min-height:100vh;
//         background: DimGrey;  /* fallback for old browsers */
//         // background: -webkit-linear-gradient(to bottom, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
//         // background: linear-gradient(to bottom, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
//         // background-size: cover;
//       }
//     `}</style>
//     </>
//   ))

// //2.(And also) pull in database props/tables/columns here...
// //Pull replys/threads and load into app:
// //See axios npm docs for response schema.
// //Can only use getInitialProps on NextJS pages files
// //Need absolute path unless using a baseurl in axios
