var faker = require('faker');
import ReplyOptionalImage from './ReplyOptionalImage.js' ;
import ReplyImageData from './ReplyImageData';

const ReplyTextContent = (props) => (
    <>
      <div>
      <ReplyOptionalImage/>
          {/* <ReplyImageData/> */}
          <p>{faker.lorem.paragraphs()}</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px darkorange solid;
            margin:2px;          
          }
          }
        `}</style>
    </>
)

export default ReplyTextContent