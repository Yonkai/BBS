const ExpandToExclusiveThreadPage = (props) => (
    <>
      <div>
          <p>ExpandToExclusiveThreadPage</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px GreenYellow solid;
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

export default ExpandToExclusiveThreadPage