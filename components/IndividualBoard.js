import Header from './Header.js';
import Footer from './Footer.js';
import BoardContent from './BoardContent.js';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Navigator from './Navigator.js';

const IndividualBoard = withRouter((props) => (
  <>
    <div className="container">
      <Navigator boards={props.boards}/>
      <div className='settings-search-home'>
        <Link href="/settings">
          <a>Settings</a>   
        </Link>
        <Link href="/search">
          <a>Search</a>
        </Link>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>
      <Header/>
        <BoardContent 
         boardTitle={props.router.query.title} 
         boards={props.boards}
         threads={props.threads}
         router={props.router}
         onPagerChange={props.onPagerChange}
         requery={props.requery}
         currentPage={props.currentPage}
         startIndex={props.startIndex}
         endIndex={props.endIndex}
         replyCount={props.replyCount}
         />
      <Footer/>
    </div>
    <style jsx>{`
        a {
          margin-right: 15px;
        }

        .container{
          display:grid;
          justify-items:center;
          grid-template-columns:1fr;
          background:#cce;  /* fallback for old browsers */
        }

        .navigationMenuContainer{
          display:grid;
          justify-self:stretch;
        }

      @media all and (max-width: 520px) {
        .container{
          display:grid;
          grid-template-columns:minmax(320px,1200px)
        }

      }
      `}</style>
  </>
))

export default IndividualBoard;
