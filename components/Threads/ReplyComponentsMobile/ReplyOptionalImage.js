var faker = require('faker');

const ReplyOptionalImage = (props) => (
    <>
    {/* max size for preview, expands to max csize for current container, maybe? */}
    <figure>
      <img src={faker.image.imageUrl(180,180)} alt="Missing"/>
      <figcaption>description, data</figcaption>
    </figure>
        <style jsx>{`
          figure {
            display: flex;
            padding: 5px;
            flex-direction:column;
            max-width: 220px;
            margin: auto;
            float:left;
        }
        
          img {
              max-width: 220px;
              max-height: 150px;
          }
          
          figcaption {
              background-color: #222;
              color: #fff;
              font: italic smaller sans-serif;
              padding: 3px;
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

export default ReplyOptionalImage