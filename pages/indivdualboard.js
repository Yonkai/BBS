//Modules
import IndividualBoard from '../components/IndividualBoard.js';
import Head from 'next/head';
import React from 'react';
import {withRouter} from 'next/router';
import axios from 'axios';

class IndivdualBoardPage extends React.Component {
     constructor(props){
        super(props);
        this.handlePagerChange = this.handlePagerChange.bind(this);
        this.queryBBSAPIs = this.queryBBSAPIs.bind(this);
        this.state =
        { threads:[],
          replys:[],
          boards:[],
          original:[],
          pager:{
            CurrentPage:null,
            endIndex:null,
            endPage:null,
            pageSize:null,
            pages:null,
            startIndex:null,
            startPage:null,
            totalItems:100,
            totalPages:10
          },
          isLoading:false,
          error:null};
       }

//currentPage:
// 1
// endIndex:
// 9
// endPage:
// 10
// pageSize:
// 10
// pages:
// Array[10]
// startIndex:
// 0
// startPage:
// 1
// totalItems:
// 100
// totalPages:
// 10
    
    queryBBSAPIs(){
      this.setState({isLoading:true});
      axios.post('http://localhost:4000/api/readoriginalthreadreplys')
      .then((response)=>this.setState({original:response.data}))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
      
      // Only get inifinite loops from this one????
      axios.post('http://localhost:4000/api/readthreads')
      .then((response)=>this.setState({threads:response.data}))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
      

      axios.post('http://localhost:4000/api/readreplys')
      .then((response)=>this.setState({replys:response.data}))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));

    axios.post('http://localhost:4000/api/readboards')
    .then((response)=>this.setState({boards:response.data, isLoading: false}))
    .catch(error => this.setState({
      error,
      isLoading:false
    }));
    }

  componentDidMount() {
    this.queryBBSAPIs();
  }

  componentDidUpdate(){
    console.log('cpd');
  }

  handlePagerChange(UpdatedPager){
    this.setState(function() {
      return {
        pager: UpdatedPager
      };
    });
    // this.queryBBSAPIs();
  }

  render(){
        return(
          <>
            <Head>
              <title>{this.props.router.pathname}</title>
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
              </meta>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>

             <IndividualBoard
            router={this.props.router} 
            title={this.props.router.pathname} 
            boards={this.state.boards} 
            threads={this.state.threads} 
            replys={this.state.replys} 
            original={this.state.original} 
            onPagerChange={this.handlePagerChange} 
            requery={this.queryBBSAPIs}
            pager={this.state.pager}
            />

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