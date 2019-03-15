var faker = require('faker');

const ReplyIDComponent = (props) => (
    <>
        <img src={faker.image.imageUrl(256,256)} alt="Missing"/>
    
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px chartreuse solid;
            margin:2px;
            display:grid;
            justify-self:start;
          
          }
          img{
            float: left;
          }
          @media all and (max-width: 520px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,1200px)
            }
    
          }
        `}</style>
    </>
)

export default ReplyIDComponent