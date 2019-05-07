// From photoshop doc
import ReplyInfoContainerComponent from './ReplyInfoContainerComponent.js';
import ReplyContent from './ReplyContent.js';
import ReplyFooterContainerComponent from './ReplyFooterContainerComponent.js';  

const ReplyRootComponenet = (props) => (
    <>
      <div>
        <ReplyInfoContainerComponent 
        replyUsername={props.indivdualThreadData.threads_username} 
        replySubject={props.indivdualThreadData.threads_subject} 
        threadTime={props.indivdualThreadData.threads_created} 
        threadID={props.indivdualThreadData.threads_id} />
        <ReplyContent replyComment={props.indivdualThreadData.threads_comment}/>  
        <ReplyFooterContainerComponent threadID={props.indivdualThreadData.threads_id} replyCount={props.replyCount}/>
      </div>
        <style jsx>{`
          p{
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

export default ReplyRootComponenet;

// All content will be mobile initially