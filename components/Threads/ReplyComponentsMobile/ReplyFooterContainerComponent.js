import ExpandToExclusiveThreadPage from './ExpandToExclusiveThreadPage' ;
import ThreadReplyCount from './ThreadReplyCount';

// From photoshop doc
const ReplyFooterContainerComponent = (props) => (
    <>
      <div>
          <ExpandToExclusiveThreadPage router={props.router} threadID={props.threadID}/>
          <ThreadReplyCount replyCount={props.replyCount} threadID={props.threadID}/>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
          }
          div{
            border:5px #fff solid;
            background: #eef;
            display:grid;
            grid-template-columns:1fr 1fr;
          }
          @media all and (max-width: 520px) {
            div{
              display:grid;
              grid-template-columns:1fr 1fr;
              
            }
    
          }
        `}</style>
    </>
)

export default ReplyFooterContainerComponent

// All content will be mobile initially