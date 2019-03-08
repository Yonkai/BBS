import Header from './Header.js';
import Footer from './Footer.js';
import BoardContent from './BoardContent.js';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { checkPropTypes } from 'prop-types';
import Navigator from './Navigator.js';


const IndividualBoard = withRouter((props) => (
  <>
    <div className="container">
      <Navigator/>
      <Link href="/settings">
        <a>Settings</a>   
      </Link>
      <Link href="/search">
        <a>Search</a>
      </Link>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <Header/>
        <BoardContent boardTitle={props.router.query.title}/>
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

export default IndividualBoard