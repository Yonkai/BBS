import ExpandToExclusiveThreadPage from './ExpandToExclusiveThreadPage' ;
import ThreadReplyCount from './ThreadReplyCount';

// From photoshop doc
const ReplyFooterContainerComponent = (props) => (
    <>
      <div>
          <ExpandToExclusiveThreadPage/>
          <ThreadReplyCount/>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px red dashed;
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