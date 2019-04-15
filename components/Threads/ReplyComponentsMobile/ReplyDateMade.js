var faker = require('faker');

const ReplyDateMade = (props) => (
    <>
      <div>
        
          <p>{props.threadTime?props.threadTime:0}</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
          }
          div{
            border:5px salmon solid;
          }
        `}</style>
    </>
)

export default ReplyDateMade