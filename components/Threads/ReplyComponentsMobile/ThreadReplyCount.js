var faker = require('faker');

const ThreadReplyCount = (props) => (
    <>
      <div>
          <p>{faker.random.number(100)}</p>
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