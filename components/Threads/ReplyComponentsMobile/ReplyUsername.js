var faker = require('faker');

const ReplyUsername = (props) => (
    <>
      <div>
          <p>UN:{props.replyUsername}</p>
          <p>S:{props.replySubject}</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;

          }
          div{
            border:5px #fff solid;
            background: #eef;
          }

        `}</style>
    </>
)


export default ReplyUsername