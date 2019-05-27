import ReplyRootComponent from '../ReplyComponentsMobile/ReplyRootComponent.js';
import SubReplyRootComponent from '../ReplyComponentsMobile/SubReplyRootComponent.js';

const ThreadPreviewRootComponent = (props) => (
    <>
      <div>
        <ReplyRootComponent 
        indivdualThreadData = {props.indivdualThreadData} 
        replyCount={props.replyCount} 
        router={props.router}
        />
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            // border:5px blue dashed;
            margin:5px;
            // padding:5px;
            background:#fff;
            display:grid;
            justify-self:start;
          
          }
          @media all and (max-width: 520px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,1200px);
            }
    
          }
        `}</style>
    </>
)

export default ThreadPreviewRootComponent;

// All content is mobile initially