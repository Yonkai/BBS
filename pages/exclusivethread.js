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

//config object, should show most differences between production and 
//development environments
import config from '../config/config.js';

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

    this.setState((prevState) => ({
      optimisticComment:newOptimisticCommentsArray,
      optimisiticUsername:newOptimisticUsernamesArray,
      optimisiticFlag:true,
    }));
  }

  longPollDatabaseReplys(){
    console.log('polled database...');
    //reset state of optimisitic renderer state so that when a user submits a reply, it verifies, and then submits another reply
    //the optimisitic reply doesn't get rendered alongside the the non optmisitic reply
    axios.post(`http://localhost:4000/api/readexclusivereplys/${this.props.router.query.threadID}`)
    .then((response)=>this.setState({
      polledExclusiveReplys:response.data, 
      isLoading: false,
      optimisiticFlag:false,
      optimisticComment:[],
      optimisiticUsername:[]
    }))
    .catch(error => this.setState({
      error,
      isLoading:false
    }));

  }

  componentDidUpdate(prevProps,prevState){
    //fires after setState calls in handleOptimisticReplys per official docs
    //Checks if the optimisiticComment has been removed from state
    //If it has, don't scroll down on update, if there is a new optimisitic comment, scroll down.
    if(this.state.optimisticComment.length > prevState.optimisticComment.length){
        //Scroll to page bottom, better solution would be to scroll to the actual component (TODO I guess.) 
        window.scrollTo(0,document.body.scrollHeight);
    }
  }

  componentDidMount(){
    var intervalId = setInterval(this.longPollDatabaseReplys, config.repollInterval);
    // store intervalId in the state so it can be accessed later for unmounting
    // in componentWillUnmount lifecycle
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount(){
    // Clear intervalId from ComponentDidMount lifecycle method that initialized a
    // longpoll connection to the database
   clearInterval(this.state.intervalId);

  }

  render(){
    return(
      <>
        <Head>
          <title>{this.props.router.query.title} {this.props.exclusiveThread[0].threads_subject} {this.props.router.query.threadID}</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
          <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" 
      integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" 
      crossorigin="anonymous"></link>
          <script src="https://www.google.com/recaptcha/api.js?onload=onLoadCallback&render=explicit" 
          async defer></script>
        </Head>
        <Navigator boards={this.props.boards}/>
          <h2>{this.props.router.query.title} {this.props.exclusiveThread[0].threads_subject} {this.props.router.query.threadID} </h2>
          <div className='header'>
            <Header/>
          </div>
          <NewThreadButton 
          isThisPartOfAnExclusiveThread={true} 
          threadID={this.props.router.query.threadID} 
          boardID={this.props.router.query.boardID}
          handleOptimisticReplys={this.handleOptimisticReplys}
          />
          <div className='container'>
            <ThreadPreviewRootComponent 
            indivdualThreadData={this.props.exclusiveThread} 
            replyCount={this.props.replyCount} 
            router={this.props.router}
            isThisPartOfAnExclusiveThread={true}
            handleOptimisticReplys={this.handleOptimisticReplys}
            currentPage={this.props.router.query.currentPage}
            />
            {/* For exlcusive threads only, map props of replys for the exlcusive page*/}
            {this.state.polledExclusiveReplys.length>this.props.exclusiveThreadReplys.length?
            <SubReplyRootComponent 
            individualReplyData={this.state.polledExclusiveReplys} 
            replySubject={this.props.exclusiveThread[0].threads_subject}
            isThisPartOfAnExclusiveThread={true}
            handleOptimisticReplys={this.handleOptimisticReplys}
            />:
            //Note that the only difference between these two SubReplyRootComponents
            //in the ternary operator is the individualReplyData props' source. 
            <SubReplyRootComponent 
            individualReplyData={this.props.exclusiveThreadReplys} 
            replySubject={this.props.exclusiveThread[0].threads_subject}
            isThisPartOfAnExclusiveThread={true}
            handleOptimisticReplys={this.handleOptimisticReplys}
            />

            }
            {this.state.optimisiticFlag?
            this.state.optimisticComment.map((comments,index) =>
              <OptimisticSubReplyRootComponent
                key={index}
                replyUsername={this.state.optimisiticUsername[index]}
                replyComment={comments}
                replySubject={this.props.exclusiveThread[0].threads_subject}
                threadTime={new Date()}
                threadID={123456}
              />):<span></span>}
            </div>
          <Footer/>

        <style jsx global>{`
        html {
          box-sizing:border-box;
          margin:0; 
        }

        body{
          margin:0;
          min-height:100vh;
          background: #cce;  /* fallback for old browsers */
          // background: -webkit-linear-gradient(to bottom, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
          // background: linear-gradient(to bottom, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          // background-size: cover;
        }

        .header{
            display:grid;
            justify-items: center;
            grid-gap:5px;
        }

          .container{
            display:grid;
            justify-items:center;
            grid-template-columns:1fr;
            background:#cce;  /* fallback for old browsers */
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
  // ???Promise.All these???
  const board_response = await axios.post('http://localhost:4000/api/readboards')
  .catch(function (error) {console.log(error);});
  console.log(board_response);
  const exclusive_thread = await axios.post(`http://localhost:4000/api/readexclusivethread/${context.query.threadID}`)
  .catch(function (error) {console.log(error);});
  const exclusive_thread_replys = await axios.post(`http://localhost:4000/api/readexclusivereplys/${context.query.threadID}`)
  .catch(function (error) {console.log(error);});
  const threads_reply_count = await axios.post(`http://localhost:4000/api/readthreadsreplycount/${context.query.threadID}`)
  .catch(function (error) {console.log(error);});
  // console.log(
    // response properties from axios call
    // thread_response.data, 
    // thread_response.status,
    // thread_response.statusText,
    // thread_response.headers,
    // reply_response.data,
    // reply_response.status
  //   );
  return {
    exclusiveThreadReplys:exclusive_thread_replys.data,
    exclusiveThread:exclusive_thread.data,
    boards:board_response.data,
    replyCount:threads_reply_count.data
  };
}

export default withRouter(ExclusiveThreadPage);