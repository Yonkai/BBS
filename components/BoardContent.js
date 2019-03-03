import { withRouter } from 'next/router';
import Navigator from './Navigator.js';
import Link from 'next/link';
import ScrollTop from './ScrollTop';
import ScrollDown from './ScrollDown.js';
import NewThreadButton from './NewThreadButton.js';
import BoardPagination from './BoardPagination.js';

const BoardContent = withRouter((props) => (
    <>
            <p className={props.router.query.title}>{`Welcome to ${props.router.query.title}`}</p>
            <Link href={{ pathname: '/indivdualboard', query:{title:props.router.query.title}}}>
                <a>Refresh</a>
            </Link>
            <ScrollDown/>
            {/* Possible components to extract: 
            "NewThreadButton",
            "ThreadContainer"->"Thread"->"ThreadReply"->ThreadReplyContent
            "ExpandFromThreadPreview" (If thread is over a certain size.)
                |__>"ExclusiveThreadPage"
            "BoardPagination" */}
            <NewThreadButton/>
            <p>Stickied Board Description Thread</p>
            <p>Post 1</p>
            <p>Post 1 replies</p>
            <p>Post 2 + replies</p>
            <p>Post 3 etc...</p>
            <p>..Post 10</p>
            <BoardPagination/>
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