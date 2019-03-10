import ReplyOptionalImage from './ReplyOptionalImage.js' ;
import ReplyImageData from './ReplyImageData';

// From photoshop doc
const ReplyContent = (props) => (
    <>
      <div>
          <ReplyOptionalImage/>
          <ReplyImageData/>

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