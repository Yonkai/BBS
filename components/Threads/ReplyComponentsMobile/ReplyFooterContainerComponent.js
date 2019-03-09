// From photoshop doc
const ReplyFooterContainerComponent = (props) => (
    <>
      <div>
          <p>ReplyFooterContainerComponent</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px darkblue solid;
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

export default ReplyFooterContainerComponent

// All content will be mobile initially