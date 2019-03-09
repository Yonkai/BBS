// From photoshop doc
const ReplyInfoContainerComponent = (props) => (
    <>
      <div>
          <p>ReplyInfoContainerComponent</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px red solid;
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

export default ReplyInfoContainerComponent

// All content will be mobile initially