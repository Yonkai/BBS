import ReplyRootComponenet from '../ReplyComponentsMobile/ReplyRootComponent.js';

const ThreadPreviewRootComponent = (props) => (
    <>
      <div>
        <ReplyRootComponenet/>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px blue dashed;
            margin:5px;
            padding:5px;
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

export default ThreadPreviewRootComponent

// All content is mobile initially