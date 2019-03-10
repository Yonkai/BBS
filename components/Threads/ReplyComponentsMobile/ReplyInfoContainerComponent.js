import ReplyOptions from './ReplyOptions' ;
import ReplyUsername from './ReplyUsername';
import ReplyDateMade from './ReplyDateMade';
import ReplyIDComponent from './ReplyIDComponent.js';

// From photoshop doc, reference id from database?
const ReplyInfoContainerComponent = (props) => (
    <>
      <div>
        <ReplyOptions/>
        <ReplyUsername/>
        <ReplyDateMade/>
        <ReplyIDComponent/>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px red dashed;
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

export default ReplyInfoContainerComponent

// All content will be mobile initially