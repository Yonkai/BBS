var faker = require('faker');

const ThreadReplyCount = (props) => (
    <>
      <div>
          <p>Replies: {props.replyCount}</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
          }
          div{
            border:5px MediumOrchid solid;
          }
        `}</style>
    </>
)

export default ThreadReplyCount