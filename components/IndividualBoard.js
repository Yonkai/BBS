import Header from './Header.js';
import Footer from './Footer.js'
import Link from 'next/link';
import { withRouter } from 'next/router';
import { checkPropTypes } from 'prop-types';

const IndividualBoard = withRouter((props) => (
<>
    <p>Board navigator</p> 
    <p>Settings</p>
    <Link href="/">    
      <a>Home Page</a>   
    </Link>
    <Header/>
    <p className={props.router.query.title}>{`Welcome to ${props.router.query.title}`}</p>
    <p>Start New Discussion</p>
    <p>Post 1 + replies</p>
    <p>Post 2 + replies</p>
    <p>Post 3 etc...</p>
    <p>..Post 10 (Bread crumbs to sub pages)</p>
    <p>Board navigator</p> 
    <p>Settings</p>
    <Footer/>
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

export default IndividualBoard