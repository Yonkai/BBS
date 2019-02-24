import Header from './Header.js';
import Footer from './Footer.js';
import BoardContent from './BoardContent.js';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { checkPropTypes } from 'prop-types';
import Navigator from './Navigator.js';


const IndividualBoard = withRouter((props) => (
<>
    <Navigator/>
    <Link href="/settings">
      <a>Settings</a>   
    </Link>
    <Link href="/">
        <a>Home Page</a>
    </Link>
    <Header/>
    <BoardContent boardTitle={props.router.query.title}/>
    <Footer/>      <style jsx>{`
        a {
          margin-right: 15px;
        }
      `}</style>

</>
))

export default IndividualBoard