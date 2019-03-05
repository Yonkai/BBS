import { withRouter } from 'next/router';
import Navigator from './Navigator.js';
import Link from 'next/link';
import ScrollTop from './ScrollTop';
import ScrollDown from './ScrollDown.js';
import NewThreadButton from './NewThreadButton.js';
import Pagination from './Pagination.js';

const BoardContent = withRouter((props) => (
         
    <>
            <p className={props.router.query.title}>{`Welcome to ${props.router.query.title}`}</p>
            <Link href={{ pathname: '/indivdualboard', query:{title:props.router.query.title}}}>
                <a>Refresh</a>
            </Link>
            <ScrollDown/>
            {/* Possible components to extract: 
            "BoardThreadContainer"->"ContainedThread"->"ThreadReplyCotainer"->ThreadReplyUserContent
            "ExpandFromThreadPreview" (IF thread is over a certain size so to reduce indiv. board index size.)
                |__>"ExclusiveThreadPage" */}
            <NewThreadButton/>
            <p>Stickied Board Description Thread</p>
            <p>Post 1</p>
            <p>Post 1 replies</p>
            <p>Post 2 + replies</p>
            <p>Post 3 etc...</p>
            <p>..Post 10</p>
            <Pagination items={[...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }))} onChangePage={()=>{console.log('Unrefined Paginator')}} />
            <Navigator/>
            <Link href={{ pathname: '/indivdualboard', query:{title:props.router.query.title}}}>
                <a>Refresh</a>
            </Link>
            <ScrollTop/>
            <Link href="/settings">
                <a>Settings</a>   
            </Link>
        <style jsx>{`
        p{
            font-size:18px;
            justify-self:start;
        }
        .${props.router.query.title}{
            font-size:30px
        }

        `}</style>
    </>
))

export default BoardContent