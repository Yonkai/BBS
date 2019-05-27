
import ReplyTextContent from './ReplyTextContent.js';

// From photoshop doc
const ReplyContent = (props) => (
    <>
      <div>
          <ReplyTextContent replyComment={props.replyComment}/>

      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
          }
          div{
            display:grid;
            justify-self:start;
            border:5px #fff solid;
            background: #eef;
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

export default ReplyContent

// All content will be mobile initially