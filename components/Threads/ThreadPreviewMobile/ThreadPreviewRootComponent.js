import ReplyRootComponent from '../ReplyComponentsMobile/ReplyRootComponent.js';

const ThreadPreviewRootComponent = (props) => (
    <>
      <div>
        <ReplyRootComponent 
        indivdualThreadData = {props.indivdualThreadData}
        handleOptimisticReplys={props.handleOptimisticReplys}
        replyCount={props.replyCount} 
        router={props.router}
        isThisPartOfAnExclusiveThread={props.isThisPartOfAnExclusiveThread || false}
        currentPage={props.currentPage}
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
            border-radius:5px;
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