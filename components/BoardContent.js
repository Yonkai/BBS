import { withRouter } from 'next/router';
import Navigator from './Navigator.js';
import Link from 'next/link';
import ScrollTop from './ScrollTop';
import ScrollDown from './ScrollDown.js';

const BoardContent = withRouter((props) => (
    <>
            <p className={props.router.query.title}>{`Welcome to ${props.router.query.title}`}</p>
            <Link href={{ pathname: '/indivdualboard', query:{title:props.router.query.title}}}>
                <a>Refresh</a>
            </Link>
            <ScrollDown/>
            <p>Start New Discussion</p>
            <p>Post 1 + replies</p>
            <p>Post 2 + replies</p>
            <p>Post 3 etc...</p>
            <p>..Post 10 (Bread crumbs to sub pages for this board exclusively)</p>
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