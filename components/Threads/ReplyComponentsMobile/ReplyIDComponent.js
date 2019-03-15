var faker = require('faker');

const ReplyIDComponent = (props) => (
    <>
      <div>
          <p>{faker.random.alphaNumeric(10)}</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
          }
          div{
            border:5px yellow solid;          
          }

        `}</style>
    </>
)

export default ReplyIDComponent