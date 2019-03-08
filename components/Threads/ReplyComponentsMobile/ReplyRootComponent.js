// From photoshop doc
const ReplyRootComponenet = (props) => (
    <>
      <div>
          <p>replyrootcomponent</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px black solid;
            margin:5px;
            padding:5px;
            display:grid;
            justify-self:start;
          
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

export default ReplyRootComponenet

// All content is mobile initially