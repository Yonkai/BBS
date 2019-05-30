var faker = require('faker');
import Link from 'next/link';
import Router from 'next/router';

class ExpandToExclusiveThreadPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {MainOrExclusive: true};  
    }
  
  render(){

      return (
        <>
          <div>
            {
              <div>
               {
                this.props.router.query.boards_id?
                <Link href={{ pathname: 'exclusivethread', query: { threadID: this.props.threadID, boardID: this.props.router.query.boards_id, title:this.props.router.query.title } }} >
                    <a className="boardLink">Expand Thread</a>
                </Link>:
                  <a onClick={() => Router.back()}>Go Back to {this.props.router.query.title}</a>
               }
             </div>
            }
          </div>
            <style jsx>{`
              p {
                font-family: "Roboto";
                margin:0;
    
              }
              div div{
                border:0px #fff solid;
                background: #eef;
              }
              div div:hover{
                background: rgb(255, 225, 240);
    
              }
              div div a{
                color:blue;
                text-decoration:underline;
                cursor:pointer;
              }
            `}</style>
        </>
      );
  }
}

export default ExpandToExclusiveThreadPage