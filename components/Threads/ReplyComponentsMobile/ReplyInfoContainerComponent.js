import ReplyOptions from './ReplyOptions' ;
import ReplyUsername from './ReplyUsername';
import ReplyDateMade from './ReplyDateMade';
import ReplyIDComponent from './ReplyIDComponent.js';

// From photoshop doc, reference id from database?
const ReplyInfoContainerComponent = (props) => (
    <>
      <div>
        {/* grey-white-grey patterning for visibility/UI/UX maybe? */}
        <ReplyOptions/>
        <ReplyUsername/>
        <ReplyDateMade/>
        <ReplyIDComponent/>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
          }
          div{
            border:5px red dashed;
            display:grid;
            grid-template-columns:1fr 8fr 4fr 4fr;
          
          }
          @media all and (max-width: 520px) {
            div{
              display:grid;
              grid-template-columns:1fr 8fr 4fr 4fr;
              
            }
    
          }
        `}</style>
    </>
)

export default ReplyInfoContainerComponent

// All content will be mobile initially