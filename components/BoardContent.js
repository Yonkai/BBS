import { withRouter } from 'next/router';

const BoardContent = withRouter((props) => (
    <>
        <p className={props.router.query.title}>{`Welcome to ${props.router.query.title}`}</p>
        <p>Start New Discussion</p>
        <p>Post 1 + replies</p>
        <p>Post 2 + replies</p>
        <p>Post 3 etc...</p>
        <p>..Post 10 (Bread crumbs to sub pages for this board exclusively)</p>
        <p>Board navigator</p> 
        <p>Settings</p>
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