var faker = require('faker');

const ReplyImageData = (props) => (
    <>
          <p>x</p>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
            font-size:12px;
            display:block;
          }
          div{
            border:5px black solid;
            margin:2px;
            display:block;
           
          
          }
          @media all and (max-width: 520px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,1200px);
            }
    
          }
        `}</style>
    </>
)

export default ReplyImageData