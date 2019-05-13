import { withRouter } from 'next/router';
import Navigator from './Navigator.js';
import Link from 'next/link';
import ScrollTop from './ScrollTop';
import ScrollDown from './ScrollDown.js';
import NewThreadButton from './NewThreadButton.js';
import Pagination from './Pagination.js';
import IndivdualBoardsThreadsContainer from './IndivdualBoardsThreadsContainer.js';
import React from 'react';

class BoardContent extends React.Component {
    constructor(props){
        super(props);
        //Dont copy props into state, experienced some bugs with that while messing around, also react docs says not to do that.
        //Use component did update instead
    }

    render(){
        console.log(this.props.threads);

        return(
            <>
                <p className={this.props.router.query.title}>{`Welcome to ${this.props.router.query.title}`}</p>
                <div className="linkgrouprefreshbottomnewthread">
                    <Link href={{ pathname: '/indivdualboard', query:{title:this.props.router.query.title, page:this.props.router.query.page}}}>
                        <a>Refresh</a>
                    </Link>
                    <NewThreadButton boardID={this.props.router.query.boards_id}/>
                    <ScrollDown/>
                </div>
                <IndivdualBoardsThreadsContainer 
                    replyCount={this.props.replyCount} 
                    currentPage={this.props.currentPage} 
                    startIndex={this.props.startIndex} 
                    endIndex={this.props.endIndex} 
                    threads={this.props.threads} 
                    replys={this.props.replys}
                    router={this.props.router}
                />
                <Pagination currentPage={this.props.currentPage} startIndex={this.props.startIndex} endIndex={this.props.endIndex} onPagerChange={this.props.onPagerChange}/>
                <Navigator boards = {this.props.boards}/>
                <div>
                    <Link href={{ pathname: '/indivdualboard', query:{title:this.props.router.query.title}}}>
                        <a>Refresh</a>
                    </Link>
                    <ScrollTop/>
                    <Link href="/settings">
                        <a>Settings</a>   
                    </Link>
                </div>
            <style jsx>{`
            p{
                font-size:18px;
                justify-self:start;
            }
            .${this.props.router.query.title}{
                font-size:3w0px
            }
            a{
                margin-right:15px;
            }
            `}</style>
        </>
        );
    }
}

export default withRouter(BoardContent);

// const BoardContent = withRouter((props) => (
         
//     <>
//             <p className={props.router.query.title}>{`Welcome to ${props.router.query.title}`}</p>
//             <div className="linkgrouprefreshbottomnewthread">
//                 <Link href={{ pathname: '/indivdualboard', query:{title:props.router.query.title,page:props.router.query.page}}}>
//                     <a>Refresh</a>
//                 </Link>
//                 <NewThreadButton/>
//                 <ScrollDown/>
//             </div>
//             <IndivdualBoardsThreadsContainer threads={props.threads} original={props.original}/>
//             <Pagination
//             initialPage={1}
//             pageSize={10}
//             items={props.threads}
//             // 1. Switch this to a class function
//             // 2. Track the state of pager in this component (Could be useful later)
//             // 3. Add the state of pager to the render function to a component to props
//             // 4. Handle state changes from BoardContent in lower components (That were passed in as props.) (Only IndivdualBoardsThreadsContainer?)
//             // 5. Also include a fresh database call as a function in the new class function inside the render method, or possibly include that
//             // as an addition to the pager item (the database call) and pass that alongside the props from step 3.
//             // https://stackoverflow.com/questions/47461803/nextjs-componentwillmount-vs-getinitialprops
//             onChangePage={(pager)=>{console.log(pager)}} />
//             <Navigator boards = {props.boards}/>
//             <div>
//                 <Link href={{ pathname: '/indivdualboard', query:{title:props.router.query.title}}}>
//                     <a>Refresh</a>
//                 </Link>
//                 <ScrollTop/>
//                 <Link href="/settings">
//                     <a>Settings</a>   
//                 </Link>
//             </div>
//         <style jsx>{`
//         p{
//             font-size:18px;
//             justify-self:start;
//         }
//         .${props.router.query.title}{
//             font-size:30px
//         }
//         a{
//             margin-right:15px;
//         }
//         `}</style>
//     </>
// ))

// export default BoardContent;

