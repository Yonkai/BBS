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
    <p>Settings</p>
    <Link href="/">    
      <a>Home Page</a>   
    </Link>
    <Header/>
    <BoardContent boardTitle={props.router.query.title}/>
    <Footer/>

</>
))

export default IndividualBoard