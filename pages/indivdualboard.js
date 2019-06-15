//Modules
import IndividualBoard from '../components/IndividualBoard.js';
import Head from 'next/head';
import React from 'react';
import {withRouter} from 'next/router';
import axios from 'axios';

//Side note: Renders happen top-down, mounts happen down-top
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// ^ Obviously manual is better but this was really useful for debugging.

class IndivdualBoardPage extends React.Component {
     constructor(props){
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.queryBBSAPIs = this.queryBBSAPIs.bind(this);
        this.calcEndIndex = this.calcEndIndex.bind(this);
        this.calcStartIndex = this.calcStartIndex.bind(this);

        this.state =
        { 
          threads:[],
          boards:[],
          replyCount:[],
          //This is only for initial population, which, acording to the internet (praise be), is not an antipattern:
          //https://stackoverflow.com/questions/40063468/react-component-initialize-state-from-props
          //Also, lesson learned, keep navigation consistent, ran into issue with conflicting
          //state vs.querystring based routing.
          currentPage:parseFloat(this.props.router.query.initialPage),
          // startIndex and endIndex are used as delimiters for seperating the database calls on threads
          startIndex:this.calcStartIndex(this.props.router.query.initialPage),
          endIndex:this.calcEndIndex(this.props.router.query.initialPage),
          isLoading:false,
          error:null
        };
       }
       
       calcStartIndex(startIndex){
        var parsedIndex = parseFloat(startIndex);
        var index = (((parsedIndex-1)*10));
        return index;
       }

       calcEndIndex(endIndex){
        var parsedIndex = parseFloat(endIndex);
        var index = (((parsedIndex-1)*10)+9);
        return index;
       }
  
    async queryBBSAPIs(){
      this.setState({isLoading:true});
      //Change to axios.all to avoid race conditions in production verison
      //See axios npm docs and also Promises docs on MDN.

    //  axios.post(`http://localhost:4000/api/readallthreadsreplycount/${this.props.router.query.boards_id}`)
    //   .then((response)=>this.setState({replyCount:response.data}))
    //   .catch(error =>{
    //     this.setState({
    //     error,
    //     isLoading: false
    //   });
    //   console.log(error);
    //   });
      
    //  axios.post(`http://localhost:4000/api/readthreads/${this.props.router.query.boards_id}`)
    //   .then((response)=>this.setState({threads:response.data}))
    //   .catch(error => this.setState({
    //     error,
    //     isLoading: false
    //   }));

    //  axios.post('http://localhost:4000/api/readboards')
    // .then((response)=>this.setState({boards:response.data, isLoading: false}))
    // .catch(error => this.setState({
    //   error,
    //   isLoading:false
    // }));
    let replyCounts = await axios.post(`http://localhost:4000/api/readallthreadsreplycount/${this.props.router.query.boards_id}`);
    let readThreads = await axios.post(`http://localhost:4000/api/readthreads/${this.props.router.query.boards_id}`);
    let readBoards = await axios.post('http://localhost:4000/api/readboards');
    Promise.all([replyCounts, readThreads, readBoards]).then((values) => {
      this.setState({
        replyCount:values[0].data,
        threads:values[1].data,
        boards:values[2].data
      });
    });

    }

  //TODO:Abstract pagination component && remove gross magic numbers && DRY code.
  handlePageChange(UpdatedPage){
    switch (UpdatedPage){
    case 'NEXT':
    this.setState((state,props) => ({
      currentPage:state.currentPage !== 10?state.currentPage + 1:state.currentPage,
      startIndex:state.currentPage !== 10?state.startIndex+10:state.startIndex,
      endIndex:state.currentPage !== 10?state.endIndex+10:state.endIndex,
    }),this.queryBBSAPIs());

    break;
    case 'PREVIOUS':
      this.setState((state,props) => ({
        currentPage:state.currentPage !== 1 ?state.currentPage - 1:state.currentPage,
        startIndex:state.currentPage !== 1 ?state.startIndex-10:state.startIndex,
        endIndex:state.currentPage !== 1 ?state.endIndex-10:state.endIndex,
      }),this.queryBBSAPIs());
    break;

    default:
      this.setState((state,props) => ({
        currentPage:UpdatedPage,
        startIndex:0+((UpdatedPage-1)*10),
        endIndex:(UpdatedPage*10)-1,
      }),this.queryBBSAPIs());
  }

  }

  componentDidMount() {
    this.queryBBSAPIs();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    // Compare props to avoid redudant rerenders
    if (this.props.router.query.title !== prevProps.router.query.title) {
      this.queryBBSAPIs();
    }
  }

  render(){
    console.log(this.state.boards,this.state.threads);
        return(
          <>
            <Head>
              <title>{this.props.router.query.title}</title>
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
              </meta>
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
              <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" 
      integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" 
      crossorigin="anonymous"></link>
            </Head>

             <IndividualBoard
              router={this.props.router}
              title={this.props.router.pathname}
              boards={this.state.boards}
              currentPage={this.state.currentPage}
              startIndex={this.state.startIndex}
              endIndex={this.state.endIndex}
              threads={this.state.threads}
              onPagerChange={this.handlePageChange}
              requery={this.queryBBSAPIs}
              replyCount={this.state.replyCount}
            />

            <style jsx global>{`
            html {
              box-sizing:border-box;
              margin:0;
              font-size:18px;
            }

            body{
              margin:0;
              min-height:100vh;
              background: #fff;  /* fallback for old browsers */
              // background: -webkit-linear-gradient(to bottom, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
              // background: linear-gradient(to bottom, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
              // background-size: cover;
            }
          `}</style>
          </>
        );
    }
}

export default withRouter(IndivdualBoardPage);

// const individualboard = withRouter((props) => (
//     // React Fragment
//     <>
//       <Head>
//         <title>{props.router.query.pathname}</title>
//         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
//         </meta>
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
//       </Head>

//         <IndividualBoard router={props.router} title={props.router.query.pathname} boards={props.boards} threads={props.threads} replys={props.replys} original={props.original}/>

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

// //1.Pull in database props/tables/columns here...
// //Pull replys/threads and load into app:
// //See axios npm docs for response schema.
// //Can only use getInitialProps on NextJS pages files
// //Need absolute path unless using a baseurl in axios

// export default individualboard;
