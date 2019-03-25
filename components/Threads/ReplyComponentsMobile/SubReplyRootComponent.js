//Design from photoshop doc
//SubReplyRootComponent is the same as ReplyRootComponent but with no footer,
//This preserveres better compositional nature.
import ReplyInfoContainerComponent from './ReplyInfoContainerComponent.js';
import ReplyContent from './ReplyContent.js';

const SubReplyRootComponent = (props) => (
    <>
      <div>
        <ReplyInfoContainerComponent />
        <ReplyContent/>
        {/* <ReplyFooterContainerComponent exclusiveThreadSlug={props.exclusiveThreadSlug}/> */}
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

export default SubReplyRootComponent