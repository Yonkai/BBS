// From photoshop doc
import ReplyInfoContainerComponent from './ReplyInfoContainerComponent.js';
import ReplyContent from './ReplyContent.js';
import ReplyFooterContainerComponent from './ReplyFooterContainerComponent.js';
import PropTypes from 'prop-types';

const ReplyRootComponenet = (props) => (
    <>
    {/* || operator helps handle, here, two different data return types from axios and getInitialProps of the same data. */}
      <div>
        <ReplyInfoContainerComponent 
          replyUsername={props.indivdualThreadData.threads_username || props.indivdualThreadData[0].threads_username} 
          replySubject={props.indivdualThreadData.threads_subject || props.indivdualThreadData[0].threads_subject} 
          threadTime={props.indivdualThreadData.threads_created || props.indivdualThreadData[0].threads_created} 
          threadID={props.indivdualThreadData.threads_id || props.indivdualThreadData[0].threads_id}
          isThisPartOfAnExclusiveThread={props.isThisPartOfAnExclusiveThread || false} 
        />
        <ReplyContent replyComment={props.indivdualThreadData.threads_comment || props.indivdualThreadData[0].threads_comment}/>  
        <ReplyFooterContainerComponent 
          router={props.router} 
          threadID={props.indivdualThreadData.threads_id ||  props.indivdualThreadData[0].threads_id} 
          replyCount={props.replyCount || props.replyCount[0]}
        />
      </div>
        <style jsx>{`
          p{
            font-family: "Roboto";
            margin:0;
          }
          div{
            // border:5px black solid;
            border:5px solid #99f;
            border-radius:5px;
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

// Specifies the default values for props:
ReplyRootComponenet.defaultProps = {
  indivdualThreadData:{threads_username:'s'}
};

export default ReplyRootComponenet;

// All content will be mobile initially