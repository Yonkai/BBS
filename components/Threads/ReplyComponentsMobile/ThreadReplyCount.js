var faker = require('faker');

//finds a key with a specific value, really inefficient?
//Definitely really ugly looking! :')
const getKeyByValue = (replyCount, threadID) => 
        Object.keys(replyCount).find(key => replyCount[key]['threads_id'] === threadID);

const ThreadReplyCount = (props) => (
    <>
      <div>
          {props.replyCount.length===1?
          <p>Replies: { props.replyCount[0]['number_of_replys']}</p>:
          <p>Replies: {props.replyCount[getKeyByValue(props.replyCount,props.threadID)]['number_of_replys']}</p>}
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            float: right;
            margin:0;
            margin-right:10px;
          }
          div{
            border-left:10px #fff solid;
            background: #eef;
          }
        `}</style>
    </>
)

export default ThreadReplyCount