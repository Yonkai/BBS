import { withRouter } from 'next/router';
import Navigator from './Navigator.js';
import Link from 'next/link';
import ScrollTop from './ScrollTop';
import ScrollDown from './ScrollDown.js';
import NewThreadButton from './NewThreadButton.js';
import Pagination from './Pagination.js';
import IndivdualBoardsThreadsContainer from './IndivdualBoardsThreadsContainer.js';
import { checkPropTypes } from 'prop-types';

const BoardContent = withRouter((props) => (
         
    <>
            <p className={props.router.query.title}>{`Welcome to ${props.router.query.title}`}</p>
            <div className="linkgrouprefreshbottomnewthread">
                <Link href={{ pathname: '/indivdualboard', query:{title:props.router.query.title}}}>
                    <a>Refresh </a>
                </Link>
                <NewThreadButton/>
                <ScrollDown/>
            </div>
            <IndivdualBoardsThreadsContainer threads={props.threads} original={props.original}/>
            <Pagination initialPage={1} pageSize={10} items={[...Array(100).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }))} onChangePage={()=>{console.log('Unrefined Paginator')}} />
            <Navigator boards = {props.boards}/>
            <div>
                <Link href={{ pathname: '/indivdualboard', query:{title:props.router.query.title}}}>
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
        .${props.router.query.title}{
            font-size:30px
        }
        a{
            margin-right:15px;
        }


        `}</style>
    </>
))

export default BoardContent;