var faker = require('faker');

const ReplyIDComponent = (props) => (
    <>
    {/* max size for preview, expands to max csize for current container, maybe? */}
        <img src={faker.image.imageUrl(180,180)} alt="Missing"/>
        
    
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;

          }
          div{
            border:5px chartreuse solid;
            margin:2px;
            display:grid;
            justify-self:start;
          
          }
          img{
            float: left;
            padding:4px;
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