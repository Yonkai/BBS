// From photoshop doc
import ReplyInfoContainerComponent from './ReplyInfoContainerComponent.js';
import ReplyContent from './ReplyContent.js';
import ReplyFooterContainerComponent from './ReplyFooterContainerComponent.js';  

const ReplyRootComponenet = (props) => (
    <>
      <div>
        <ReplyInfoContainerComponent />
        <ReplyContent/>
        <ReplyFooterContainerComponent exclusiveThreadSlug={props.exclusiveThreadSlug}/>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
          }
          div{
            border:5px black solid;
            display:grid;
            justify-self:start;
          }
          @media all and (max-width: 520px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,1200px)
            }
          }
        `}</style>
    </>
)

export default ReplyRootComponenet

// All content will be mobile initially