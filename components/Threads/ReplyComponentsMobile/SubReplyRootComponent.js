//Design from photoshop doc:
//SubReplyRootComponent is similar to ReplyRootComponent but with no footer,
//This preserveres compositional nature.
import ReplyInfoContainerComponent from './ReplyInfoContainerComponent.js';
import ReplyContent from './ReplyContent.js';

const SubReplyRootComponent = (props) => (
    <>
        {props.individualReplyData && props.individualReplyData.map((replys, index) =>
              <div key={index}>
                <ReplyInfoContainerComponent 
                replyUsername={replys.replys_username} 
                replySubject={props.replySubject}
                threadTime={replys.replys_created} 
                // This is super confusing... change it later
                threadID={replys.replys_id}/>
                <ReplyContent replyComment={replys.replys_comment}/>
              </div>

            )
          }
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
          }
          div{
            border:5px solid #99f;
            margin-top:5px;
            margin-bottom:5px;
            display:grid;
            justify-self:start;
            background:#fff;
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

export default SubReplyRootComponent;

SubReplyRootComponent.defaultProps = {
  individualReplyData:[],
}
