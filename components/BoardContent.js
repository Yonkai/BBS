import { withRouter } from 'next/router';
import Navigator from './Navigator.js';
import Link from 'next/link';

const BoardContent = withRouter((props) => (
    <>
        <p className={props.router.query.title}>{`Welcome to ${props.router.query.title}`}</p>
        <p>Refresh</p>
        <p>Bottom</p>
        <p>Start New Discussion</p>
        <p>Post 1 + replies</p>
        <p>Post 2 + replies</p>
        <p>Post 3 etc...</p>
        <p>..Post 10 (Bread crumbs to sub pages for this board exclusively)</p>
        <Navigator/>
        <p>Refresh</p>
        <p>Bottom</p>
        <Link href="/settings">
            <a>Settings</a>   
        </Link>
        <style jsx>{`
        p{
            font-size:18px
        }
        .${props.router.query.title}{
            font-size:30px
        }
        `}</style>
    </>
))

export default BoardContent