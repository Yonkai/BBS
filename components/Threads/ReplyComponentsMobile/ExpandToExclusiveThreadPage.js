var faker = require('faker');
import Link from 'next/link';

class ExpandToExclusiveThreadPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {MainOrExclusive: true};  
    }
  
  render(){

      return (
        <>
          <div>
            <Link href={{ pathname: 'exclusivethread', query: { threadID: this.props.threadID, boardID: this.props.router.query.boards_id } }} >
                <a className="boardLink">Expand Thread</a>
            </Link>
          </div>
            <style jsx>{`
              p {
                font-family: "Roboto";
                margin:0;
    
              }
              div{
                border:5px GreenYellow solid;
              
              }
            `}</style>
        </>
      );
  }
}

export default ExpandToExclusiveThreadPage