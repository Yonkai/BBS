var faker = require('faker');

const ReplyIDComponent = (props) => (
    <>
      <div>
          <p> No.{props.threadID}</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
            font-size:16px;
          }
          div{
            border:5px #fff solid;
            background: #eef;
          }

        `}</style>
    </>
)

export default ReplyIDComponent