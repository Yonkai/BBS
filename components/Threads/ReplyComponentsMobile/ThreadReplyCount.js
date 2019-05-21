var faker = require('faker');

const ThreadReplyCount = (props) => (
    <>
      <div>
          {props.replyCount.length===1?
          <p>Replies:{ props.replyCount[0]['number_of_replys']}</p>:
          <p>Replies:{ props.replyCount[props.threadID-1]['number_of_replys']}</p>}
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