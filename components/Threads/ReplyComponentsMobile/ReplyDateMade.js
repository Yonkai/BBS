const ReplyDateMade = (props) => (
    <>
      <div>
          <p>ReplyDateMade</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px salmon solid;
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

export default ReplyDateMade