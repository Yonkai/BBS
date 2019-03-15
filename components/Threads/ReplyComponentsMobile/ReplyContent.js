
import ReplyTextContent from './ReplyTextContent.js';

// From photoshop doc
const ReplyContent = (props) => (
    <>
      <div>
          <ReplyTextContent/>

      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px cyan dashed;
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

export default ReplyContent

// All content will be mobile initially