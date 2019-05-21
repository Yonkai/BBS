//Design from photoshop doc:
//OptimisticSubReplyRootComponent is similar to ReplyRootComponent but with no Footer,
//and similar to SubReplyRootComponent. This preserveres compositional nature.
//Optimistic UX shows up before the database has completed its queries, making it "optimistic"
import ReplyInfoContainerComponent from './ReplyInfoContainerComponent.js';
import ReplyContent from './ReplyContent.js';

const OptimisticSubReplyRootComponent = (props) => (
    <>
              <div>
                <ReplyInfoContainerComponent
                replyUsername={props.replyUsername}
                replySubject={props.replySubject}
                threadTime={props.threadTime}
                // This is super confusing... change it later
                threadID={props.threadID}/>
                <ReplyContent replyComment={props.replyComment}/>
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

export default OptimisticSubReplyRootComponent;

OptimisticSubReplyRootComponent.defaultProps = {
  individualReplyData:[],
}